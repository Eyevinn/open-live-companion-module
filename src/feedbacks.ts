import { combineRgb } from '@companion-module/base'
import type { CompanionFeedbackDefinitions } from '@companion-module/base'
import type { ModuleState } from './main.js'
import type { ProductionDoc } from './main.js'

export function getFeedbackDefinitions(
	getState: () => ModuleState,
	production: ProductionDoc | null,
): CompanionFeedbackDefinitions {
	const sources = production?.sources ?? []
	const graphics = production?.graphics ?? []

	const sourceChoices = sources.map((s) => ({ id: s.id, label: s.name }))
	const graphicChoices = graphics.map((g) => ({ id: g.id, label: g.name }))

	return {
		pgm_tally: {
			type: 'boolean',
			name: 'PGM Tally',
			description: 'Active when the selected source is on PGM',
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
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const state = getState()
				return state.pgm !== null && state.pgm === String(feedback.options['sourceId'] ?? '')
			},
		},

		pvw_tally: {
			type: 'boolean',
			name: 'PVW Tally',
			description: 'Active when the selected source is on PVW',
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
			defaultStyle: {
				bgcolor: combineRgb(0, 200, 0),
				color: combineRgb(255, 255, 255),
			},
			callback: (feedback) => {
				const state = getState()
				return state.pvw !== null && state.pvw === String(feedback.options['sourceId'] ?? '')
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
			callback: () => {
				return getState().onAir
			},
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
				const state = getState()
				const overlayId = String(feedback.options['overlayId'] ?? '')
				return state.graphics[overlayId] === true
			},
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
			callback: () => {
				return getState().ftbActive
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
				const state = getState()
				const layer = Number(feedback.options['layer'] ?? 1)
				return state.dskLayers[layer] === true
			},
		},
	}
}
