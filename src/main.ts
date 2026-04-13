import {
	InstanceBase,
	runEntrypoint,
	InstanceStatus,
	type SomeCompanionConfigField,
} from '@companion-module/base'
import { WsClient } from './ws-client.js'
import { getVariableDefinitions, emptySourceVars, sourceVarsFromList, emptyProductionSlotVars, productionSlotVarsFromList } from './variables.js'
import { getActionDefinitions, type ActionCallbacks } from './actions.js'
import { getFeedbackDefinitions } from './feedbacks.js'
import { getLandingPresets, getControlPresets } from './presets.js'

export interface ModuleConfig {
	apiUrl: string
}

export interface ProductionSource {
	id: string
	name: string
	type: string
	mixerInput: string
}

export interface ProductionGraphic {
	id: string
	name: string
	type: string
}

export interface ProductionMacro {
	id: string
	slot: number
	label: string
	color: string
	actions: unknown[]
}

export interface ProductionDoc {
	_id: string
	name: string
	status: 'idle' | 'activating' | 'active' | 'inactive'
	sources: ProductionSource[]
	graphics: ProductionGraphic[]
	macros: ProductionMacro[]
}

export interface ModuleState {
	productions: ProductionDoc[]
	selectedProductionId: string | null
	pgm: string | null
	pvw: string | null
	onAir: boolean
	ftbActive: boolean
	ovlAlpha: number // 0.0–1.0
	graphics: Record<string, boolean>
	dskLayers: Record<number, boolean>
}

const POLL_INTERVAL_MS = 10_000
const RETRY_SETUP_MS = 15_000

class OpenLiveInstance extends InstanceBase<ModuleConfig> {
	private wsClient: WsClient | null = null
	private selectedProduction: ProductionDoc | null = null
	private config: ModuleConfig = { apiUrl: 'http://localhost:8080' }
	private pollTimer: ReturnType<typeof setInterval> | null = null
	private retryTimer: ReturnType<typeof setTimeout> | null = null

	private state: ModuleState = {
		productions: [],
		selectedProductionId: null,
		pgm: null,
		pvw: null,
		onAir: false,
		ftbActive: false,
		ovlAlpha: 1,
		graphics: {},
		dskLayers: {},
	}

	// -----------------------------------------------------------------------
	// Lifecycle
	// -----------------------------------------------------------------------

	async init(config: ModuleConfig, _isFirstInit: boolean): Promise<void> {
		this.config = config
		// Initialise all variables synchronously before any async work so Companion
		// never renders buttons with "undefined" while the first fetch is in-flight.
		this.setVariableDefinitions(getVariableDefinitions())
		this.setVariableValues({
			selected_production_name: '',
			production_name: '',
			pgm_source: '',
			pvw_source: '',
			on_air: 'false',
			ftb_active: 'false',
			ovl_alpha: '1',
			...emptySourceVars(),
			...emptyProductionSlotVars(),
		})
		this.updateStatus(InstanceStatus.Connecting, 'Loading productions')
		await this._setup()
	}

	async destroy(): Promise<void> {
		this._teardownWs()
		this._stopPolling()
		this._cancelRetry()
	}

	async configUpdated(config: ModuleConfig): Promise<void> {
		this.config = config
		this._teardownWs()
		this._stopPolling()
		this._cancelRetry()
		await this._setup()
	}

	getConfigFields(): SomeCompanionConfigField[] {
		return [
			{
				type: 'textinput',
				id: 'apiUrl',
				label: 'Open Live URL',
				default: 'http://localhost:8080',
				width: 12,
				tooltip: 'URL of the Open Live API — e.g. https://36e888958c.apps.osaas.io or http://localhost:3000',
			},
		]
	}

	// -----------------------------------------------------------------------
	// Setup — landing mode
	// -----------------------------------------------------------------------

	private async _setup(): Promise<void> {
		const { apiUrl } = this.config

		if (!apiUrl) {
			this.updateStatus(InstanceStatus.BadConfig, 'Open Live URL is required')
			return
		}

		try {
			const all = await this._fetchProductions(apiUrl)
			this.log('debug', `Fetched ${all.length} production(s): ${JSON.stringify(all.map(p => ({ id: p._id, name: p.name, status: p.status })))}`)
			this.state.productions = all.filter((p) => p.status === 'active')
			this.log('info', `Found ${this.state.productions.length} active production(s) out of ${all.length} total`)
			this.updateStatus(InstanceStatus.Ok)
			this._cancelRetry()
		} catch (err) {
			const msg = this._extractErrorMessage(err)
			this.log('warn', `Failed to fetch productions: ${msg}`)
			this.updateStatus(InstanceStatus.ConnectionFailure, `Could not reach Open Live API: ${msg}`)
			this._scheduleRetry()
		}

		this._registerLandingMode()
	}

