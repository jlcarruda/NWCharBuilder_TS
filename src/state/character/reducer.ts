import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  ActionInterface,
  CharacterListState,
} from '../types';
import CharacterInterface from '../../domain/character/interface';

const characters: CharacterInterface[] = [];
const initialState: CharacterListState = {
  characters,
};

export const characterReducer = (
  state = initialState,
  action: ActionInterface,
) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: state.characters.concat([<CharacterInterface>action.data]),
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (e: CharacterInterface) => e.getId() !== <string>action.data,
        ),
      };
    default:
      return state;
  }
};
