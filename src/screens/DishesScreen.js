import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from '../components/DrawerView';
import {COLORS} from '../constant/theme';

const DishesScreen = () => {
  return (
    <DrawerView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>Dishes Screen</Text>
      </View>
    </DrawerView>
  );
};

export default DishesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
