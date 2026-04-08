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
import * as http from 'http'

export interface ModuleConfig {
	host: string
	port: number
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
	graphics: Record<string, boolean>
	dskLayers: Record<number, boolean>
}

class OpenLiveInstance extends InstanceBase<ModuleConfig> {
	private wsClient: WsClient | null = null
	private production: ProductionDoc | null = null
	private config: ModuleConfig = { host: 'localhost', port: 3000, productionId: '' }

	private state: ModuleState = {
		pgm: null,
		pvw: null,
		onAir: false,
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
				id: 'host',
				label: 'Host',
				default: 'localhost',
				width: 8,
			},
			{
				type: 'number',
				id: 'port',
				label: 'Port',
				default: 3000,
				min: 1,
				max: 65535,
				width: 4,
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
		const { host, port, productionId } = this.config

		if (!host || !productionId) {
			this.updateStatus(InstanceStatus.BadConfig, 'Host and Production ID are required')
			return
		}

		// Fetch production details from REST
		try {
			this.production = await this._fetchProduction(host, port, productionId)
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err)
			this.log('warn', `Failed to fetch production: ${msg}`)
			this.updateStatus(InstanceStatus.ConnectionFailure, `REST fetch failed: ${msg}`)
			// We still attempt WS connection — server may be briefly unavailable
		}

		// Register definitions (even if production fetch failed, to give empty dropdowns)
		this._registerDefinitions()

		// Open WebSocket
		this._openWebSocket(host, port, productionId)
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
			getActionDefinitions(this.wsClient, () => this.wsClient, this.production),
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
		})
	}

	private _openWebSocket(host: string, port: number, productionId: string): void {
		const url = `ws://${host}:${port}/ws/productions/${productionId}/controller`
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
			case 'MACRO_EXECUTED': {
				this.log('debug', `Macro executed: ${msg.macroId}`)
				break
			}
			case 'MACRO_ERROR': {
				this.log('warn', `Macro error: ${msg.macroId} at action index ${msg.failedActionIndex}: ${msg.error}`)
				break
			}
			case 'ERROR': {
				this.log('error', `Server error: ${msg.error}`)
				break
			}
			default: {
				// unknown message type — ignore
			}
		}
	}

	private _fetchProduction(host: string, port: number, productionId: string): Promise<ProductionDoc> {
		return new Promise<ProductionDoc>((resolve, reject) => {
			const options: http.RequestOptions = {
				hostname: host,
				port,
				path: `/api/v1/productions/${encodeURIComponent(productionId)}`,
				method: 'GET',
				headers: { Accept: 'application/json' },
			}

			const req = http.request(options, (res) => {
				let raw = ''
				res.on('data', (chunk: Buffer) => {
					raw += chunk.toString()
				})
				res.on('end', () => {
					if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
						try {
							const doc = JSON.parse(raw) as ProductionDoc
							resolve(doc)
						} catch (e) {
							reject(new Error(`Failed to parse production JSON: ${String(e)}`))
						}
					} else {
						reject(new Error(`HTTP ${res.statusCode ?? 'unknown'} from REST API`))
					}
				})
			})

			req.on('error', (err: Error) => {
				reject(err)
			})

			req.setTimeout(5000, () => {
				req.destroy(new Error('Request timeout'))
			})

			req.end()
		})
	}
}

runEntrypoint(OpenLiveInstance, [])
