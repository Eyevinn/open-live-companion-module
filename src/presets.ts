import { combineRgb } from '@companion-module/base'
import type { CompanionPresetDefinitions } from '@companion-module/base'
import type { ProductionDoc } from './main.js'

// Colour palette
const C = {
	black:       combineRgb(0, 0, 0),
	white:       combineRgb(255, 255, 255),
	grey:        combineRgb(80, 80, 80),
	orange:      combineRgb(249, 115, 22),
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
export function getLandingPresets(_productions: ProductionDoc[]): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {}

	presets['refresh_productions'] = {
		type: 'button',
		category: '2. Productions',
		name: 'Refresh Productions',
		style: { text: 'REFRESH', size: '14', color: C.white, bgcolor: C.darkBlue },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'refresh_productions', options: {} }], up: [] }],
	}

	// Slot-based production buttons: text and state driven by variables and feedback.
	// These are the same buttons as in the default config — add them to any page from the presets panel.
	for (let slot = 1; slot <= 31; slot++) {
		presets[`production_slot_${slot}`] = {
			type: 'button',
			category: '2. Productions',
			name: `Production Slot ${slot}`,
			style: {
				text: `Production ${slot}`,
				size: '14',
				color: C.white,
				bgcolor: C.black,
				alignment: 'center:center',
			},
			feedbacks: [
				{
					feedbackId: 'production_slot_occupied',
					options: { slot },
					style: { bgcolor: C.green, color: C.white },
				},
			],
			steps: [
				{ down: [{ actionId: 'select_production_slot', options: { slot } }], up: [] },
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
		category: '1. Navigation',
		name: 'Back to Productions',
		style: { text: '← BACK', size: '18', color: C.white, bgcolor: C.darkBlue },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'back_to_productions', options: {} }], up: [] }],
	}

	// ── PGM indicators (1–8) ─────────────────────────────────────────────────
	for (let i = 1; i <= 8; i++) {
		presets[`pgm_indicator_${i}`] = {
			type: 'button',
			category: '3. Program (PGM)',
			name: `PGM Indicator — Source ${i}`,
			style: { text: `Source ${i}`, size: '14', color: C.grey, bgcolor: C.dark },
			feedbacks: [
				{ feedbackId: 'pgm_tally', options: { sourceIndex: i }, style: { bgcolor: C.red, color: C.white } },
			],
			steps: [{ down: [], up: [] }],
		}
	}

	// ── PVW selectors (1–8) ──────────────────────────────────────────────────
	for (let i = 1; i <= 8; i++) {
		presets[`pvw_selector_${i}`] = {
			type: 'button',
			category: '4. Preview (PVW)',
			name: `PVW Selector — Source ${i}`,
			style: { text: `Source ${i}`, size: '14', color: C.white, bgcolor: C.dark },
			feedbacks: [
				{ feedbackId: 'pgm_tally', options: { sourceIndex: i }, style: { bgcolor: C.dark, color: C.grey } },
				{ feedbackId: 'pvw_tally', options: { sourceIndex: i }, style: { bgcolor: C.brightGreen, color: C.white } },
			],
			steps: [{ down: [{ actionId: 'set_pvw', options: { sourceIndex: i } }], up: [] }],
		}
	}

	// ── Transitions (including Fade to Black) ─────────────────────────────────
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
			category: '5. Transitions',
			name: v.label.replace('\n', ' '),
			style: { text: v.label, size: '14', color: C.black, bgcolor: C.white },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'auto', options: { transitionType: v.type, durationMs: v.ms } }], up: [] }],
		}
	}

	presets['take'] = {
		type: 'button',
		category: '5. Transitions',
		name: 'CUT (PVW → PGM)',
		style: { text: 'CUT', size: '18', color: C.black, bgcolor: C.white },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'take', options: {} }], up: [] }],
	}

	presets['ftb_toggle'] = {
		type: 'button',
		category: '6. FTB',
		name: 'FTB Toggle',
		style: { text: 'FTB', size: '18', color: C.white, bgcolor: C.dark },
		feedbacks: [{ feedbackId: 'ftb_active', options: {}, style: { bgcolor: C.red, color: C.white } }],
		steps: [{ down: [{ actionId: 'ftb', options: { mode: 'toggle', durationMs: 1000 } }], up: [] }],
	}

	presets['ftb_on'] = {
		type: 'button',
		category: '6. FTB',
		name: 'FTB On',
		style: { text: 'FTB\nON', size: '18', color: C.white, bgcolor: C.darkRed },
		feedbacks: [{ feedbackId: 'ftb_active', options: {}, style: { bgcolor: C.red, color: C.white } }],
		steps: [{ down: [{ actionId: 'ftb', options: { mode: 'on', durationMs: 1000 } }], up: [] }],
	}

	presets['ftb_off'] = {
		type: 'button',
		category: '6. FTB',
		name: 'FTB Off',
		style: { text: 'FTB\nOFF', size: '18', color: C.white, bgcolor: C.dark },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'ftb', options: { mode: 'off', durationMs: 1000 } }], up: [] }],
	}

	// ── DSK ──────────────────────────────────────────────────────────────────
	for (let layer = 0; layer < 4; layer++) {
		presets[`dsk_${layer + 1}_toggle`] = {
			type: 'button',
			category: '7. DSK',
			name: `DSK ${layer + 1} Toggle`,
			style: { text: `DSK ${layer + 1}`, size: '18', color: C.grey, bgcolor: C.dark },
			feedbacks: [
				{ feedbackId: 'dsk_configured', options: { layer }, style: { color: C.white, bgcolor: C.dark } },
				{ feedbackId: 'dsk_visible', options: { layer }, style: { bgcolor: C.orange, color: C.white } },
			],
			steps: [{ down: [{ actionId: 'dsk_toggle', options: { layer, visible: false, useForceVisible: false } }], up: [] }],
		}
	}

	// ── OVL Alpha ────────────────────────────────────────────────────────────
	for (const pct of [0, 25, 50, 75, 100]) {
		presets[`ovl_${pct}`] = {
			type: 'button',
			category: '8. OVL Alpha',
			name: `OVL ${pct}%`,
			style: { text: `OVL\n${pct}%`, size: '14', color: C.white, bgcolor: C.slate },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'set_ovl_alpha', options: { alpha: pct } }], up: [] }],
		}
	}

	// ── Graphics ─────────────────────────────────────────────────────────────
	for (const gfx of graphics) {
		presets[`gfx_${gfx.id}_on`] = {
			type: 'button',
			category: '9. Graphics',
			name: `${gfx.name} On`,
			style: { text: `${gfx.name}\nON`, size: '14', color: C.white, bgcolor: C.dark },
			feedbacks: [
				{ feedbackId: 'graphic_active', options: { overlayId: gfx.id }, style: { bgcolor: C.yellow, color: C.black } },
			],
			steps: [{ down: [{ actionId: 'graphic_on', options: { overlayId: gfx.id } }], up: [] }],
		}

		presets[`gfx_${gfx.id}_off`] = {
			type: 'button',
			category: '9. Graphics',
			name: `${gfx.name} Off`,
			style: { text: `${gfx.name}\nOFF`, size: '14', color: C.white, bgcolor: C.dark },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'graphic_off', options: { overlayId: gfx.id } }], up: [] }],
		}
	}

	// ── Macros ───────────────────────────────────────────────────────────────
	for (let i = 0; i < macros.length; i++) {
		const macro = macros[i]
		if (!macro) continue
		presets[`macro_${i + 1}`] = {
			type: 'button',
			category: '10. Macros',
			name: `Macro: ${macro.label}`,
			style: { text: macro.label, size: '14', color: C.white, bgcolor: C.navy },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'macro_exec', options: { macroId: macro.id } }], up: [] }],
		}
	}

	return presets
}
