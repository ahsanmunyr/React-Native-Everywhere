import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {Revaki_logo} from '../constant/images';
import {AntDesign, Feather} from '../constant/icon';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Heading from '../components/Text/Heading';
import TextInputLogin from '../components/TextInputLogin';
import {lockIcon, smsIcon} from '../constant/icon';
import {COLORS} from '../constant/theme';
import LinearGradient from 'react-native-linear-gradient';
import {ValidateEmail} from '../helper/helper';
import {tablet} from '../theme/Platform';
const OTPScreen = ({navigation}) => {
  const [isFocused, setFocused] = useState(false);
  const [isFocused1, setFocused1] = useState(false);

  const [fields, setFields] = useState({
    otp: '',
  
  });

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const confirmHandler = useCallback(async () => {

  }, [fields]);

  const textValueOtp = useMemo(() => fields['otp'], [fields]);
  return (
    <View style={styles.main}>
      <View
        style={{
          position: 'absolute',
          top: responsiveScreenFontSize(1),
          left: responsiveScreenFontSize(1),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={0.4}
          style={{
            height: responsiveScreenHeight(5),
            alignSelf: 'flex-end',
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#fc8a6d', COLORS.primary]}
            style={{
              height: responsiveScreenHeight(5),
              width: responsiveScreenHeight(5),
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: responsiveScreenFontSize(50),
            }}>
            <AntDesign
              name="left"
              color="white"
              size={responsiveScreenFontSize(tablet ? 1 : 2)}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          height: responsiveScreenHeight(50),
          width: '80%',
        }}>
          
        </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  webBox: {
    width: '30%',
    // height: '45%',
  },
  mobileView: {
    width: '90%',
    // height: '45%',
  },
  container: {},
  innerMain: {
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: Platform.OS == 'web' ? responsiveScreenHeight(56): responsiveScreenHeight(50),
    // backgroundColor: 'red',
    // height: 500,
  },
  iconSize: {height: responsiveFontSize(2), width: responsiveFontSize(2)},
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  logo: {width: 120, height: 120},
  viewComponent: {},
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // width: 400,
    // height: 400,
    borderRadius: responsiveFontSize(0.1),
    // backgroundColor: 'white',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // width: 400,
    // height: 50,
    borderRadius: responsiveFontSize(0.1),
    backgroundColor: 'white',
  },
  textInput: {
    width: '100%',
    height: responsiveScreenHeight(7),
    // backgroundColor: 'blue',
    marginVertical: responsiveFontSize(1),
    backgroundColor: '#f8f8f8',
    paddingHorizontal: responsiveFontSize(2),
  },
});
