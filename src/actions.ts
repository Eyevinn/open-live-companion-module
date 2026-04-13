import type { CompanionActionDefinitions } from '@companion-module/base'
import type { WsClient } from './ws-client.js'
import type { ProductionDoc, ModuleState } from './main.js'

export interface ActionCallbacks {
	selectProduction: (id: string) => void
	backToProductions: () => void
	refreshProductions: () => void
}

/**
 * Shared option for slot-based source selection (1-based index).
 * Source 1 = production.sources[0], Source 2 = production.sources[1], etc.
 */
const sourceIndexOption = {
	id: 'sourceIndex',
	type: 'number' as const,
	label: 'Source Slot (1–8)',
	default: 1,
	min: 1,
	max: 8,
}

export function getActionDefinitions(
	getWsClient: () => WsClient | null,
	production: ProductionDoc | null,
	getState: () => ModuleState,
	callbacks: ActionCallbacks,
): CompanionActionDefinitions {
	const graphics = production?.graphics ?? []
	const macros = production?.macros ?? []

	const graphicChoices = graphics.map((g) => ({ id: g.id, label: g.name }))
	const macroChoices = macros.map((m) => ({ id: m.id, label: m.label }))

	function send(msg: Parameters<WsClient['send']>[0]): void {
		const client = getWsClient()
		if (client) client.send(msg)
	}

	/** Resolve a 1-based sourceIndex to the production source's ID. Returns null if out of range. */
	function resolveSourceId(sourceIndex: number): string | null {
		return production?.sources[sourceIndex - 1]?.id ?? null
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
		// -----------------------------------------------------------------------
		// Navigation
		// -----------------------------------------------------------------------
		select_production: {
			name: 'Select Production',
			options: [
				{
					id: 'productionId',
					type: 'textinput',
					label: 'Production ID',
					default: '',
				},
			],
			callback: (action) => {
				const id = String(action.options['productionId'] ?? '')
				if (id) callbacks.selectProduction(id)
			},
		},

		select_production_slot: {
			name: 'Select Production by Slot',
			options: [
				{
					id: 'slot',
					type: 'number',
					label: 'Production Slot (1–8)',
					default: 1,
					min: 1,
					max: 8,
				},
			],
			callback: (action) => {
				const slot = Number(action.options['slot'] ?? 1)
				const prod = getState().productions[slot - 1]
				if (prod?._id) callbacks.selectProduction(prod._id)
			},
		},

		back_to_productions: {
			name: 'Back to Production List',
			options: [],
			callback: () => {
				callbacks.backToProductions()
			},
		},

		refresh_productions: {
			name: 'Refresh Production List',
			options: [],
			callback: () => {
				callbacks.refreshProductions()
			},
		},

		// -----------------------------------------------------------------------
		// Switching
		// -----------------------------------------------------------------------
		cut: {
			name: 'Cut to Source Slot',
			options: [sourceIndexOption],
			callback: (action) => {
				const idx = Number(action.options['sourceIndex'] ?? 1)
				const sourceId = resolveSourceId(idx)
				if (!sourceId) return
				send({ type: 'CUT', sourceId })
			},
		},

		set_pvw: {
			name: 'Load Source Slot to Preview',
			options: [sourceIndexOption],
			callback: (action) => {
				const idx = Number(action.options['sourceIndex'] ?? 1)
				const sourceId = resolveSourceId(idx)
				if (!sourceId) return
				// No-op if the source is already live on PGM — can't preview what's on air
				if (getState().pgm === sourceId) return
				send({ type: 'SET_PVW', sourceId })
			},
		},

		transition: {
			name: 'Transition to Source Slot',
			options: [
				sourceIndexOption,
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
				const idx = Number(action.options['sourceIndex'] ?? 1)
				const sourceId = resolveSourceId(idx)
				if (!sourceId) return
				send({
					type: 'TRANSITION',
					sourceId,
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
				if (!pvw) return // Nothing on PVW — no-op
				send({
					type: 'TRANSITION',
					sourceId: pvw,
					transitionType: String(action.options['transitionType'] ?? 'mix'),
					durationMs: Number(action.options['durationMs'] ?? 1000),
				})
				// Transitioning out of FTB — deactivate it so the button goes dark
				if (getState().ftbActive) {
					send({ type: 'FTB', active: false, durationMs: 0 })
				}
			},
		},

		take: {
			name: 'Take (Cut PVW to PGM)',
			options: [],
			callback: () => {
				send({ type: 'TAKE' })
				// Taking a cut out of FTB — deactivate it so the button goes dark
				if (getState().ftbActive) {
					send({ type: 'FTB', active: false, durationMs: 0 })
				}
			},
		},

		// -----------------------------------------------------------------------
		// Fade to Black
		// -----------------------------------------------------------------------
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

		// -----------------------------------------------------------------------
		// OVL Alpha
		// -----------------------------------------------------------------------
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

		// -----------------------------------------------------------------------
		// Stream Control
		// -----------------------------------------------------------------------
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

		// -----------------------------------------------------------------------
		// Graphics
		// -----------------------------------------------------------------------
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

		// -----------------------------------------------------------------------
		// DSK
		// -----------------------------------------------------------------------
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

		// -----------------------------------------------------------------------
		// Macros
		// -----------------------------------------------------------------------
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
