import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, dark as darkTheme} from '@eva-design/eva';

import {name as appName} from './app.json';
import configureStore from './src/state/store';
import NWCharBuilder from './src/Home';
import {default as appTheme} from './src/assets/custom-theme.json';

const theme = {...darkTheme, ...appTheme};

const store = configureStore();

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <Provider store={store}>
      <NWCharBuilder />
    </Provider>
  </ApplicationProvider>
);

AppRegistry.registerComponent(appName, () => App);
