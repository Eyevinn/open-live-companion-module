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
	log?: (level: 'debug' | 'info' | 'warn' | 'error', msg: string) => void,
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
				const result = state.pgm !== null && state.pgm === source.mixerInput
				log?.('debug', `pgm_tally[${idx}]: pgm=${state.pgm ?? 'null'}, mixerInput=${source.mixerInput}, result=${result}`)
				return result
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
				const result = state.pvw !== null && state.pvw === source.mixerInput
				log?.('debug', `pvw_tally[${idx}]: pvw=${state.pvw ?? 'null'}, mixerInput=${source.mixerInput}, result=${result}`)
				return result
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

		dsk_visible: {
			type: 'boolean',
			name: 'DSK Visible',
			description: 'Active when the specified DSK layer is visible',
			options: [
				{
					id: 'layer',
					type: 'number',
					label: 'DSK Layer',
					default: 1,
					min: 1,
					max: 8,
				},
			],
			defaultStyle: {
				bgcolor: combineRgb(255, 200, 0),
				color: combineRgb(0, 0, 0),
			},
			callback: (feedback) => {
				const layer = Number(feedback.options['layer'] ?? 1)
				return getState().dskLayers[layer] === true
			},
		},
	}
}
