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
import {otpImage} from '../constant/images';
import {AntDesign, Feather} from '../constant/icon';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Heading from '../components/Text/Heading';
import TextInputLogin from '../components/TextInputLogin';
// import {lockIcon, smsIcon} from '../constant/icon';
import {COLORS} from '../constant/theme';
import LinearGradient from 'react-native-linear-gradient';
import {ValidateEmail} from '../helper/helper';
import {tablet} from '../theme/Platform';
import OTPInputView from 'react-native-otp-inputs';
const OTPScreen = ({navigation}) => {
  const [fields, setFields] = useState({
    otp: '0000',
  });

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  // const confirmHandler = useCallback(async () => {}, [fields]);

  const sendServerCheckOTP = useCallback(code => {
    console.log(code);
    onChangeValue('otp', code);
    if (code.length === 4) {
      // onRequest(code);
    }
  }, []);

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
          // backgroundColor: 'red',
          height: '100%',
          width: '80%',
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: responsiveScreenHeight(50),
          }}>
          <Image
            source={otpImage}
            style={{
              width: responsiveFontSize(tablet ? 15 : 30),
              height: responsiveFontSize(tablet ? 15 : 30),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Light',
              color: 'black',
              letterSpacing: 1,
              fontSize: responsiveFontSize(tablet ? 1 : 1.5),
            }}>
            A 4 digit code has been sent to your registered mobile number
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'black',
              letterSpacing: 1,
              fontSize: responsiveFontSize(tablet ? 1.5 : 2.5),
            }}>
            Enter code to verify
          </Text>
        </View>
        <OTPInputView
          style={[styles.OTP]}
          pinCount={4}
          autofillFromClipboard={true}
          numberOfInputs={4}
          secureTextEntry={true}
          inputContainerStyles={[styles.OTPCodeBox]}
          focusStyles={{borderColor: COLORS.primary}}
          textAlign={'center'}
          clearTextOnFocus
          handleChange={sendServerCheckOTP}
          keyboardType="phone-pad"
        />
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
  OTP: {
    width: tablet ? '50%' : '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OTPCodeBox: {
    width: 50,
    height: 50,
    // backgroundColor: '#F3F4F6',
    color: COLORS.black,
    borderBottomWidth: 3,
    // borderRadius: 10,
    textAlign: 'center',
    borderColor: '#E5E7EB',
  },
  LoginButtonContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
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