	// -----------------------------------------------------------------------
	// Production selection
	// -----------------------------------------------------------------------

	public async selectProduction(productionId: string): Promise<void> {
		this._teardownWs()
		this._stopPolling()
		this._cancelRetry()

		const { apiUrl } = this.config

		let production: ProductionDoc
		try {
			production = await this._fetchProduction(apiUrl, productionId)
		} catch (err) {
			const msg = this._extractErrorMessage(err)
			this.log('error', `Failed to load production ${productionId}: ${msg}`)
			this.updateStatus(InstanceStatus.ConnectionFailure, `Failed to load production: ${msg}`)
			return
		}

		// Enrich source slots: API returns { sourceId, mixerInput }; we normalise to { id, name }
		try {
			const allSources = await this._fetchSources(apiUrl)
			const VIRTUAL_SOURCE_NAMES: Record<string, string> = {
				'__test1__': 'Pinwheel',
				'__test2__': 'Colors',
			}
			const sourceMap = new Map(allSources.map((s) => [s.id, s.name]))
			production.sources = (production.sources as unknown as Array<{ sourceId: string; mixerInput: string }>).map((slot) => ({
				id: slot.sourceId,
				name: sourceMap.get(slot.sourceId) ?? VIRTUAL_SOURCE_NAMES[slot.sourceId] ?? slot.sourceId,
				type: 'srt',
				mixerInput: slot.mixerInput,
			}))
		} catch {
			// Fallback: use sourceId as name
			const VIRTUAL_SOURCE_NAMES: Record<string, string> = { '__test1__': 'Pinwheel', '__test2__': 'Colors' }
			production.sources = (production.sources as unknown as Array<{ sourceId: string; mixerInput: string }>).map((slot) => ({
				id: slot.sourceId,
				name: VIRTUAL_SOURCE_NAMES[slot.sourceId] ?? slot.sourceId,
				type: 'srt',
				mixerInput: slot.mixerInput,
			}))
		}

		this.selectedProduction = production
		this.state.selectedProductionId = productionId
		this._resetControlState()
		this._registerControlMode()

		// Derive WS URL: http→ws, https→wss, localhost→127.0.0.1
		const wsUrl = this._normaliseUrl(apiUrl).replace(/^http/, 'ws') + `/ws/productions/${encodeURIComponent(productionId)}/controller`
		this._openWebSocket(wsUrl)
		this._startPolling()
	}

	public async refreshProductions(): Promise<void> {
		try {
			const all = await this._fetchProductions(this.config.apiUrl)
			this.log('debug', `Refresh: fetched ${all.length} production(s): ${JSON.stringify(all.map(p => ({ id: p._id, name: p.name, status: p.status })))}`)
			this.state.productions = all.filter((p) => p.status === 'active')
			this.log('info', `Refreshed — ${this.state.productions.length} active production(s) out of ${all.length} total`)
		} catch (err) {
			this.log('warn', `Failed to refresh productions: ${this._extractErrorMessage(err)}`)
		}
		this._registerLandingMode()
	}

	public async backToProductions(): Promise<void> {
		this._teardownWs()
		this._stopPolling()

		this.selectedProduction = null
		this.state.selectedProductionId = null
		this._resetControlState()

		// Re-fetch production list
		try {
			const all = await this._fetchProductions(this.config.apiUrl)
			this.state.productions = all.filter((p) => p.status === 'active')
		} catch (err) {
			this.log('warn', `Failed to refresh production list: ${err}`)
		}

		this._registerLandingMode()
		this.updateStatus(InstanceStatus.Ok)
	}

	// -----------------------------------------------------------------------
	// Mode registration
	// -----------------------------------------------------------------------

	private _callbacks(): ActionCallbacks {
		return {
			selectProduction: (id) => void this.selectProduction(id),
			backToProductions: () => void this.backToProductions(),
			refreshProductions: () => void this.refreshProductions(),
		}
	}

	private _registerLandingMode(): void {
		this.setVariableDefinitions(getVariableDefinitions())
		this.setActionDefinitions(
			getActionDefinitions(() => this.wsClient, null, () => this.state, this._callbacks()),
		)
		this.setFeedbackDefinitions(getFeedbackDefinitions(() => this.state, null, this.log.bind(this)))
		this.setPresetDefinitions(getLandingPresets(this.state.productions))
		this.setVariableValues({
			selected_production_name: '',
			production_name: '',
			pgm_source: '',
			pvw_source: '',
			on_air: 'false',
			ftb_active: 'false',
			ovl_alpha: '1',
			...emptySourceVars(),
			...productionSlotVarsFromList(this.state.productions),
		})
		this.checkFeedbacks('production_slot_occupied')
	}

