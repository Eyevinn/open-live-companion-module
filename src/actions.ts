import { combineRgb } from '@companion-module/base'
import type { CompanionActionDefinitions } from '@companion-module/base'
import type { WsClient } from './ws-client.js'
import type { ProductionDoc } from './main.js'

export function getActionDefinitions(
	wsClient: WsClient | null,
	getWsClient: () => WsClient | null,
	production: ProductionDoc | null,
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
					type: 'textinput',
					label: 'Transition Type',
					default: 'mix',
				},
				{
					id: 'durationMs',
					type: 'number',
					label: 'Duration (ms)',
					default: 500,
					min: 0,
					max: 10000,
				},
			],
			callback: (action) => {
				send({
					type: 'TRANSITION',
					sourceId: String(action.options['sourceId'] ?? ''),
					transitionType: String(action.options['transitionType'] ?? 'mix'),
					durationMs: Number(action.options['durationMs'] ?? 500),
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

// Suppress unused import warning — combineRgb is imported for potential future use in action feedback
void combineRgb
