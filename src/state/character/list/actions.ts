import {ADD_CHARACTER, DELETE_CHARACTER, ActionInterface} from '../../types';
import CharacterInterface from '../../../domain/character/interface';

export const addCharacter = (
  character: CharacterInterface,
): ActionInterface => ({
  type: ADD_CHARACTER,
  data: character,
});

export const deleteCharacter = (id: string): ActionInterface => ({
  type: DELETE_CHARACTER,
  data: id,
});