	private _registerControlMode(): void {
		this.setVariableDefinitions(getVariableDefinitions())
		this.setActionDefinitions(
			getActionDefinitions(() => this.wsClient, this.selectedProduction, () => this.state, this._callbacks()),
		)
		this.setFeedbackDefinitions(getFeedbackDefinitions(() => this.state, this.selectedProduction, this.log.bind(this)))
		this.setPresetDefinitions(getControlPresets(this.selectedProduction))
		this.log('debug', `Sources: ${JSON.stringify(this.selectedProduction?.sources?.map(s => `${s.name}(${s.id})`))}`)
		this.setVariableValues({
			selected_production_name: this.selectedProduction?.name ?? '',
			production_name: this.selectedProduction?.name ?? '',
			pgm_source: '',
			pvw_source: '',
			on_air: 'false',
			ftb_active: 'false',
			ovl_alpha: '1',
			...sourceVarsFromList(this.selectedProduction?.sources ?? []),
		})
		// Force Companion to re-evaluate all feedbacks now that definitions are registered.
		this.log('debug', `Control mode registered — forcing checkFeedbacks`)
		this.checkFeedbacks('pgm_tally', 'pvw_tally', 'on_air', 'ftb_active', 'graphic_active', 'dsk_visible')
	}

	// -----------------------------------------------------------------------
	// WebSocket
	// -----------------------------------------------------------------------

	private _openWebSocket(url: string): void {
		this.log('debug', `Connecting to WebSocket: ${url}`)
		const client = new WsClient(url)
		this.wsClient = client

		client.on('connected', () => {
			this.log('info', 'WebSocket connected')
			this.updateStatus(InstanceStatus.Ok)
			// Re-evaluate all feedbacks on (re)connect so stale state is cleared
			this.checkFeedbacks('pgm_tally', 'pvw_tally', 'on_air', 'ftb_active', 'graphic_active', 'dsk_visible')
		})

		client.on('disconnected', () => {
			this.log('warn', 'WebSocket disconnected, reconnecting…')
			this.updateStatus(InstanceStatus.Connecting, 'Reconnecting')
		})

		client.on('message', (msg) => {
			this._handleWsMessage(msg)
		})

		client.connect()
	}

	private _teardownWs(): void {
		if (this.wsClient) {
			this.wsClient.destroy()
			this.wsClient = null
		}
	}

	private _handleWsMessage(msg: import('./ws-client.js').WsInboundMessage): void {
		switch (msg.type) {
			case 'TALLY': {
				this.log('info', `TALLY received — pgm: ${msg.pgm ?? 'null'}, pvw: ${msg.pvw ?? 'null'}`)
				this.state.pgm = msg.pgm
				this.state.pvw = msg.pvw
				this.setVariableValues({ pgm_source: msg.pgm ?? '', pvw_source: msg.pvw ?? '' })
				this.checkFeedbacks('pgm_tally', 'pvw_tally')
				break
			}
			case 'ON_AIR': {
				this.state.onAir = msg.value
				this.setVariableValues({ on_air: String(msg.value) })
				this.checkFeedbacks('on_air')
				break
			}
			case 'GRAPHIC': {
				this.state.graphics[msg.overlayId] = msg.active
				this.checkFeedbacks('graphic_active')
				break
			}
			case 'DSK_STATE': {
				this.state.dskLayers[msg.layer] = msg.visible
				this.checkFeedbacks('dsk_visible')
				break
			}
			case 'FTB_STATE': {
				this.state.ftbActive = msg.active
				this.setVariableValues({ ftb_active: String(msg.active) })
				this.checkFeedbacks('ftb_active')
				break
			}
			case 'OVL_STATE': {
				this.state.ovlAlpha = msg.alpha
				this.setVariableValues({ ovl_alpha: String(msg.alpha) })
				break
			}
			case 'MACRO_EXECUTED': {
				this.log('debug', `Macro executed: ${msg.macroId}`)
				break
			}
			case 'MACRO_ERROR': {
				this.log('warn', `Macro error at action ${msg.failedActionIndex}: ${msg.error}`)
				break
			}
			case 'ERROR': {
				if (msg.error === 'Production not found') {
					this.log('error', 'Production not found — returning to production list')
					void this.backToProductions()
				} else {
					this.log('error', `Server error: ${msg.error}`)
				}
				break
			}
			default: {
				// unknown — ignore
			}
		}
	}

	// -----------------------------------------------------------------------
	// Polling — detect inactive production
	// -----------------------------------------------------------------------

	private _startPolling(): void {
		this._stopPolling()
		this.pollTimer = setInterval(() => {
			void this._checkProductionActive()
		}, POLL_INTERVAL_MS)
	}

