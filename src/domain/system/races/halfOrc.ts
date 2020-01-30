import RaceInterface from './raceInterface';
import {AbilitiesObject, Abilities, AbilityKey} from '../abilities';

export default class HalfOrc implements RaceInterface {
  name: string;
  bonuses: AbilitiesObject;

  constructor() {
    this.name = 'Half-Orc';
    this.bonuses = {
      [Abilities.DEX]: 2,
      [Abilities.STR]: 2,
      [Abilities.CON]: 2,
    };
  }

  getBonuses(): AbilitiesObject {
    return this.bonuses;
  }

  getBonus(attributeName: AbilityKey): number {
    return this.bonuses[attributeName] || 0;
  }

  applyBonus(attribute: {name: AbilityKey; value: number}): number {
    return attribute.value + (this.bonuses[attribute.name] || 0);
  }
}
