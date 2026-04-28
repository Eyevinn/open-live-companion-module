import { combineRgb } from '@companion-module/base'
import type { CompanionFeedbackDefinitions } from '@companion-module/base'
import type { ModuleState, ProductionDoc } from './main.js'

/**
 * Source index options shared between pgm_tally and pvw_tally.
 * Index is 1-based (Source 1 = production.sources[0]).
 */
const sourceIndexOption = {
	id: 'sourceIndex',
	type: 'number' as const,
	label: 'Source Slot (1–8)',
	default: 1,
	min: 1,
	max: 8,
}

export function getFeedbackDefinitions(
	getState: () => ModuleState,
	production: ProductionDoc | null,
): CompanionFeedbackDefinitions {
	const graphics = production?.graphics ?? []
	const graphicChoices = graphics.map((g) => ({ id: g.id, label: g.name }))

	return {
		pgm_tally: {
			type: 'boolean',
			name: 'PGM Tally',
			description: 'Active when Source Slot N is on PGM',
			options: [sourceIndexOption],
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const state = getState()
				const idx = Number(feedback.options['sourceIndex'] ?? 1)
				const source = production?.sources[idx - 1]
				if (!source) return false
				return state.pgm !== null && state.pgm === source.mixerInput
			},
		},

		pvw_tally: {
			type: 'boolean',
			name: 'PVW Tally',
			description: 'Active when Source Slot N is on PVW',
			options: [sourceIndexOption],
			defaultStyle: {
				bgcolor: combineRgb(0, 200, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const state = getState()
				const idx = Number(feedback.options['sourceIndex'] ?? 1)
				const source = production?.sources[idx - 1]
				if (!source) return false
				return state.pvw !== null && state.pvw === source.mixerInput
			},
		},

		on_air: {
			type: 'boolean',
			name: 'On Air',
			description: 'Active when the production is on air',
			options: [],
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: () => getState().onAir,
		},

		ftb_active: {
			type: 'boolean',
			name: 'Fade to Black Active',
			description: 'Active when the production is faded to black',
			options: [],
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: () => getState().ftbActive,
		},

		graphic_active: {
			type: 'boolean',
			name: 'Graphic Active',
			description: 'Active when the specified graphic overlay is visible',
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
			defaultStyle: {
				bgcolor: combineRgb(255, 200, 0),
				color: combineRgb(0, 0, 0),
			},
			callback: (feedback) => {
				const overlayId = String(feedback.options['overlayId'] ?? '')
				return getState().graphics[overlayId] === true
			},
		},

		production_slot_occupied: {
			type: 'boolean',
			name: 'Production Slot Occupied',
			description: 'Active when the given production slot has an active production',
			options: [
				{
					id: 'slot',
					type: 'number',
					label: 'Slot (1–31)',
					default: 1,
					min: 1,
					max: 31,
				},
			],
			defaultStyle: {
				bgcolor: combineRgb(0, 150, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const slot = Number(feedback.options['slot'] ?? 1)
				return getState().productions[slot - 1] != null
			},
		},

		dsk_configured: {
			type: 'boolean',
			name: 'DSK Configured',
			description: 'Active when the specified DSK layer is present on the production',
			options: [
				{
					id: 'layer',
					type: 'number',
					label: 'DSK Layer (0-based: 0 = DSK 1)',
					default: 0,
					min: 0,
					max: 7,
				},
			],
			defaultStyle: {
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(30, 30, 30),
			},
			callback: (feedback) => {
				const layer = Number(feedback.options['layer'] ?? 0)
				return layer in getState().dskLayers
			},
		},

		audio_ch_inactive: {
			type: 'boolean',
			name: 'Audio Channel Inactive',
			description: 'Active when the given audio channel slot has no strip (production has fewer strips than this index)',
			options: [
				{
					id: 'ch',
					type: 'number',
					label: 'Channel Slot (1–8)',
					default: 1,
					min: 1,
					max: 8,
				},
			],
			defaultStyle: {
				text: '',
				bgcolor: combineRgb(30, 30, 30),
				color: combineRgb(50, 50, 50),
			},
			callback: (feedback) => {
				const ch = Number(feedback.options['ch'] ?? 1)
				return ch > getState().audioChannelCount
			},
		},

		audio_muted: {
			type: 'boolean',
			name: 'Audio Muted',
			description: 'Active when the specified audio channel is muted',
			options: [
				{
					id: 'elementId',
					type: 'textinput',
					label: 'Channel ID (e.g. ch1, main)',
					default: 'ch1',
				},
			],
			defaultStyle: {
				bgcolor: combineRgb(200, 50, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const elementId = String(feedback.options['elementId'] ?? 'ch1')
				return getState().audioChannels[elementId]?.muted === true
			},
		},

		audio_ch_selected: {
			type: 'boolean',
			name: 'Audio Channel Selected',
			description: 'Active when the given audio channel is the current X-button target',
			options: [
				{
					id: 'elementId',
					type: 'textinput',
					label: 'Channel ID (e.g. ch1, main)',
					default: 'ch1',
				},
			],
			defaultStyle: {
				bgcolor: combineRgb(249, 115, 22),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const elementId = String(feedback.options['elementId'] ?? 'ch1')
				return getState().selectedAudioCh === elementId
			},
		},

		audio_muted_x: {
			type: 'boolean',
			name: 'Audio Muted (Selected Channel)',
			description: 'Active when the currently selected audio channel is muted',
			options: [],
			defaultStyle: {
				bgcolor: combineRgb(200, 50, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: () => {
				const elementId = getState().selectedAudioCh
				if (!elementId) return false
				return getState().audioChannels[elementId]?.muted === true
			},
		},

		dsk_visible: {
			type: 'boolean',
			name: 'DSK Visible',
			description: 'Active when the specified DSK layer is visible',
			options: [
				{
					id: 'layer',
					type: 'number',
					label: 'DSK Layer (0-based: 0 = DSK 1)',
					default: 0,
					min: 0,
					max: 7,
				},
			],
			defaultStyle: {
				bgcolor: combineRgb(249, 115, 22),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const layer = Number(feedback.options['layer'] ?? 0)
				return getState().dskLayers[layer] === true
			},
		},
	}
}
