import RaceInterface from '../race/interface';
import {AbilitiesObjectInterface} from '../ability/interface';

import CharacterInterface from './interface';
import uuid from 'react-native-uuid';

export default class Character implements CharacterInterface {
  name: string;
  race: RaceInterface;
  abilities: AbilitiesObjectInterface = {};
  id: string;

  constructor(name: string, race: RaceInterface) {
    this.name = name;
    this.race = race;
    this.id = uuid.v4();
  }

  getId(): string {
    return this.id;
  }

  getAttribute(ability: string): number {
    return this.abilities[ability] || -1;
  }
}
