/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/state/store';
import NWCharBuilder from './src/Home';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NWCharBuilder />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
