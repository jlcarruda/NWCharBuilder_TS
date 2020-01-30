import {AbilitiesObject, AbilityKey} from '../abilities';

export default interface RaceInterface {
  name: string;
  getBonuses(): AbilitiesObject;
  applyBonus(ability: {name: AbilityKey; value: number}): number;
}
