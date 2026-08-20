import type { CompanionActionDefinitions } from '@companion-module/base'
import type { WsClient } from './ws-client.js'
import type { ProductionDoc, ModuleState, ModuleConfig } from './main.js'

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
	label: 'Source Slot (1–16)',
	default: 1,
	min: 1,
	max: 16,
}

export function getActionDefinitions(
	getWsClient: () => WsClient | null,
	production: ProductionDoc | null,
	getState: () => ModuleState,
	callbacks: ActionCallbacks,
	getConfig: () => ModuleConfig,
): CompanionActionDefinitions {
	function send(msg: Parameters<WsClient['send']>[0]): void {
		const client = getWsClient()
		if (client) client.send(msg)
	}

	/** Resolve a 1-based sourceIndex to the production source's mixerInput. Returns null if out of range. */
	function resolveMixerInput(sourceIndex: number): string | null {
		return production?.sources[sourceIndex - 1]?.mixerInput ?? null
	}

	/** Parse a (possibly variable-resolved) string to a finite number. Returns NaN if unparseable. */
	function parseNumber(raw: string): number {
		const trimmed = raw.trim().replace(/,/g, '')
		if (trimmed === '') return NaN
		const n = Number(trimmed)
		return Number.isFinite(n) ? n : NaN
	}

	/**
	 * Scale an incoming fader value into the Open Live volume range (0.0–10.0, 1.0 = unity).
	 * Supports percentages, 14-bit MIDI faders, floats, dB, and raw gain. Returns null if
	 * the input cannot be parsed to a finite number.
	 */
	function scaleVolume(raw: string, scale: string, zeroPoint = 75): number | null {
		const n = parseNumber(raw)
		if (Number.isNaN(n)) return null
		switch (scale) {
			case 'midi14':
				return n / 16383
			case 'midi7':
				return n / 127
			case 'float':
				return n
			case 'db':
				return Math.pow(10, n / 20)
			case 'taper': {
				// Tapered fader: 0 dB (unity) sits at the configured physical position
				// (default 75% of travel for the Waves FIT), the bottom is ~-60 dB (mute) and
				// the top is +20 dB — so the physical fader's bottom and 0 dB mark line up with
				// OpenLive's bottom and 0 dB. dB = 20*(p - z)/(1 - z), gain = 10^(dB/20).
				const z = Math.max(0.1, Math.min(0.99, (zeroPoint || 75) / 100))
				return Math.pow(10, (n / 16383 - z) / (1 - z))
			}
			case 'raw':
				return n
			case 'percent':
			default:
				return n / 100
		}
	}

	const transitionTypeChoices = [
		{ id: 'fade',        label: 'Fade'       },
		{ id: 'slide_left',  label: 'Push Left'  },
		{ id: 'slide_right', label: 'Push Right' },
		{ id: 'slide_up',    label: 'Push Up'    },
		{ id: 'slide_down',  label: 'Push Down'  },
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
				// No-op if the source is already live on PGM
				if (getState().pgm === mixerInput) return
				// PiP virtual sources: atomic TAKE with pip index avoids the two-step
				// SELECT_PVW_PIP + TAKE race that leaves the PiP in both PGM and PVW
				if (mixerInput.startsWith('pip:')) {
					send({ type: 'TAKE', pip: parseInt(mixerInput.slice(4), 10) })
				} else {
					send({ type: 'CUT', mixerInput })
				}
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
				// PiP virtual sources use mixerInput "pip:N" — route to SELECT_PVW_PIP
				if (mixerInput.startsWith('pip:')) {
					send({ type: 'SELECT_PVW_PIP', pip: parseInt(mixerInput.slice(4), 10) })
				} else {
					send({ type: 'SET_PVW', mixerInput })
				}
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
					default: 'fade',
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
					transitionType: String(action.options['transitionType'] ?? 'fade'),
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
					default: 'fade',
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
					transitionType: String(action.options['transitionType'] ?? 'fade'),
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
					label: 'Step (% of current level)',
					default: 10,
					min: 1,
					max: 25,
				},
			],
			callback: (action) => {
				const elementId = String(action.options['elementId'] ?? 'ch1')
				const direction = String(action.options['direction'] ?? 'up')
				const ratio = 1 + Number(action.options['step'] ?? 5) / 100  // e.g. 1.05 for 5%
				const ch = getState().audioChannels[elementId]
				const current = Math.max(0.0001, ch?.volume ?? 1)
				const raw = direction === 'up' ? current * ratio : current / ratio
				const atFloor = raw <= 0.0001
				const wasAtFloor = (ch?.volume ?? 1) <= 0.0001
				const volume = Math.max(0.0001, Math.min(10.0, raw))
				if (atFloor) {
					if (!wasAtFloor) send({ type: 'AUDIO_SET', elementId, property: 'volume', value: 0.0001 })
					if (!ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: true })
					return
				}
				if (ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: false })
				send({ type: 'AUDIO_SET', elementId, property: 'volume', value: volume })
			},
		},

		set_audio_volume: {
			name: 'Set Audio Volume (Absolute)',
			description: 'Set an audio channel fader to an absolute level in a single shot. Feed it a Companion variable from a MIDI/OSC fader module (e.g. $(FIT_faders_1-8:lastValue)) for 1:1 motorised-fader synchronisation.',
			options: [
				{
					id: 'elementId',
					type: 'textinput',
					label: 'Channel ID (ch1, ch2… or main; leave empty for selected channel)',
					default: 'ch1',
				},
				{
					id: 'value',
					type: 'textinput',
					label: 'Fader value (number or variable)',
					default: '50',
				},
				{
					id: 'scale',
					type: 'dropdown',
					label: 'Input scale',
					choices: [
						{ id: 'percent', label: 'Percentage (0–100)' },
						{ id: 'midi7',   label: 'MIDI CC / 7-bit (0–127)' },
						{ id: 'midi14',  label: 'MIDI 14-bit / Pitch Wheel (0–16383)' },
						{ id: 'taper',   label: 'Tapered dB (0 dB at zero point)' },
						{ id: 'float',   label: 'Float (0.0–1.0)' },
						{ id: 'db',      label: 'Decibels (−60 to 0 dB)' },
						{ id: 'raw',     label: 'Raw gain (0.0–10.0)' },
					],
					default: 'percent',
				},
				{
					id: 'zeroPoint',
					type: 'number',
					label: '0 dB position (% of fader travel)',
					default: getConfig().faderZeroPoint ?? 75,
					min: 10,
					max: 99,
					tooltip: 'Physical fader position (as % of travel) where the fader marks 0 dB. Only used with the "Tapered dB" scale. Defaults to the connection "Fader 0 dB position" setting.',
					isVisible: (options) => options['scale'] === 'taper',
				},
				{
					id: 'unmute',
					type: 'checkbox',
					label: 'Unmute when moving above zero',
					default: true,
				},
			],
			callback: (action) => {
				// Empty elementId targets whichever channel was last picked via
				// "Set Selected Audio Channel" (the X-button pattern).
				let elementId = String(action.options['elementId'] ?? '').trim()
				if (!elementId) elementId = getState().selectedAudioCh
				if (!elementId) return

				const value = scaleVolume(
					String(action.options['value'] ?? ''),
					String(action.options['scale'] ?? 'percent'),
					Number(action.options['zeroPoint'] ?? 75),
				)
				if (value === null) return

				const volume = Math.max(0.0001, Math.min(10.0, value))
				const atFloor = volume <= 0.0001
				const ch = getState().audioChannels[elementId]

				// Fader fully down — silence the strip the same way the nudge action does.
				if (atFloor) {
					if (!ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: true })
					return
				}
				if (Boolean(action.options['unmute']) && ch?.muted) {
					send({ type: 'AUDIO_SET', elementId, property: 'mute', value: false })
				}
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
					label: 'Step (% of current level)',
					default: 10,
					min: 1,
					max: 25,
				},
			],
			callback: (action) => {
				const elementId = getState().selectedAudioCh
				if (!elementId) return
				const direction = String(action.options['direction'] ?? 'up')
				const ratio = 1 + Number(action.options['step'] ?? 5) / 100
				const ch = getState().audioChannels[elementId]
				const current = Math.max(0.0001, ch?.volume ?? 1)
				const raw = direction === 'up' ? current * ratio : current / ratio
				const atFloor = raw <= 0.0001
				const wasAtFloor = (ch?.volume ?? 1) <= 0.0001
				const volume = Math.max(0.0001, Math.min(10.0, raw))
				if (atFloor) {
					if (!wasAtFloor) send({ type: 'AUDIO_SET', elementId, property: 'volume', value: 0.0001 })
					if (!ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: true })
					return
				}
				if (ch?.muted) send({ type: 'AUDIO_SET', elementId, property: 'mute', value: false })
				send({ type: 'AUDIO_SET', elementId, property: 'volume', value: volume })
			},
		},

	}
}
