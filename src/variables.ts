import type { CompanionVariableDefinition } from '@companion-module/base'

export function getVariableDefinitions(): CompanionVariableDefinition[] {
	return [
		{
			variableId: 'pgm_source',
			name: 'Current PGM source ID',
		},
		{
			variableId: 'pvw_source',
			name: 'Current PVW source ID',
		},
		{
			variableId: 'on_air',
			name: 'On Air status (true/false)',
		},
		{
			variableId: 'production_name',
			name: 'Name of connected production',
		},
	]
}
