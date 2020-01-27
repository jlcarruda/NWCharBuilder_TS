import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './character/reducer';
import {AppState} from './types';

const rootReducer = combineReducers<AppState>({
  characters: characterReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
