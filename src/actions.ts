import type { CompanionActionDefinitions } from '@companion-module/base'
import type { WsClient } from './ws-client.js'
import type { ProductionDoc, ModuleState } from './main.js'

export interface ActionCallbacks {
	selectProduction: (id: string) => void
	backToProductions: () => void
	refreshProductions: () => void
	setPendingSlot: (slot: number) => void
	setSelectedAudioCh: (elementId: string) => void
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

	/** Resolve a 1-based sourceIndex to the production source's mixerInput. Returns null if out of range. */
	function resolveMixerInput(sourceIndex: number): string | null {
		return production?.sources[sourceIndex - 1]?.mixerInput ?? null
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
			description: 'Connect to a specific Open Live production by its internal ID. Use "Select Production by Slot" for button-driven workflows.',
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
			description: 'Connect to the production in slot 1–31 of the landing list. Empty slots do nothing. Used by the default Page 1 buttons.',
			options: [
				{
					id: 'slot',
					type: 'number',
					label: 'Production Slot (1–31)',
					default: 1,
					min: 1,
					max: 31,
				},
			],
			callback: (action) => {
				const slot = Number(action.options['slot'] ?? 1)
				const state = getState()
				if (state.productions.length === 0) {
					// Productions not loaded yet — store the pending slot and refresh;
					// the config's set_page action (hardcoded page 2) navigates immediately.
					callbacks.setPendingSlot(slot)
					callbacks.refreshProductions()
					return
				}
				const prod = state.productions[slot - 1]
				if (prod?._id && state.selectedProductionId !== prod._id) {
					callbacks.selectProduction(prod._id)
				}
			},
		},

		back_to_productions: {
			name: 'Back to Production List',
			description: 'Disconnect from the current production and return to landing mode so a different production can be selected.',
			options: [],
			callback: () => {
				callbacks.backToProductions()
			},
		},

		refresh_productions: {
			name: 'Refresh Production List',
			description: 'Re-fetch active productions from Open Live and update the landing page slot variables. Assign to the REFRESH button on Page 1.',
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
			description: 'Hard-cut source slot N directly to program output, bypassing preview. Use on the CUT bus (Row 2) of the M/E page.',
			options: [sourceIndexOption],
			callback: (action) => {
				const idx = Number(action.options['sourceIndex'] ?? 1)
				const mixerInput = resolveMixerInput(idx)
				if (!mixerInput) return
				send({ type: 'CUT', mixerInput })
			},
		},

		set_pvw: {
			name: 'Load Source Slot to Preview',
			description: 'Stage source slot N on the preview output. No-op if that source is already live on PGM. Use on the PVW bus (Row 1) of the M/E page.',
			options: [sourceIndexOption],
			callback: (action) => {
				const idx = Number(action.options['sourceIndex'] ?? 1)
				const mixerInput = resolveMixerInput(idx)
				if (!mixerInput) return
				// No-op if the source is already live on PGM — can't preview what's on air
				if (getState().pgm === mixerInput) return
				send({ type: 'SET_PVW', mixerInput })
			},
		},

