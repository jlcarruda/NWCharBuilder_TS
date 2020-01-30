import Character from './character';
import SystemInterface from './system/systemInterface';
import RaceInterface from './system/races/raceInterface';

class CharacterFactory {
  private system: SystemInterface;

  constructor(system: SystemInterface) {
    this.system = system;
  }

  create(characterObject: {name: string; race: RaceInterface}) {
    const {name, race} = characterObject;
    const abilities = this.system.getAbilitiesConstants();

    return new Character(name, race, abilities);
  }
}

export default CharacterFactory;
