import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.app}>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center',
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center',
  },
  link: {
    color: '#1B95E0',
  },
  code: {
    fontFamily: 'monospace, monospace',
  },
});
