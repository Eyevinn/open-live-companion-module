import { combineRgb } from '@companion-module/base'
import type { CompanionPresetDefinitions } from '@companion-module/base'
import type { ProductionDoc } from './main.js'

// Colour palette
const C = {
	black:       combineRgb(0, 0, 0),
	white:       combineRgb(255, 255, 255),
	grey:        combineRgb(80, 80, 80),
	dark:        combineRgb(30, 30, 30),
	darkBlue:    combineRgb(0, 40, 100),
	darkRed:     combineRgb(160, 0, 0),
	navy:        combineRgb(0, 0, 100),
	slate:       combineRgb(50, 50, 80),
	yellow:      combineRgb(200, 180, 0),
	blue:        combineRgb(0, 80, 180),
	green:       combineRgb(0, 150, 0),
	brightGreen: combineRgb(0, 200, 0),
	red:         combineRgb(255, 0, 0),
}

// -----------------------------------------------------------------------
// Landing mode — active productions as buttons
// -----------------------------------------------------------------------
export function getLandingPresets(productions: ProductionDoc[]): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {}

	if (productions.length === 0) {
		presets['no_productions'] = {
			type: 'button',
			category: 'Productions',
			name: 'No Active Productions',
			style: { text: 'NO ACTIVE\nPRODUCTIONS', size: '14', color: C.white, bgcolor: C.dark },
			feedbacks: [],
			steps: [{ down: [], up: [] }],
		}
		return presets
	}

	for (const prod of productions) {
		presets[`production_${prod._id}`] = {
			type: 'button',
			category: 'Productions',
			name: prod.name,
			style: { text: prod.name, size: 'auto', color: C.white, bgcolor: C.blue },
			feedbacks: [],
			steps: [
				{ down: [{ actionId: 'select_production', options: { productionId: prod._id } }], up: [] },
			],
		}
	}

	return presets
}

