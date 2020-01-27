import {createStore, combineReducers} from 'redux';
import {characterReducer} from './character/reducer';
import {AppState} from './types';

const rootReducer = combineReducers<AppState>({
  characters: characterReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
