import RaceInterface from './system/races/raceInterface';
import {Abilities, AbilityKey} from './system/abilities';

import CharacterInterface from './characterInterface';
import uuid from 'react-native-uuid';

export default class Character<AbilityObjectInterface> implements CharacterInterface {
  id: string;
  name: string;
  race: RaceInterface;
  private abilities: AbilityObjectInterface;

  constructor(name: string, race: RaceInterface, abilities: Abilities) {
    this.name = name;
    this.race = race;
    this.id = uuid.v4();
    this.abilities = this.buildAbilities(abilities);
  }

  getId(): string {
    return this.id;
  }

  getAttribute(ability: AbilityKey): number {
    return (<AbilityObjectInterface>this.abilities)[ability] || -1;
  }

  private buildAbilities(e): AbilityObjectInterface {
    const members = Object.keys(e).map(k => e[k]);
    let response = {};

    members.forEach(m => {
      response[m] = 0;
    });

    return <AbilityObjectInterface>response;
  }
}