		transition: {
			name: 'Transition to Source Slot',
			description: 'Transition source slot N to program using the chosen effect and duration. Sets PVW first, then fires the transition.',
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
				const mixerInput = resolveMixerInput(idx)
				if (!mixerInput) return
				send({
					type: 'TRANSITION',
					mixerInput,
					transitionType: String(action.options['transitionType'] ?? 'mix'),
					durationMs: Number(action.options['durationMs'] ?? 1000),
				})
			},
		},

		auto: {
			name: 'Auto (Transition Current PVW to PGM)',
			description: 'Fire a transition from whatever is currently on preview to program. Does nothing if preview is empty. Clears FTB if active.',
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
					mixerInput: pvw,
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
			description: 'Hard-cut whatever is on preview to program instantly. Equivalent to pressing the T-bar all the way on a hardware mixer. Clears FTB if active.',
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
			description: 'Fade the program output to black. Toggle mode flips between on and off. FTB is automatically cleared on the next CUT or AUTO.',
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
			description: 'Set the opacity of the overlay layer as a percentage (0 = transparent, 100 = fully opaque).',
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
			description: 'Start the outgoing stream. The On Air feedback turns red once the stream is active.',
			options: [],
			callback: () => {
				send({ type: 'GO_LIVE' })
			},
		},

		cut_stream: {
			name: 'Cut Stream',
			description: 'Stop the outgoing stream immediately.',
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
			description: 'Make a named graphic overlay visible on the output. The Graphic Active feedback lights when it is showing.',
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
			description: 'Hide a named graphic overlay from the output.',
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
			description: 'Toggle a downstream keyer layer on or off. Enable "Use Force Visible" to set a specific state instead of toggling.',
			options: [
				{
					id: 'layer',
					type: 'number',
					label: 'DSK Layer (0-based: 0 = DSK 1)',
					default: 0,
					min: 0,
					max: 7,
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
				const layer = Number(action.options['layer'] ?? 0)
				if (!(layer in getState().dskLayers)) return
				const useForce = Boolean(action.options['useForceVisible'])
				const visible = useForce
					? Boolean(action.options['visible'])
					: !getState().dskLayers[layer]
				send({ type: 'DSK_TOGGLE', layer, visible })
			},
		},

		// -----------------------------------------------------------------------
		// Macros
		// -----------------------------------------------------------------------
		// -----------------------------------------------------------------------
		// Audio
		// -----------------------------------------------------------------------
		audio_mute_toggle: {
			name: 'Toggle Audio Mute',
			description: 'Toggle the mute state of an audio channel. Use "ch1"–"ch8" for source channels or "main" for the master fader.',
			options: [
				{
					id: 'elementId',
					type: 'textinput',
					label: 'Channel ID (e.g. ch1, main)',
					default: 'ch1',
				},
			],
			callback: (action) => {
				const elementId = String(action.options['elementId'] ?? 'ch1')
				const ch = getState().audioChannels[elementId]
				const muted = ch !== undefined ? !ch.muted : true
				send({ type: 'AUDIO_SET', elementId, property: 'mute', value: muted })
			},
		},

		audio_volume_nudge: {
			name: 'Nudge Audio Volume',
			description: 'Increase or decrease an audio channel\'s fader level by a fixed step. Assign to rotate_left/rotate_right on a rotary button.',
			options: [
				{
					id: 'elementId',
					type: 'textinput',
					label: 'Channel ID (e.g. ch1, main)',
					default: 'ch1',
				},
				{
					id: 'direction',
					type: 'dropdown',
					label: 'Direction',
					choices: [
						{ id: 'up', label: 'Up (+)' },
						{ id: 'down', label: 'Down (−)' },
					],
					default: 'up',
				},
				{
					id: 'step',
					type: 'number',
					label: 'Step (%)',
					default: 5,
					min: 1,
					max: 25,
				},
			],
			callback: (action) => {
				const elementId = String(action.options['elementId'] ?? 'ch1')
				const direction = String(action.options['direction'] ?? 'up')
				const step = Number(action.options['step'] ?? 5) / 100
				const ch = getState().audioChannels[elementId]
				const current = ch?.volume ?? 1
				const raw = direction === 'up' ? current + step : current - step
				const atFloor = raw <= 0.0001
				const wasAtFloor = current <= 0.0001
				const volume = Math.max(0.0001, Math.min(0.9999, raw))
				if (atFloor) {
					if (!wasAtFloor) send({ type: 'AUDIO_SET', elementId, property: 'volume', value: 0.0001 })
					if (!ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: true })
					return
				}
				if (ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: false })
				if (volume === current) return
				send({ type: 'AUDIO_SET', elementId, property: 'volume', value: volume })
			},
		},

		// -----------------------------------------------------------------------
		// Audio X (selected-channel)
		// -----------------------------------------------------------------------
		audio_set_selected: {
			name: 'Set Selected Audio Channel',
			description: 'Set (or clear) the X-button target channel. Assign to the down and up events of a channel selector button.',
			options: [
				{
					id: 'elementId',
					type: 'textinput',
					label: 'Channel ID (e.g. ch1, main; empty to clear)',
					default: '',
				},
			],
			callback: (action) => {
				callbacks.setSelectedAudioCh(String(action.options['elementId'] ?? ''))
			},
		},

		audio_mute_x: {
			name: 'Toggle Mute (Selected Channel)',
			description: 'Toggle mute on whichever channel is currently selected via Set Selected Audio Channel.',
			options: [],
			callback: () => {
				const elementId = getState().selectedAudioCh
				if (!elementId) return
				const ch = getState().audioChannels[elementId]
				const muted = ch !== undefined ? !ch.muted : true
				send({ type: 'AUDIO_SET', elementId, property: 'mute', value: muted })
			},
		},

		audio_nudge_x: {
			name: 'Nudge Volume (Selected Channel)',
			description: 'Nudge volume up or down on whichever channel is currently selected.',
			options: [
				{
					id: 'direction',
					type: 'dropdown',
					label: 'Direction',
					choices: [
						{ id: 'up', label: 'Up (+)' },
						{ id: 'down', label: 'Down (−)' },
					],
					default: 'up',
				},
				{
					id: 'step',
					type: 'number',
					label: 'Step (%)',
					default: 5,
					min: 1,
					max: 25,
				},
			],
			callback: (action) => {
				const elementId = getState().selectedAudioCh
				if (!elementId) return
				const direction = String(action.options['direction'] ?? 'up')
				const step = Number(action.options['step'] ?? 5) / 100
				const ch = getState().audioChannels[elementId]
				const current = ch?.volume ?? 1
				const raw = direction === 'up' ? current + step : current - step
				const atFloor = raw <= 0.0001
				const wasAtFloor = current <= 0.0001
				const volume = Math.max(0.0001, Math.min(0.9999, raw))
				if (atFloor) {
					if (!wasAtFloor) send({ type: 'AUDIO_SET', elementId, property: 'volume', value: 0.0001 })
					if (!ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: true })
					return
				}
				if (ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: false })
				if (volume === current) return
				send({ type: 'AUDIO_SET', elementId, property: 'volume', value: volume })
			},
		},

		macro_exec: {
			name: 'Execute Macro',
			description: 'Run a production macro defined in Open Live. Macros can batch multiple switcher operations into a single button press.',
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
