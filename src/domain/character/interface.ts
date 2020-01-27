import RaceInterface from '../race/interface';
import {AbilitiesObjectInterface} from '../ability/interface';

export default interface CharacterInterface {
  name: string;
  race: RaceInterface;
  abilities: AbilitiesObjectInterface;
  id: string;
  getId(): string;
  getAttribute(ability: string): number;
}
