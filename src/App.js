import {StyleSheet, Text, View, Platform} from 'react-native';
import React, {useEffect} from 'react';
import StackNavigation from './navigation/StackNavigation';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SheetProvider, registerSheet} from 'react-native-actions-sheet';
import ExampleTwo from './screens/sheets/example-two';
import ExampleTwoWithoutVariant from './screens/sheets/example-two-without-variant';


registerSheet('example-two', ExampleTwo);
registerSheet('example-two-without-variant', ExampleTwoWithoutVariant);


const App = () => {
  // console.log(store, "store")
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SheetProvider>
          <StackNavigation />
        </SheetProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
