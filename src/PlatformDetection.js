import {StyleSheet, Text, View, Platform} from 'react-native';
import React, { useEffect } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkThroughScreen from './screens/WalkThroughScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import GlobalFont from 'react-native-global-font'
const Stack = createNativeStackNavigator();

const PlatformDetection = () => {
  useEffect(()=>{
    GlobalFont.applyGlobal('Poppins-Regular')
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="WalkThroughScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WalkThroughScreen" component={WalkThroughScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OtpScreen" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlatformDetection;

const styles = StyleSheet.create({});
