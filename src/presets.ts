import { combineRgb } from '@companion-module/base'
import type { CompanionPresetDefinitions } from '@companion-module/base'
import type { ProductionDoc } from './main.js'

export function getPresetDefinitions(production: ProductionDoc | null): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {}

	const sources = production?.sources ?? []
	const macros = production?.macros ?? []

	// Camera cut buttons (up to 4)
	const cameraSlots = sources.slice(0, 4)
	for (let i = 0; i < cameraSlots.length; i++) {
		const source = cameraSlots[i]
		if (!source) continue
		presets[`cut_cam_${i + 1}`] = {
			type: 'button',
			category: 'Cameras',
			name: `Cut to ${source.name}`,
			style: {
				text: source.name,
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			feedbacks: [
				{
					feedbackId: 'pgm_tally',
					options: { sourceId: source.id },
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
				},
				{
					feedbackId: 'pvw_tally',
					options: { sourceId: source.id },
					style: {
						bgcolor: combineRgb(0, 200, 0),
						color: combineRgb(255, 255, 255),
					},
				},
			],
			steps: [
				{
					down: [{ actionId: 'cut', options: { sourceId: source.id } }],
					up: [],
				},
			],
		}
	}

	// Take button
	presets['take'] = {
		type: 'button',
		category: 'Transport',
		name: 'Take',
		style: {
			text: 'TAKE',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(100, 50, 0),
		},
		feedbacks: [],
		steps: [
			{
				down: [{ actionId: 'take', options: {} }],
				up: [],
			},
		],
	}

	// Go Live button
	presets['go_live'] = {
		type: 'button',
		category: 'Transport',
		name: 'Go Live',
		style: {
			text: 'GO LIVE',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		feedbacks: [
			{
				feedbackId: 'on_air',
				options: {},
				style: {
					bgcolor: combineRgb(255, 0, 0),
					color: combineRgb(255, 255, 255),
				},
			},
		],
		steps: [
			{
				down: [{ actionId: 'go_live', options: {} }],
				up: [],
			},
		],
	}

	// Cut Stream button
	presets['cut_stream'] = {
		type: 'button',
		category: 'Transport',
		name: 'Cut Stream',
		style: {
			text: 'CUT\nSTREAM',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(80, 0, 0),
		},
		feedbacks: [],
		steps: [
			{
				down: [{ actionId: 'cut_stream', options: {} }],
				up: [],
			},
		],
	}

	// Macro slots (up to 8)
	const macroSlots = macros.slice(0, 8)
	for (let i = 0; i < macroSlots.length; i++) {
		const macro = macroSlots[i]
		if (!macro) continue
		presets[`macro_${i + 1}`] = {
			type: 'button',
			category: 'Macros',
			name: `Macro: ${macro.label}`,
			style: {
				text: macro.label,
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 100),
			},
			feedbacks: [],
			steps: [
				{
					down: [{ actionId: 'macro_exec', options: { macroId: macro.id } }],
					up: [],
				},
			],
		}
	}

	return presets
}
