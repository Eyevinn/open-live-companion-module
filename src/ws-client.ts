import WebSocket from 'ws'
import { EventEmitter } from 'events'

export type WsInboundMessage =
	| { type: 'TALLY'; pgm: string | null; pvw: string | null }
	| { type: 'ON_AIR'; value: boolean }
	| { type: 'GRAPHIC'; overlayId: string; active: boolean }
	| { type: 'DSK_STATE'; layer: number; visible: boolean }
	| { type: 'FTB_STATE'; active: boolean }
	| { type: 'OVL_STATE'; alpha: number }
	| { type: 'MACRO_EXECUTED'; macroId: string }
	| { type: 'MACRO_ERROR'; macroId: string; failedActionIndex: number; error: string }
	| { type: 'ERROR'; error: string }

export type WsOutboundMessage =
	| { type: 'CUT'; mixerInput: string }
	| { type: 'TRANSITION'; mixerInput: string; transitionType: string; durationMs?: number }
	| { type: 'SET_PVW'; mixerInput: string }
	| { type: 'FTB'; active?: boolean; durationMs: number }
	| { type: 'SET_OVL'; alpha: number }
	| { type: 'TAKE' }
	| { type: 'GO_LIVE' }
	| { type: 'CUT_STREAM' }
	| { type: 'GRAPHIC_ON'; overlayId: string }
	| { type: 'GRAPHIC_OFF'; overlayId: string }
	| { type: 'DSK_TOGGLE'; layer: number; visible?: boolean }
	| { type: 'MACRO_EXEC'; macroId: string }

const MIN_RECONNECT_MS = 1000
const MAX_RECONNECT_MS = 30000

export interface WsClientEvents {
	message: (msg: WsInboundMessage) => void
	connected: () => void
	disconnected: () => void
}

export class WsClient extends EventEmitter {
	private url: string
	private authToken: string | undefined
	private ws: WebSocket | null = null
	private reconnectTimer: ReturnType<typeof setTimeout> | null = null
	private currentBackoffMs = MIN_RECONNECT_MS
	private destroyed = false

	constructor(url: string, authToken?: string) {
		super()
		this.url = url
		this.authToken = authToken
	}

	connect(): void {
		this.destroyed = false
		this._connect()
	}

	private _connect(): void {
		if (this.destroyed) return
		if (this.ws) {
			try {
				this.ws.terminate()
			} catch (_) {
				// ignore
			}
			this.ws = null
		}

		const headers = this.authToken ? { Authorization: `Bearer ${this.authToken}` } : undefined
		const ws = new WebSocket(this.url, { headers })
		this.ws = ws

		ws.on('open', () => {
			if (this.ws !== ws) return
			this.currentBackoffMs = MIN_RECONNECT_MS
			this.emit('connected')
		})

		ws.on('message', (data: WebSocket.RawData) => {
			if (this.ws !== ws) return
			// Reset backoff on successful communication
			this.currentBackoffMs = MIN_RECONNECT_MS
			try {
				const msg = JSON.parse(data.toString()) as WsInboundMessage
				this.emit('message', msg)
			} catch (e) {
				// Ignore malformed messages
			}
		})

		ws.on('close', () => {
			if (this.ws !== ws) return
			this.ws = null
			this.emit('disconnected')
			this._scheduleReconnect()
		})

		ws.on('error', (_err: Error) => {
			if (this.ws !== ws) return
			// error always followed by close; just let close handler schedule reconnect
		})
	}

	private _scheduleReconnect(): void {
		if (this.destroyed) return
		const delay = this.currentBackoffMs
		this.currentBackoffMs = Math.min(this.currentBackoffMs * 2, MAX_RECONNECT_MS)
		this.reconnectTimer = setTimeout(() => {
			this.reconnectTimer = null
			this._connect()
		}, delay)
	}

	send(msg: WsOutboundMessage): void {
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.ws.send(JSON.stringify(msg))
		}
	}

	destroy(): void {
		this.destroyed = true
		if (this.reconnectTimer !== null) {
			clearTimeout(this.reconnectTimer)
			this.reconnectTimer = null
		}
		if (this.ws) {
			try {
				this.ws.terminate()
			} catch (_) {
				// ignore
			}
			this.ws = null
		}
	}

	// Typed emit/on overloads for TypeScript satisfaction
	emit(event: 'message', msg: WsInboundMessage): boolean
	emit(event: 'connected'): boolean
	emit(event: 'disconnected'): boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	emit(event: string | symbol, ...args: any[]): boolean {
		return super.emit(event, ...args)
	}

	on(event: 'message', listener: (msg: WsInboundMessage) => void): this
	on(event: 'connected', listener: () => void): this
	on(event: 'disconnected', listener: () => void): this
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	on(event: string | symbol, listener: (...args: any[]) => void): this {
		return super.on(event, listener)
	}
}
