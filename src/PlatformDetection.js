import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkThroughScreen from './screens/WalkThroughScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const PlatformDetection = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WalkThroughScreen" component={WalkThroughScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlatformDetection;

const styles = StyleSheet.create({});
