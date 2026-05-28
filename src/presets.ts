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
	darkGrey:       combineRgb(60, 60, 60),
	// Category background colours
	catNav:         combineRgb(0, 30, 80),    // navigation buttons
	catSources:     combineRgb(45, 45, 45),
	catTransitions: combineRgb(80, 48, 0),
	catDsk:         combineRgb(55, 0, 100),
	catOvl:         combineRgb(0, 70, 90),
	catAudioCh:     combineRgb(0, 75, 40),    // audio channel select
	catAudioCtrl:   combineRgb(0, 55, 65),    // audio mute / vol / fader
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
		style: { text: 'REFRESH', size: '14', color: C.white, bgcolor: C.catNav, show_topbar: false },
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
				show_topbar: false,
			},
			feedbacks: [
				{
					feedbackId: 'production_slot_occupied',
					options: { slot },
					style: { bgcolor: C.darkGrey },
				},
				{
					feedbackId: 'production_slot_has_peers',
					options: { slot },
					style: { png64: 'iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAXUlEQVR42mP4z8DAQA2MTbAEiE8D8U8oPg0VI9ogJaim/zjwaagaggbhMwTZMLwGlRBhCAyX4DPoNAkGncZn0E8SDPpJF4Oo5jWqBTbVop+qCZJqWYTqmXbUIFQMAH7TsxTXB4CeAAAAAElFTkSuQmCC', pngalignment: 'right:bottom' },
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
		style: { text: '← BACK', size: '18', color: C.white, bgcolor: C.catNav, show_topbar: false },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'back_to_productions', options: {} }], up: [] }],
	}

	// ── PGM indicators (1–16) ────────────────────────────────────────────────
	for (let i = 1; i <= 16; i++) {
		presets[`pgm_indicator_${i}`] = {
			type: 'button',
			category: '3. Video - Program (PGM)',
			name: `PGM Indicator — Source ${i}`,
			style: { text: `Source ${i}`, size: '14', color: C.grey, bgcolor: C.catSources, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'pgm_tally', options: { sourceIndex: i }, style: { bgcolor: C.red, color: C.white } },
			],
			steps: [{ down: [], up: [] }],
		}
	}

	// ── PVW selectors (1–16) ─────────────────────────────────────────────────
	for (let i = 1; i <= 16; i++) {
		presets[`pvw_selector_${i}`] = {
			type: 'button',
			category: '4. Video - Preview (PVW)',
			name: `PVW Selector — Source ${i}`,
			style: { text: `Source ${i}`, size: '14', color: C.white, bgcolor: C.catSources, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'pgm_tally', options: { sourceIndex: i }, style: { bgcolor: C.dark, color: C.grey } },
				{ feedbackId: 'pvw_tally', options: { sourceIndex: i }, style: { bgcolor: C.brightGreen, color: C.white } },
			],
			steps: [{ down: [{ actionId: 'set_pvw', options: { sourceIndex: i } }], up: [] }],
		}
	}

	// ── Transitions ──────────────────────────────────────────────────────────
	presets['take'] = {
		type: 'button',
		category: '5. Video - Transitions',
		name: 'TAKE (PVW → PGM)',
		style: { text: 'TAKE', size: '18', color: C.white, bgcolor: C.catTransitions, show_topbar: false },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'take', options: {} }], up: [] }],
	}

	const transitionVariants: Array<{ type: string; label: string }> = [
		{ type: 'fade',        label: 'FADE'     },
		{ type: 'slide_left',  label: 'PUSH L'   },
		{ type: 'slide_right', label: 'PUSH R'   },
		{ type: 'slide_up',    label: 'PUSH UP'  },
		{ type: 'slide_down',  label: 'PUSH DN'  },
	]
	const transitionDurations: Array<{ ms: number; suffix: string }> = [
		{ ms: 500,  suffix: '0.5s' },
		{ ms: 1000, suffix: '1s'   },
		{ ms: 2000, suffix: '2s'   },
	]

	for (const t of transitionVariants) {
		for (const d of transitionDurations) {
			presets[`auto_${t.type}_${d.ms}`] = {
				type: 'button',
				category: '5. Video - Transitions',
				name: `${t.label} ${d.suffix}`,
				style: { text: `${t.label}\n${d.suffix}`, size: '14', color: C.white, bgcolor: C.catTransitions, show_topbar: false },
				feedbacks: [],
				steps: [{ down: [{ actionId: 'auto', options: { transitionType: t.type, durationMs: d.ms } }], up: [] }],
			}
		}
		presets[`auto_${t.type}_custom`] = {
			type: 'button',
			category: '5. Video - Transitions',
			name: `${t.label}`,
			style: { text: `${t.label}`, size: '18', color: C.white, bgcolor: C.catTransitions, show_topbar: false },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'auto', options: { transitionType: t.type, durationMs: 1000 } }], up: [] }],
		}
	}

	presets['ftb_toggle'] = {
		type: 'button',
		category: '5. Video - Transitions',
		name: 'FTB Toggle',
		style: { text: 'FTB', size: '18', color: C.white, bgcolor: C.catTransitions, show_topbar: false },
		feedbacks: [{ feedbackId: 'ftb_active', options: {}, style: { bgcolor: C.red, color: C.white } }],
		steps: [{ down: [{ actionId: 'ftb', options: { mode: 'toggle', durationMs: 1000 } }], up: [] }],
	}


	// ── DSK ──────────────────────────────────────────────────────────────────
	for (let layer = 0; layer < 4; layer++) {
		presets[`dsk_${layer + 1}_toggle`] = {
			type: 'button',
			category: '6. Video - DSK',
			name: `DSK ${layer + 1} Toggle`,
			style: { text: `DSK ${layer + 1}`, size: '18', color: C.grey, bgcolor: C.catDsk, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'dsk_configured', options: { layer }, style: { color: C.white, bgcolor: C.catDsk } },
				{ feedbackId: 'dsk_visible', options: { layer }, style: { bgcolor: C.orange, color: C.white } },
			],
			steps: [{ down: [{ actionId: 'dsk_toggle', options: { layer, visible: false, useForceVisible: false } }], up: [] }],
		}
	}

	// ── OVL Alpha ────────────────────────────────────────────────────────────
	for (const pct of [0, 25, 50, 75, 100]) {
		presets[`ovl_${pct}`] = {
			type: 'button',
			category: '7. Video - OVL Alpha',
			name: `OVL ${pct}%`,
			style: { text: `OVL\n${pct}%`, size: '14', color: C.white, bgcolor: C.catOvl, show_topbar: false },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'set_ovl_alpha', options: { alpha: pct } }], up: [] }],
		}
	}

	// ── Graphics ─────────────────────────────────────────────────────────────
	for (const gfx of graphics) {
		presets[`gfx_${gfx.id}_on`] = {
			type: 'button',
			category: '10. Graphics',
			name: `${gfx.name} On`,
			style: { text: `${gfx.name}\nON`, size: '14', color: C.white, bgcolor: C.dark, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'graphic_active', options: { overlayId: gfx.id }, style: { bgcolor: C.yellow, color: C.black } },
			],
			steps: [{ down: [{ actionId: 'graphic_on', options: { overlayId: gfx.id } }], up: [] }],
		}

		presets[`gfx_${gfx.id}_off`] = {
			type: 'button',
			category: '10. Graphics',
			name: `${gfx.name} Off`,
			style: { text: `${gfx.name}\nOFF`, size: '14', color: C.white, bgcolor: C.dark, show_topbar: false },
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
			category: '11. Macros',
			name: `Macro: ${macro.label}`,
			style: { text: macro.label, size: '14', color: C.white, bgcolor: C.navy, show_topbar: false },
			feedbacks: [],
			steps: [{ down: [{ actionId: 'macro_exec', options: { macroId: macro.id } }], up: [] }],
		}
	}

	// ── Audio — Channels (sorted by channel: mute → vol up → vol down → fader) ─
	const audioChannels: Array<{ id: string; label: string }> = [
		{ id: 'main', label: 'MAIN' },
		...Array.from({ length: 16 }, (_, i) => ({ id: `ch${i + 1}`, label: `Ch ${i + 1}` })),
	]
	for (const ch of audioChannels) {
		presets[`audio_mute_${ch.id}`] = {
			type: 'button',
			category: '8. Audio - Channels',
			name: `${ch.label} Mute`,
			style: { text: `${ch.label}\nMUTE`, size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'audio_ch_inactive', options: { elementId: ch.id }, style: { color: C.grey } },
				{ feedbackId: 'audio_muted',       options: { elementId: ch.id }, style: { bgcolor: C.orange, color: C.white } },
			],
			steps: [{ down: [{ actionId: 'audio_mute_toggle', options: { elementId: ch.id } }], up: [] }],
		}
		for (const dir of ['up', 'down'] as const) {
			presets[`audio_vol_${ch.id}_${dir}`] = {
				type: 'button',
				category: '8. Audio - Channels',
				name: `${ch.label} Volume ${dir === 'up' ? 'Up' : 'Down'}`,
				style: { text: `${ch.label}\n${dir === 'up' ? '▲' : '▼'}`, size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
				feedbacks: [
					{ feedbackId: 'audio_ch_inactive', options: { elementId: ch.id }, style: { color: C.grey } },
				],
				steps: [{ down: [{ actionId: 'audio_volume_nudge', options: { elementId: ch.id, direction: dir, step: 5 } }], up: [] }],
			}
		}
		presets[`audio_fader_${ch.id}`] = {
			type: 'button',
			category: '8. Audio - Channels',
			name: `${ch.label} Fader`,
			style: { text: `${ch.label}\nFADER`, size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'audio_ch_inactive', options: { elementId: ch.id }, style: { color: C.grey } },
				{ feedbackId: 'audio_muted',       options: { elementId: ch.id }, style: { bgcolor: C.orange, color: C.white } },
			],
			steps: [{
				down:         [{ actionId: 'audio_mute_toggle',  options: { elementId: ch.id } }],
				up:           [],
				rotate_left:  [{ actionId: 'audio_volume_nudge', options: { elementId: ch.id, direction: 'down', step: 5 } }],
				rotate_right: [{ actionId: 'audio_volume_nudge', options: { elementId: ch.id, direction: 'up',   step: 5 } }],
			}],
		}
	}

	// ── Audio — X Buttons (selected channel) ────────────────────────────────
	const xChannels: Array<{ id: string; label: string }> = [
		{ id: 'main', label: 'MAIN' },
		...Array.from({ length: 16 }, (_, i) => ({ id: `ch${i + 1}`, label: `Ch ${i + 1}` })),
	]
	for (const ch of xChannels) {
		presets[`audio_select_${ch.id}`] = {
			type: 'button',
			category: '9. Audio - X Buttons',
			name: `Select ${ch.label}`,
			style: { text: ch.label, size: '14', color: C.white, bgcolor: C.catAudioCh, show_topbar: false },
			feedbacks: [
				{ feedbackId: 'audio_ch_inactive', options: { elementId: ch.id }, style: { color: C.grey } },
				{ feedbackId: 'audio_ch_selected', options: { elementId: ch.id }, style: { bgcolor: C.orange, color: C.white } },
			],
			steps: [{ down: [{ actionId: 'audio_set_selected', options: { elementId: ch.id } }], up: [] }],
		}
	}
	presets['audio_mute_x'] = {
		type: 'button',
		category: '9. Audio - X Buttons',
		name: 'Mute X',
		style: { text: 'MUTE\nX', size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
		feedbacks: [
			{ feedbackId: 'audio_muted_x', options: {}, style: { bgcolor: C.orange, color: C.white } },
		],
		steps: [{ down: [{ actionId: 'audio_mute_x', options: {} }], up: [] }],
	}
	// X rotary fader — rotate to nudge X channel, press to mute X
	presets['audio_fader_x'] = {
		type: 'button',
		category: '9. Audio - X Buttons',
		name: 'X Fader',
		style: { text: 'X\nFADER', size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
		feedbacks: [
			{ feedbackId: 'audio_muted_x', options: {}, style: { bgcolor: C.orange, color: C.white } },
		],
		steps: [{
			down:         [{ actionId: 'audio_mute_x',   options: {} }],
			up:           [],
			rotate_left:  [{ actionId: 'audio_nudge_x',  options: { direction: 'down', step: 5 } }],
			rotate_right: [{ actionId: 'audio_nudge_x',  options: { direction: 'up',   step: 5 } }],
		}],
	}
	presets['audio_nudge_x_up'] = {
		type: 'button',
		category: '9. Audio - X Buttons',
		name: 'Volume Up X',
		style: { text: 'VOL ▲\nX', size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'audio_nudge_x', options: { direction: 'up', step: 5 } }], up: [] }],
	}
	presets['audio_nudge_x_down'] = {
		type: 'button',
		category: '9. Audio - X Buttons',
		name: 'Volume Down X',
		style: { text: 'VOL ▼\nX', size: '14', color: C.white, bgcolor: C.catAudioCtrl, show_topbar: false },
		feedbacks: [],
		steps: [{ down: [{ actionId: 'audio_nudge_x', options: { direction: 'down', step: 5 } }], up: [] }],
	}

	return presets
}
