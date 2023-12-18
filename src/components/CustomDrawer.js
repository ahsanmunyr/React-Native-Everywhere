import React, {useRef, useReducer} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import DrawerItemList from '../navigation/DrawerItemList';
import Icon, {Icons} from './Icons';
import {COLORS} from '../constant/theme';

const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
};

const CustomDrawer = props => {
  // console.log(props.state[0], "propsprops")
  const {state, descriptors, navigation} = props;
  const scrollRef = useRef(null);

  const [show, toggleProfile] = useReducer(s => !s, false);

  const fun = () => {
    show
      ? scrollRef.current.scrollTo({
          y: 0,
          animated: true,
        })
      : scrollRef.current.scrollToEnd({
          animated: true,
        });
    toggleProfile();
  };

  const progress = useDerivedValue(() => {
    return show ? withTiming(1) : withTiming(0);
  });

  const menuStyles = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [{scaleY}],
    };
  });

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-200, 0]);
    return {
      transform: [{translateX}],
    };
  });

  const viewStyles2 = type =>
    useAnimatedStyle(() => {
      const val = type === 'top' ? -100 : 100;
      const translateY = interpolate(drawerProgress.value, [0, 1], [val, 0]);
      const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
      return {
        transform: [{translateY}],
        opacity,
      };
    });

  return (
    <View style={styles.container}>
      {/* header */}
      <Animated.View
        style={[styles.row, styles.view, styles.marginTop, viewStyles2('top')]}>
        <View style={styles.iconContainer}>
          <Icon name="logo-electron" type={Icons.Ionicons} size={30} />
        </View>
        <Text style={styles.headerTitle}>POS</Text>
      </Animated.View>
      {/* Drawer List Item */}
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles]}>
        <DrawerItemList {...props} styles={styles} />

        <Animated.View
          style={[styles.view, {backgroundColor: COLORS.primary}, menuStyles]}>
          <Text style={{color: 'white'}}>Ahsan Munir</Text>
          <Text style={{color: 'white'}}>ahsanmuneer81@gmail.com</Text>
          <View style={styles.separator} />

          <Text style={{marginTop: 10, color: 'white'}}>
            v1.0.0 - Terms & Condition
          </Text>
        </Animated.View>
      </Animated.ScrollView>
      <TouchableOpacity onPress={fun}>
        <Animated.View
          style={[
            styles.row,
            styles.view,
            styles.marginBottom,
            viewStyles2('bottom'),
          ]}>
          <Image
            style={styles.profile}
            source={require('../assets/images/user-profile.jpg')}
          />
          <View style={{}}>
            <Text style={styles.headerTitle}>Ahsan Munir</Text>
            <Text style={styles.profileText}>Software Engineer</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    // backgroundColor: COLORS.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
  },
  marginVertical: {
    marginVertical: constant.SPACING / 2,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: constant.textFontSize,
    color: COLORS.dark,
    paddingHorizontal: constant.SPACING,
  },
  notificationBadge: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
  iconContainer: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 2,
    backgroundColor: COLORS.primary,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.darkgray,
    marginVertical: constant.SPACING / 2,
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: COLORS.white,
  },
  profile: {
    marginVertical: constant.SPACING / 2,
    marginRight: constant.SPACING,
    marginLeft: constant.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  profileText: {
    color: COLORS.white,
  },
});
