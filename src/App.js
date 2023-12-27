import {StyleSheet, Text, View, Platform} from 'react-native';
import React, {useEffect} from 'react';
import StackNavigation from './navigation/StackNavigation';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  // console.log(store, "store")
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

