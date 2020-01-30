import RaceInterface from './raceInterface';
import {NWSystem, AbilitiesObject, AbilityKeyType} from '../NWSystem';

export default class HalfOrc implements RaceInterface {
  private name: string;
  private system: NWSystem;
  private primaryBonus: AbilitiesObject;
  private secondaryBonusesOptions: AbilitiesObject[];
  private abilities;

  constructor(system: NWSystem) {
    this.system = system;
    this.name = 'Half-Orc';
    this.abilities = system.getAbilitiesConstants();

    this.primaryBonus = {STR: +2};
    this.secondaryBonusesOptions = [{CON: +2}, {DEX: +2}];
  }

  getAbilityBonuses(): {primary: AbilitiesObject; optional: AbilitiesObject[]} {
    return {
      primary: this.primaryBonus,
      optional: this.secondaryBonusesOptions,
    };
  }

  getBonus(attributeName: AbilityKeyType): number {
    // return this.bonuses[attributeName] || 0;
  }

  applyAbilityBonus(attribute: {name: AbilityKeyType; value: number}): number {
    // return attribute.value + (this.bonuses[attribute.name] || 0);
  }
}
