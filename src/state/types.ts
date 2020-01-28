import CharacterInterface from '../domain/character/interface';

export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

// STATES
export type CharacterListState = {
  charactersList: CharacterInterface[];
  character?: CharacterInterface;
};

export type AppState = {
  characters: CharacterListState;
};

// INTERFACES
export interface ActionInterface {
  type: string;
  data: object | string | null;
}