// -----------------------------------------------------------------------
// Control mode — production-agnostic, slot-based (Source 1–8)
// -----------------------------------------------------------------------
export function getControlPresets(production: ProductionDoc | null): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {}
	const graphics = production?.graphics ?? []
	const macros = production?.macros ?? []

	// ── Navigation ───────────────────────────────────────────────────────────
	presets['back_to_productions'] = {
		type: 'button',
		category: 'Navigation',
		name: 'Back to Productions',
		style: { text: '← BACK', size: '18', color: C.white, bgcolor: C.darkBlue },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'back_to_productions', options: {} }], up: [] }],
	}

	// ── PGM indicators (1–8) ─────────────────────────────────────────────────
	// Read-only row: shows which source is live. Clicking does nothing.
	for (let i = 1; i <= 8; i++) {
		presets[`pgm_indicator_${i}`] = {
			type: 'button',
			category: 'Program (PGM)',
			name: `PGM Indicator — Source ${i}`,
			style: {
				text: `$(openlive:source_${i}_name)`,
				textExpression: true,
				size: 'auto',
				color: C.grey,
				bgcolor: C.dark,
			},
			feedbacks: [
				{
					feedbackId: 'pgm_tally',
					options: { sourceIndex: i },
					style: { bgcolor: C.red, color: C.white },
				},
			],
			steps: [{ down: [], up: [] }],
		}
	}

	// ── PVW selectors (1–8) ──────────────────────────────────────────────────
	// Click to stage source to preview.
	// Dims out when that slot is already on PGM (can't preview what's live).
	for (let i = 1; i <= 8; i++) {
		presets[`pvw_selector_${i}`] = {
			type: 'button',
			category: 'Preview (PVW)',
			name: `PVW Selector — Source ${i}`,
			style: {
				text: `$(openlive:source_${i}_name)`,
				textExpression: true,
				size: 'auto',
				color: C.white,
				bgcolor: C.dark,
			},
			feedbacks: [
				{
					// Dims when this slot is on PGM (listed first = lower priority)
					feedbackId: 'pgm_tally',
					options: { sourceIndex: i },
					style: { bgcolor: C.dark, color: C.grey },
				},
				{
					// Bright green when this slot is on PVW (listed last = wins)
					feedbackId: 'pvw_tally',
					options: { sourceIndex: i },
					style: { bgcolor: C.brightGreen, color: C.white },
				},
			],
			steps: [
				{ down: [{ actionId: 'set_pvw', options: { sourceIndex: i } }], up: [] },
			],
		}
	}

	// ── Transitions ──────────────────────────────────────────────────────────
	const autoVariants: Array<{ key: string; label: string; type: string; ms: number }> = [
		{ key: 'auto_mix_500ms', label: 'AUTO\nMIX 0.5s', type: 'mix', ms: 500 },
		{ key: 'auto_mix_1s',    label: 'AUTO\nMIX 1s',   type: 'mix', ms: 1000 },
		{ key: 'auto_mix_2s',    label: 'AUTO\nMIX 2s',   type: 'mix', ms: 2000 },
		{ key: 'auto_mix_3s',    label: 'AUTO\nMIX 3s',   type: 'mix', ms: 3000 },
		{ key: 'auto_dip_1s',    label: 'AUTO\nDIP 1s',   type: 'dip', ms: 1000 },
		{ key: 'auto_push_1s',   label: 'AUTO\nPUSH 1s',  type: 'push', ms: 1000 },
	]

	for (const v of autoVariants) {
		presets[v.key] = {
			type: 'button',
			category: 'Transitions',
			name: v.label.replace('\n', ' '),
			style: { text: v.label, size: '14', color: C.black, bgcolor: C.white },
			feedbacks: [],
			steps: [
				{ down: [{ actionId: 'auto', options: { transitionType: v.type, durationMs: v.ms } }], up: [] },
			],
		}
	}

	presets['take'] = {
		type: 'button',
		category: 'Transitions',
		name: 'CUT (PVW → PGM)',
		style: { text: 'CUT', size: '18', color: C.black, bgcolor: C.white },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'take', options: {} }], up: [] }],
	}

	// ── Fade to Black ────────────────────────────────────────────────────────
	presets['ftb_toggle'] = {
		type: 'button',
		category: 'Fade to Black',
		name: 'FTB Toggle',
		style: { text: 'FTB', size: '18', color: C.white, bgcolor: C.dark },
		feedbacks: [
			{ feedbackId: 'ftb_active', options: {}, style: { bgcolor: C.red, color: C.white } },
		],
		steps: [
			{ down: [{ actionId: 'ftb', options: { mode: 'toggle', durationMs: 1000 } }], up: [] },
		],
	}

	presets['ftb_on'] = {
		type: 'button',
		category: 'Fade to Black',
		name: 'FTB On',
		style: { text: 'FTB\nON', size: '18', color: C.white, bgcolor: C.darkRed },
		feedbacks: [
			{ feedbackId: 'ftb_active', options: {}, style: { bgcolor: C.red, color: C.white } },
		],
		steps: [{ down: [{ actionId: 'ftb', options: { mode: 'on', durationMs: 1000 } }], up: [] }],
	}

	presets['ftb_off'] = {
		type: 'button',
		category: 'Fade to Black',
		name: 'FTB Off',
		style: { text: 'FTB\nOFF', size: '18', color: C.white, bgcolor: C.dark },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'ftb', options: { mode: 'off', durationMs: 1000 } }], up: [] }],
	}

	// ── OVL Alpha ────────────────────────────────────────────────────────────
	for (const pct of [0, 25, 50, 75, 100]) {
		presets[`ovl_${pct}`] = {
			type: 'button',
			category: 'OVL Alpha',
			name: `OVL ${pct}%`,
			style: { text: `OVL\n${pct}%`, size: '14', color: C.white, bgcolor: C.slate },
			feedbacks: [],
			steps: [
				{ down: [{ actionId: 'set_ovl_alpha', options: { alpha: pct } }], up: [] },
			],
		}
	}

	// ── Graphics ─────────────────────────────────────────────────────────────
	for (const gfx of graphics) {
		presets[`gfx_${gfx.id}_on`] = {
			type: 'button',
			category: 'Graphics',
			name: `${gfx.name} On`,
			style: { text: `${gfx.name}\nON`, size: '14', color: C.white, bgcolor: C.dark },
			feedbacks: [
				{ feedbackId: 'graphic_active', options: { overlayId: gfx.id }, style: { bgcolor: C.yellow, color: C.black } },
			],
			steps: [{ down: [{ actionId: 'graphic_on', options: { overlayId: gfx.id } }], up: [] }],
		}

		presets[`gfx_${gfx.id}_off`] = {
			type: 'button',
			category: 'Graphics',
			name: `${gfx.name} Off`,
			style: { text: `${gfx.name}\nOFF`, size: '14', color: C.white, bgcolor: C.dark },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'graphic_off', options: { overlayId: gfx.id } }], up: [] }],
		}
	}

	// ── DSK ──────────────────────────────────────────────────────────────────
	for (let layer = 1; layer <= 4; layer++) {
		presets[`dsk_${layer}_toggle`] = {
			type: 'button',
			category: 'DSK',
			name: `DSK ${layer} Toggle`,
			style: { text: `DSK ${layer}`, size: '18', color: C.white, bgcolor: C.dark },
			feedbacks: [
				{ feedbackId: 'dsk_visible', options: { layer }, style: { bgcolor: C.yellow, color: C.black } },
			],
			steps: [
				{ down: [{ actionId: 'dsk_toggle', options: { layer, visible: false, useForceVisible: false } }], up: [] },
			],
		}
	}

	// ── Stream Control ───────────────────────────────────────────────────────
	presets['go_live'] = {
		type: 'button',
		category: 'Stream Control',
		name: 'Go Live (hold 2s)',
		style: { text: 'GO\nLIVE', size: '18', color: C.white, bgcolor: C.green },
		feedbacks: [
			{ feedbackId: 'on_air', options: {}, style: { bgcolor: C.red, color: C.white } },
		],
		// Note: hold-to-confirm (2s) is set up by setup-pages.py when placing the button.
		// The preset fires immediately on press — configure runWhileHeld in Companion if needed.
		steps: [{ down: [{ actionId: 'go_live', options: {} }], up: [] }],
	}

	presets['cut_stream'] = {
		type: 'button',
		category: 'Stream Control',
		name: 'End Stream (hold 2s)',
		style: { text: 'END', size: '18', color: C.white, bgcolor: C.darkRed },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'cut_stream', options: {} }], up: [] }],
	}

	// ── Macros ───────────────────────────────────────────────────────────────
	for (let i = 0; i < macros.length; i++) {
		const macro = macros[i]
		if (!macro) continue
		presets[`macro_${i + 1}`] = {
			type: 'button',
			category: 'Macros',
			name: `Macro: ${macro.label}`,
			style: { text: macro.label, size: '14', color: C.white, bgcolor: C.navy },
			feedbacks: [],
			steps: [
				{ down: [{ actionId: 'macro_exec', options: { macroId: macro.id } }], up: [] },
			],
		}
	}

	return presets
}
