export enum Abilities {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA',
}

export type AbilityKey =
  | Abilities.STR
  | Abilities.DEX
  | Abilities.CON
  | Abilities.INT
  | Abilities.WIS
  | Abilities.CHA;

export type AbilitiesObject = {[P in AbilityKey]?: number};