	private _stopPolling(): void {
		if (this.pollTimer !== null) {
			clearInterval(this.pollTimer)
			this.pollTimer = null
		}
	}

	private async _checkProductionActive(): Promise<void> {
		const id = this.state.selectedProductionId
		if (!id) return
		try {
			const prod = await this._fetchProduction(this.config.apiUrl, id)
			if (prod.status !== 'active') {
				this.log('info', `Production "${prod.name}" is no longer active — returning to production list`)
				await this.backToProductions()
			}
		} catch {
			// transient — ignore, will retry next interval
		}
	}

	// -----------------------------------------------------------------------
	// REST helpers
	// -----------------------------------------------------------------------

	/** Normalise the URL so Node.js doesn't try ::1 before 127.0.0.1 on macOS */
	private _normaliseUrl(url: string): string {
		return url.replace(/^(https?:\/\/)localhost\b/, '$1127.0.0.1')
	}

	private async _fetchProductions(apiUrl: string): Promise<ProductionDoc[]> {
		const url = `${this._normaliseUrl(apiUrl)}/api/v1/productions`
		this.log('debug', `Fetching productions from: ${url}`)
		const ctrl = new AbortController()
		const timeout = setTimeout(() => ctrl.abort(), 5000)
		try {
			const res = await fetch(url, {
				headers: { Accept: 'application/json' },
				signal: ctrl.signal,
			})
			if (!res.ok) throw new Error(`HTTP ${res.status}`)
			return (await res.json()) as ProductionDoc[]
		} finally {
			clearTimeout(timeout)
		}
	}

	private async _fetchSources(apiUrl: string): Promise<Array<{ id: string; name: string }>> {
		const ctrl = new AbortController()
		const timeout = setTimeout(() => ctrl.abort(), 5000)
		try {
			const res = await fetch(`${this._normaliseUrl(apiUrl)}/api/v1/sources`, {
				headers: { Accept: 'application/json' },
				signal: ctrl.signal,
			})
			if (!res.ok) throw new Error(`HTTP ${res.status}`)
			return (await res.json()) as Array<{ id: string; name: string }>
		} finally {
			clearTimeout(timeout)
		}
	}

	private async _fetchProduction(apiUrl: string, productionId: string): Promise<ProductionDoc> {
		const ctrl = new AbortController()
		const timeout = setTimeout(() => ctrl.abort(), 5000)
		try {
			const res = await fetch(`${this._normaliseUrl(apiUrl)}/api/v1/productions/${encodeURIComponent(productionId)}`, {
				headers: { Accept: 'application/json' },
				signal: ctrl.signal,
			})
			if (!res.ok) throw new Error(`HTTP ${res.status}`)
			return (await res.json()) as ProductionDoc
		} finally {
			clearTimeout(timeout)
		}
	}

	// -----------------------------------------------------------------------
	// Retry (landing mode only — reconnect when API becomes reachable)
	// -----------------------------------------------------------------------

	private _scheduleRetry(): void {
		this._cancelRetry()
		this.retryTimer = setTimeout(() => {
			this.retryTimer = null
			// Only retry if we're still in landing mode (no production selected)
			if (!this.state.selectedProductionId) {
				this.log('debug', `Retrying Open Live API connection…`)
				void this._setup()
			}
		}, RETRY_SETUP_MS)
	}

	private _cancelRetry(): void {
		if (this.retryTimer !== null) {
			clearTimeout(this.retryTimer)
			this.retryTimer = null
		}
	}

	// -----------------------------------------------------------------------
	// Misc
	// -----------------------------------------------------------------------

	private _extractErrorMessage(err: unknown): string {
		if (!(err instanceof Error)) return String(err)
		// Node.js fetch errors wrap the real cause (e.g. ECONNREFUSED) as err.cause
		const cause = (err as NodeJS.ErrnoException & { cause?: unknown }).cause
		if (cause instanceof Error) {
			const code = (cause as NodeJS.ErrnoException).code
			this.log('debug', `Fetch error cause: ${cause.message} (code: ${code ?? 'none'})`)
			if (code === 'ECONNREFUSED') return 'Connection refused — is Open Live running?'
			if (code === 'ENOTFOUND') return 'Host not found — check the URL'
			if (code === 'ECONNRESET') return 'Connection reset'
			return cause.message
		}
		this.log('debug', `Fetch error: ${err.name} — ${err.message}`)
		if (err.name === 'AbortError') return 'Request timed out'
		return err.message
	}

	private _resetControlState(): void {
		this.state.pgm = null
		this.state.pvw = null
		this.state.onAir = false
		this.state.ftbActive = false
		this.state.graphics = {}
		this.state.dskLayers = {}
	}
}

runEntrypoint(OpenLiveInstance, [])
