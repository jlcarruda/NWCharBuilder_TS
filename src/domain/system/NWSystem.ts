import SystemInterface from './systemInterface';

namespace Abilities {
  export enum Constants {
    STR = 'STR',
    DEX = 'DEX',
    CON = 'CON',
    INT = 'INT',
    WIS = 'WIS',
    CHA = 'CHA',
  }
}

export type AbilityKeyType =
  | Abilities.Constants.STR
  | Abilities.Constants.DEX
  | Abilities.Constants.CON
  | Abilities.Constants.INT
  | Abilities.Constants.WIS
  | Abilities.Constants.CHA;

export type AbilitiesObject = {[P in AbilityKeyType]?: number};

export class NWSystem implements SystemInterface {
  private abilitiesConstants;
  private abilityKeys: AbilityKeyType[];

  constructor() {
    this.abilitiesConstants = Abilities.Constants;

    this.abilityKeys = Object.keys(this.abilitiesConstants).map(
      e => this.abilitiesConstants[e],
    );
  }

  getAbilitiesConstants() {
    return this.abilitiesConstants;
  }
  getAbilitiesKeys() {
    return this.abilityKeys;
  }
}
