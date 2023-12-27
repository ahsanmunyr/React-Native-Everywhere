import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState, memo} from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {Ionicons} from '../constant/icon';
import CustomDrawer from '../components/CustomDrawer';
import {COLORS} from '../constant/theme';
import {ScreensArray} from '../constants/stackArray';
import {connect} from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawableScreen = ({}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer  {...props} />
      )}
      screenOptions={{
        overlayColor: 'transparent',
        drawerType: 'slide',
        swipeEdgeWidth: Platform.OS === 'android' && 50,
        headerShown: false,
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
        drawerStyle: {
          width: 240,
          backgroundColor: COLORS.primary,
          paddingTop: 40,
        },
      }}>
      {ScreensArray.map((_, i) => (
        <Drawer.Screen
          key={i}
          name={_.route}
          component={_.component}
          options={{
            item: _,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};


export default DrawableScreen;

const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
