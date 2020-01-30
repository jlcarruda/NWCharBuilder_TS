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

  export type AbilityKey =
    | Constants.STR
    | Constants.DEX
    | Constants.CON
    | Constants.INT
    | Constants.WIS
    | Constants.CHA;

  export type AbilitiesObject = {[P in AbilityKey]?: number};
}

class DNDSystem implements SystemInterface {
  private abilitiesConstants;
  private abilityKeys: Abilities.AbilityKey[];

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

export default DNDSystem;
