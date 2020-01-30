import {ADD_CHARACTER, DELETE_CHARACTER} from '../../types';
import CharacterInterface from '../../../domain/characterInterface';
import {Dispatch} from 'redux';

export const addCharacter = (character: CharacterInterface) => {
  return (dispatch: Dispatch) => {
    return dispatch({type: ADD_CHARACTER, data: character});
  };
};

export const deleteCharacter = (id: string) => {
  return (dispatch: Dispatch) => {
    return dispatch({type: DELETE_CHARACTER, data: id});
  };
};
