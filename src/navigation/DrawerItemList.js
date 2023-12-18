import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import { colors } from '../constant'
import {COLORS} from '../constant/theme';
import Icon from '../components/Icons';

const DrawerItem = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
  activeItemColor,
  color,
  styles,
  focused,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, {backgroundColor: activeItemColor}]}>
      <View style={styles.row}>
        <Icon type={type} name={name} size={focused? 28: 24} color={COLORS.white} />
        <Text style={[styles.label, {color: 'white', fontWeight: focused ? '800':'400'}]}>{label}</Text>
      </View>
      {/* {notification > 0 && (
        <View
          style={[
            styles.notificationBadge,
            {
              backgroundColor: notification > 5 ? COLORS.primary : 'white',
            },
          ]}>
          <Text>{notification}</Text>
        </View>
      )} */}
    </TouchableOpacity>
  );
};

const DrawerItemList = ({state, descriptors, navigation, styles}) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        // console.log(options, "options.item;")
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        {
          /* console.log(options) */
        }

        const drawerItem = options.item;
        const color = isFocused ? COLORS.black : COLORS.darkgray;
        const activeItemColor = isFocused ? COLORS.primary : null;

        return (
          <DrawerItem
            key={index}
            label={drawerItem.label}
            tabBarTestID={options.tabBarTestID}
            onPress={onPress}
            name={drawerItem.icon}
            type={drawerItem.type}
            notification={drawerItem.notification}
            color={color}
            activeItemColor={activeItemColor}
            styles={styles}
            focused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default DrawerItemList;
