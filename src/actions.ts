import type { CompanionActionDefinitions } from '@companion-module/base'
import type { WsClient } from './ws-client.js'
import type { ProductionDoc, ModuleState } from './main.js'

export function getActionDefinitions(
	wsClient: WsClient | null,
	getWsClient: () => WsClient | null,
	production: ProductionDoc | null,
	getState: () => ModuleState,
): CompanionActionDefinitions {
	const sources = production?.sources ?? []
	const graphics = production?.graphics ?? []
	const macros = production?.macros ?? []

	const sourceChoices = sources.map((s) => ({ id: s.id, label: s.name }))
	const graphicChoices = graphics.map((g) => ({ id: g.id, label: g.name }))
	const macroChoices = macros.map((m) => ({ id: m.id, label: m.label }))

	void wsClient // used indirectly via getWsClient

	function send(msg: Parameters<WsClient['send']>[0]): void {
		const client = getWsClient()
		if (client) {
			client.send(msg)
		}
	}

	const transitionTypeChoices = [
		{ id: 'mix', label: 'Mix' },
		{ id: 'dip', label: 'Dip' },
		{ id: 'push', label: 'Push' },
	]

	const ftbModeChoices = [
		{ id: 'toggle', label: 'Toggle' },
		{ id: 'on', label: 'Force On' },
		{ id: 'off', label: 'Force Off' },
	]

	return {
		cut: {
			name: 'Cut to Source',
			options: [
				{
					id: 'sourceId',
					type: 'dropdown',
					label: 'Source',
					choices: sourceChoices.length > 0 ? sourceChoices : [{ id: '', label: '(no sources)' }],
					default: sourceChoices[0]?.id ?? '',
					allowCustom: true,
				},
			],
			callback: (action) => {
				send({ type: 'CUT', sourceId: String(action.options['sourceId'] ?? '') })
			},
		},

		set_pvw: {
			name: 'Load Source to Preview',
			options: [
				{
					id: 'sourceId',
					type: 'dropdown',
					label: 'Source',
					choices: sourceChoices.length > 0 ? sourceChoices : [{ id: '', label: '(no sources)' }],
					default: sourceChoices[0]?.id ?? '',
					allowCustom: true,
				},
			],
			callback: (action) => {
				send({ type: 'SET_PVW', sourceId: String(action.options['sourceId'] ?? '') })
			},
		},

		transition: {
			name: 'Transition to Source',
			options: [
				{
					id: 'sourceId',
					type: 'dropdown',
					label: 'Source',
					choices: sourceChoices.length > 0 ? sourceChoices : [{ id: '', label: '(no sources)' }],
					default: sourceChoices[0]?.id ?? '',
					allowCustom: true,
				},
				{
					id: 'transitionType',
					type: 'dropdown',
					label: 'Transition Type',
					choices: transitionTypeChoices,
					default: 'mix',
				},
				{
					id: 'durationMs',
					type: 'number',
					label: 'Duration (ms)',
					default: 1000,
					min: 0,
					max: 10000,
				},
			],
			callback: (action) => {
				send({
					type: 'TRANSITION',
					sourceId: String(action.options['sourceId'] ?? ''),
					transitionType: String(action.options['transitionType'] ?? 'mix'),
					durationMs: Number(action.options['durationMs'] ?? 1000),
				})
			},
		},

		auto: {
			name: 'Auto (Transition Current PVW to PGM)',
			options: [
				{
					id: 'transitionType',
					type: 'dropdown',
					label: 'Transition Type',
					choices: transitionTypeChoices,
					default: 'mix',
				},
				{
					id: 'durationMs',
					type: 'number',
					label: 'Duration (ms)',
					default: 1000,
					min: 0,
					max: 10000,
				},
			],
			callback: (action) => {
				const pvw = getState().pvw
				if (!pvw) {
					// Nothing on PVW — no-op
					return
				}
				send({
					type: 'TRANSITION',
					sourceId: pvw,
					transitionType: String(action.options['transitionType'] ?? 'mix'),
					durationMs: Number(action.options['durationMs'] ?? 1000),
				})
			},
		},

		take: {
			name: 'Take (PVW to PGM)',
			options: [],
			callback: () => {
				send({ type: 'TAKE' })
			},
		},

		ftb: {
			name: 'Fade to Black',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Mode',
					choices: ftbModeChoices,
					default: 'toggle',
				},
				{
					id: 'durationMs',
					type: 'number',
					label: 'Duration (ms)',
					default: 1000,
					min: 0,
					max: 10000,
				},
			],
			callback: (action) => {
				const mode = String(action.options['mode'] ?? 'toggle')
				const durationMs = Number(action.options['durationMs'] ?? 1000)
				if (mode === 'on') {
					send({ type: 'FTB', active: true, durationMs })
				} else if (mode === 'off') {
					send({ type: 'FTB', active: false, durationMs })
				} else {
					send({ type: 'FTB', durationMs })
				}
			},
		},

		set_ovl_alpha: {
			name: 'Set Overlay Alpha',
			options: [
				{
					id: 'alpha',
					type: 'number',
					label: 'Overlay Alpha %',
					default: 100,
					min: 0,
					max: 100,
				},
			],
			callback: (action) => {
				send({ type: 'SET_OVL', alpha: Number(action.options['alpha'] ?? 100) / 100 })
			},
		},

		go_live: {
			name: 'Go Live',
			options: [],
			callback: () => {
				send({ type: 'GO_LIVE' })
			},
		},

		cut_stream: {
			name: 'Cut Stream',
			options: [],
			callback: () => {
				send({ type: 'CUT_STREAM' })
			},
		},

		graphic_on: {
			name: 'Graphic On',
			options: [
				{
					id: 'overlayId',
					type: 'dropdown',
					label: 'Graphic',
					choices: graphicChoices.length > 0 ? graphicChoices : [{ id: '', label: '(no graphics)' }],
					default: graphicChoices[0]?.id ?? '',
					allowCustom: true,
				},
			],
			callback: (action) => {
				send({ type: 'GRAPHIC_ON', overlayId: String(action.options['overlayId'] ?? '') })
			},
		},

		graphic_off: {
			name: 'Graphic Off',
			options: [
				{
					id: 'overlayId',
					type: 'dropdown',
					label: 'Graphic',
					choices: graphicChoices.length > 0 ? graphicChoices : [{ id: '', label: '(no graphics)' }],
					default: graphicChoices[0]?.id ?? '',
					allowCustom: true,
				},
			],
			callback: (action) => {
				send({ type: 'GRAPHIC_OFF', overlayId: String(action.options['overlayId'] ?? '') })
			},
		},

		dsk_toggle: {
			name: 'DSK Toggle',
			options: [
				{
					id: 'layer',
					type: 'number',
					label: 'DSK Layer',
					default: 1,
					min: 1,
					max: 8,
				},
				{
					id: 'visible',
					type: 'checkbox',
					label: 'Force Visible (unchecked = toggle)',
					default: false,
				},
				{
					id: 'useForceVisible',
					type: 'checkbox',
					label: 'Use Force Visible value',
					default: false,
				},
			],
			callback: (action) => {
				const layer = Number(action.options['layer'] ?? 1)
				const useForce = Boolean(action.options['useForceVisible'])
				if (useForce) {
					send({ type: 'DSK_TOGGLE', layer, visible: Boolean(action.options['visible']) })
				} else {
					send({ type: 'DSK_TOGGLE', layer })
				}
			},
		},

		macro_exec: {
			name: 'Execute Macro',
			options: [
				{
					id: 'macroId',
					type: 'dropdown',
					label: 'Macro',
					choices: macroChoices.length > 0 ? macroChoices : [{ id: '', label: '(no macros)' }],
					default: macroChoices[0]?.id ?? '',
					allowCustom: true,
				},
			],
			callback: (action) => {
				send({ type: 'MACRO_EXEC', macroId: String(action.options['macroId'] ?? '') })
			},
		},
	}
}
