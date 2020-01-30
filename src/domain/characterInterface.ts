import RaceInterface from './system/races/raceInterface';

export default interface CharacterInterface {
  name: string;
  race: RaceInterface;
  id: string;
  getId(): string;
  getAttribute(ability: string): number;
}
