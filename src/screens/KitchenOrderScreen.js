import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerView from '../components/DrawerView';
import {COLORS} from '../constant/theme';

const KitchenOrderScreen = () => {
  return (
    <DrawerView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>Kitchen Order Screen</Text>
      </View>
    </DrawerView>
  );
};

export default KitchenOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
