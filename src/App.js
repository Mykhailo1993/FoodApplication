/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import store, { persistor } from './store';

import AppNavigation from './navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
