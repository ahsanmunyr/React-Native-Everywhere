import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState, memo} from 'react';
import * as otpRed from '../store/reducer/otpRed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkThroughScreen from '../screens/WalkThroughScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import GlobalFont from 'react-native-global-font';
import DrawableScreen from './DrawableScreen';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {COLORS} from '../constant/theme';
import CartScreen from '../screens/CartScreen';
const Stack = createNativeStackNavigator();

const StackNavigation = ({otpRed}) => {
  const [login, onChangeLogin] = useState(null);
  const [loading, onChangeLoading] = useState(false);
  useEffect(() => {
    GlobalFont.applyGlobal('Poppins-Regular');
  }, []);

  async function getVal() {
    onChangeLoading(true);
    let val = await AsyncStorage.getItem('userInfo');
    if (val != null) {
      let converted = JSON.parse(val);
      if (converted['Status'] == true) {
        onChangeLogin(converted['Status'] == true);
        onChangeLoading(false);
      }
    } else {
      onChangeLoading(false);
      onChangeLogin(false)
    }
  }

  useEffect(() => {
    getVal();
  }, []);

  if (loading || login == null ) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          size={responsiveFontSize(5)}
          color={COLORS.primary}
        />
      </View>
    );
  }

  console.log(login, "login")

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={login ? 'DrawableScreen' : 'WalkThroughScreen'}>
        <Stack.Screen name="WalkThroughScreen" component={WalkThroughScreen} />
        <Stack.Screen name="DrawableScreen" component={DrawableScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OtpScreen" component={OTPScreen} />
        {/* <Stack.Screen name="DrawableScreen" component={DrawableScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function mapStateToProps({otpRed}) {
  return {
    otpRed,
  };
}
export default connect(mapStateToProps, null)(memo(StackNavigation));

const styles = StyleSheet.create({});
