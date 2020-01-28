import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  ActionInterface,
  CharacterListState,
} from '../types';
import CharacterInterface from '../../domain/character/interface';

const characters: CharacterInterface[] = [];
const initialState: CharacterListState = {
  charactersList: characters,
};

export const characterReducer = (
  state = initialState,
  action: ActionInterface,
) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        charactersList: state.charactersList.concat([
          <CharacterInterface>action.data,
        ]),
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        charactersList: state.charactersList.filter(
          (e: CharacterInterface) => e.getId() !== <string>action.data,
        ),
      };
    default:
      return state;
  }
};
