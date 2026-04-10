import {
	InstanceBase,
	runEntrypoint,
	InstanceStatus,
	type SomeCompanionConfigField,
} from '@companion-module/base'
import { WsClient } from './ws-client.js'
import { getVariableDefinitions } from './variables.js'
import { getActionDefinitions } from './actions.js'
import { getFeedbackDefinitions } from './feedbacks.js'
import { getPresetDefinitions } from './presets.js'

export interface ModuleConfig {
	baseUrl: string
	productionId: string
}

export interface ProductionSource {
	id: string
	name: string
	type: string
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
	pgm: string | null
	pvw: string | null
	onAir: boolean
	ftbActive: boolean
	ovlAlpha: number // 0.0–1.0
	graphics: Record<string, boolean>
	dskLayers: Record<number, boolean>
}

class OpenLiveInstance extends InstanceBase<ModuleConfig> {
	private wsClient: WsClient | null = null
	private production: ProductionDoc | null = null
	private config: ModuleConfig = { baseUrl: 'http://localhost:3000', productionId: '' }

	private state: ModuleState = {
		pgm: null,
		pvw: null,
		onAir: false,
		ftbActive: false,
		ovlAlpha: 1,
		graphics: {},
		dskLayers: {},
	}

	async init(config: ModuleConfig, _isFirstInit: boolean): Promise<void> {
		this.config = config
		this.updateStatus(InstanceStatus.Connecting, 'Initialising')
		await this._setup()
	}

	async destroy(): Promise<void> {
		this._teardown()
	}

	async configUpdated(config: ModuleConfig): Promise<void> {
		this.config = config
		this._teardown()
		await this._setup()
	}

	getConfigFields(): SomeCompanionConfigField[] {
		return [
			{
				type: 'textinput',
				id: 'baseUrl',
				label: 'API Base URL',
				default: 'http://localhost:3000',
				width: 12,
				tooltip: 'Base URL of the Open Live API, e.g. https://36e888958c.apps.osaas.io or http://localhost:3000',
			},
			{
				type: 'textinput',
				id: 'productionId',
				label: 'Production ID',
				default: '',
				width: 12,
				tooltip: 'The _id of the production from GET /api/v1/productions',
			},
		]
	}

	// -----------------------------------------------------------------------
	// Internal helpers
	// -----------------------------------------------------------------------

	private async _setup(): Promise<void> {
		const { baseUrl, productionId } = this.config

		if (!baseUrl || !productionId) {
			this.updateStatus(InstanceStatus.BadConfig, 'API Base URL and Production ID are required')
			return
		}

		// Fetch production details from REST
		try {
			this.production = await this._fetchProduction(baseUrl, productionId)
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err)
			this.log('warn', `Failed to fetch production: ${msg}`)
			this.updateStatus(InstanceStatus.ConnectionFailure, `REST fetch failed: ${msg}`)
			// We still attempt WS connection — server may be briefly unavailable
		}

		// Register definitions (even if production fetch failed, to give empty dropdowns)
		this._registerDefinitions()

		// Open WebSocket — derive WSS/WS URL from base URL (http→ws, https→wss)
		const wsUrl = baseUrl.replace(/^http/, 'ws') + `/ws/productions/${encodeURIComponent(productionId)}/controller`
		this._openWebSocket(wsUrl)
	}

	private _teardown(): void {
		if (this.wsClient) {
			this.wsClient.destroy()
			this.wsClient = null
		}
	}

	private _registerDefinitions(): void {
		this.setVariableDefinitions(getVariableDefinitions())

		this.setActionDefinitions(
			getActionDefinitions(this.wsClient, () => this.wsClient, this.production, () => this.state),
		)

		this.setFeedbackDefinitions(
			getFeedbackDefinitions(() => this.state, this.production),
		)

		this.setPresetDefinitions(getPresetDefinitions(this.production))

		// Set initial variable values
		this.setVariableValues({
			pgm_source: this.state.pgm ?? '',
			pvw_source: this.state.pvw ?? '',
			on_air: String(this.state.onAir),
			production_name: this.production?.name ?? '',
			ftb_active: 'false',
			ovl_alpha: String(this.state.ovlAlpha),
		})
	}

	private _openWebSocket(url: string): void {
		this.log('debug', `Connecting to WebSocket: ${url}`)

		const client = new WsClient(url)
		this.wsClient = client

		client.on('connected', () => {
			this.log('info', 'WebSocket connected')
			this.updateStatus(InstanceStatus.Ok)
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

	private _handleWsMessage(msg: import('./ws-client.js').WsInboundMessage): void {
		switch (msg.type) {
			case 'TALLY': {
				this.state.pgm = msg.pgm
				this.state.pvw = msg.pvw
				this.setVariableValues({
					pgm_source: msg.pgm ?? '',
					pvw_source: msg.pvw ?? '',
				})
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
				this.log('warn', `Macro error: ${msg.macroId} at action index ${msg.failedActionIndex}: ${msg.error}`)
				break
			}
			case 'ERROR': {
				if (msg.error === 'Production not found') {
					this.log('error', `Production "${this.config.productionId}" not found — check module config. Stopping reconnection.`)
					this.updateStatus(InstanceStatus.BadConfig, 'Production not found')
					this.wsClient?.destroy()
					this.wsClient = null
				} else {
					this.log('error', `Server error: ${msg.error}`)
				}
				break
			}
			default: {
				// unknown message type — ignore
			}
		}
	}

	private async _fetchProduction(baseUrl: string, productionId: string): Promise<ProductionDoc> {
		const url = `${baseUrl}/api/v1/productions/${encodeURIComponent(productionId)}`
		const controller = new AbortController()
		const timeout = setTimeout(() => controller.abort(), 5000)
		try {
			const res = await fetch(url, {
				headers: { Accept: 'application/json' },
				signal: controller.signal,
			})
			if (!res.ok) {
				throw new Error(`HTTP ${res.status} from REST API`)
			}
			return (await res.json()) as ProductionDoc
		} finally {
			clearTimeout(timeout)
		}
	}
}

runEntrypoint(OpenLiveInstance, [])
