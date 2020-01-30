import {AbilitiesObject, AbilityKeyType} from '../NWSystem';

export default interface RaceInterface {
  getAbilityBonuses(): {primary: AbilitiesObject; optional: AbilitiesObject[]};
  applyAbilityBonus(ability: {name: AbilityKeyType; value: number}): number;
}
