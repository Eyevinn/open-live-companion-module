import type { CompanionVariableDefinition } from '@companion-module/base'

export function getVariableDefinitions(): CompanionVariableDefinition[] {
	const defs: CompanionVariableDefinition[] = [
		{ variableId: 'selected_production_name', name: 'Name of selected production' },
		{ variableId: 'selected_audio_ch', name: 'Currently selected audio channel for X buttons' },
		{ variableId: 'production_name', name: 'Name of connected production' },
		{ variableId: 'pgm_source', name: 'Current PGM source ID' },
		{ variableId: 'pvw_source', name: 'Current PVW source ID' },
		{ variableId: 'on_air', name: 'On Air status (true/false)' },
		{ variableId: 'ftb_active', name: 'Fade to Black Active (true/false)' },
		{ variableId: 'ovl_alpha', name: 'Overlay Alpha (0.0–1.0)' },
		{ variableId: 'source_count', name: 'Number of sources in the current production' },
	]

	// source_N_name (1–16) — name of the Nth source in the current production
	for (let i = 1; i <= 16; i++) {
		defs.push({ variableId: `source_${i}_name`, name: `Source ${i} name` })
	}

	// ch_N_name (1–16) — name of the Nth audio channel (sorted by mixerInput, non-audio types excluded)
	for (let i = 1; i <= 16; i++) {
		defs.push({ variableId: `ch${i}_name`, name: `Audio channel ${i} name` })
	}

	// ch_N_volume (1–16) + main_volume — current fader level as gain (1.0 = unity),
	// updated from OpenLive's AUDIO_STATE. Used to drive motorised fader feedback.
	for (let i = 1; i <= 16; i++) {
		defs.push({ variableId: `ch${i}_volume`, name: `Audio channel ${i} volume (gain, 1.0 = unity)` })
	}
	defs.push({ variableId: 'main_volume', name: 'Main fader volume (gain, 1.0 = unity)' })

	// ch_N_fader_pos (1–16) + main_fader_pos — the motor-fader position (0–16383, 14-bit)
	// that matches the current volume via the tapered fader curve. Set synchronously with the
	// volume, so a trigger can drive a motorised fader directly without expression variables.
	for (let i = 1; i <= 16; i++) {
		defs.push({ variableId: `ch${i}_fader_pos`, name: `Audio channel ${i} fader position (0–16383, 14-bit)` })
	}
	defs.push({ variableId: 'main_fader_pos', name: 'Main fader position (0–16383, 14-bit)' })

	// prod_N_name (1–31) — name of the Nth active production in the landing list
	for (let i = 1; i <= 31; i++) {
		defs.push({ variableId: `prod_${i}_name`, name: `Production slot ${i} name` })
	}

	return defs
}

/** Returns an object suitable for setVariableValues that clears all source-name slots. */
export function emptySourceVars(): Record<string, string> {
	const v: Record<string, string> = { source_count: '0', selected_audio_ch: '' }
	for (let i = 1; i <= 16; i++) v[`source_${i}_name`] = ''
	for (let i = 1; i <= 16; i++) v[`ch${i}_name`] = ''
	return v
}

/** Returns an object suitable for setVariableValues populated from a source array. */
export function sourceVarsFromList(sources: Array<{ name: string }>): Record<string, string> {
	const v: Record<string, string> = { source_count: String(sources.length) }
	for (let i = 1; i <= 16; i++) {
		v[`source_${i}_name`] = sources[i - 1]?.name ?? ''
	}
	return v
}

/** Returns an object suitable for setVariableValues that clears all audio volume slots. */
export function emptyVolumeVars(): Record<string, string> {
	const v: Record<string, string> = {}
	for (let i = 1; i <= 16; i++) v[`ch${i}_volume`] = ''
	v['main_volume'] = ''
	return v
}

/** Returns an object suitable for setVariableValues populated from the audio channel map (gain values). */
export function volumeVarsFromState(audioChannels: Record<string, { volume: number }>): Record<string, string> {
	const v: Record<string, string> = {}
	for (let i = 1; i <= 16; i++) {
		v[`ch${i}_volume`] = String(audioChannels[`ch${i}`]?.volume ?? 1)
	}
	v['main_volume'] = String(audioChannels['main']?.volume ?? 1)
	return v
}

/**
 * Map a gain value to the motor-fader 14-bit position using the inverse of the module's
 * tapered fader curve (gain = 10^((p - z)/(1 - z)), where z is the 0 dB position as a
 * fraction of travel). Returns 0–16383.
 */
export function volumeToFaderPos(volume: number, zeroPoint = 75): number {
	if (!(volume > 0)) return 0
	const z = Math.max(0.1, Math.min(0.99, (zeroPoint || 75) / 100))
	const pos = z + (1 - z) * Math.log10(volume)
	return Math.max(0, Math.min(16383, Math.round(pos * 16383)))
}

/** Returns an object suitable for setVariableValues populated with motor positions from the audio channel map. */
export function faderPosVarsFromState(
	audioChannels: Record<string, { volume: number }>,
	zeroPoint = 75,
): Record<string, string> {
	const v: Record<string, string> = {}
	for (let i = 1; i <= 16; i++) {
		v[`ch${i}_fader_pos`] = String(volumeToFaderPos(audioChannels[`ch${i}`]?.volume ?? 1, zeroPoint))
	}
	v['main_fader_pos'] = String(volumeToFaderPos(audioChannels['main']?.volume ?? 1, zeroPoint))
	return v
}

/** Returns an object suitable for setVariableValues that clears all fader position slots. */
export function emptyFaderPosVars(): Record<string, string> {
	const v: Record<string, string> = {}
	for (let i = 1; i <= 16; i++) v[`ch${i}_fader_pos`] = ''
	v['main_fader_pos'] = ''
	return v
}

/** Clears all production slot name variables. */
export function emptyProductionSlotVars(): Record<string, string> {
	const v: Record<string, string> = {}
	for (let i = 1; i <= 31; i++) v[`prod_${i}_name`] = ''
	return v
}

/** Populates production slot name variables from the active productions list. */
export function productionSlotVarsFromList(productions: Array<{ name: string }>): Record<string, string> {
	const v: Record<string, string> = {}
	for (let i = 1; i <= 31; i++) {
		v[`prod_${i}_name`] = productions[i - 1]?.name ?? ''
	}
	return v
}
