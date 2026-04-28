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

	// source_N_name (1–8) — name of the Nth source in the current production
	for (let i = 1; i <= 8; i++) {
		defs.push({ variableId: `source_${i}_name`, name: `Source ${i} name` })
	}

	// ch_N_name (1–8) — name of the Nth audio channel (sorted by mixerInput, non-audio types excluded)
	for (let i = 1; i <= 8; i++) {
		defs.push({ variableId: `ch${i}_name`, name: `Audio channel ${i} name` })
	}

	// prod_N_name (1–31) — name of the Nth active production in the landing list
	for (let i = 1; i <= 31; i++) {
		defs.push({ variableId: `prod_${i}_name`, name: `Production slot ${i} name` })
	}

	return defs
}

/** Returns an object suitable for setVariableValues that clears all source-name slots. */
export function emptySourceVars(): Record<string, string> {
	const v: Record<string, string> = { source_count: '0', selected_audio_ch: '' }
	for (let i = 1; i <= 8; i++) v[`source_${i}_name`] = ''
	for (let i = 1; i <= 8; i++) v[`ch${i}_name`] = ''
	return v
}

/** Returns an object suitable for setVariableValues populated from a source array. */
export function sourceVarsFromList(sources: Array<{ name: string }>): Record<string, string> {
	const v: Record<string, string> = { source_count: String(sources.length) }
	for (let i = 1; i <= 8; i++) {
		v[`source_${i}_name`] = sources[i - 1]?.name ?? ''
	}
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
