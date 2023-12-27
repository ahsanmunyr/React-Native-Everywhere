import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useMemo, useState, memo} from 'react';
import {Revaki_logo} from '../constant/images';
import * as login from '../store/actions/loginAct';
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
import {connect} from 'react-redux';
import {screenNavigation} from '../helper/helper';
const LoginScreen = ({navigation, login}) => {
  const [isFocused, setFocused] = useState(false);
  const [isFocused1, setFocused1] = useState(false);

  const [fields, setFields] = useState({
    email: 'Od_Testing',
    password: '@rT4441',
    apiCalling: false,
  });

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const loginHandler = useCallback(async () => {
    onChangeValue('apiCalling', true);
    if (fields['email'] === '') {
      console.log('error', 'Please enter email address');
    }
    if (fields['password'] === '') {
      console.log('error', 'Please enter password');
    }

    if (!ValidateEmail(fields['email'])) {
      console.log('error', 'Please enter valid email address');
    }

    login(textValueEmail, textValuePassword).then(res => {
      const {Status, Message} = res;
      console.log(Status, Message, "Status, Message")
      if (Status) {
        screenNavigation(navigation, 'OtpScreen');
      } else {
        console.error(Message);
      }
      onChangeValue('apiCalling', false);
    });
  }, [fields]);

  const textValuePassword = useMemo(() => fields['password'], [fields]);
  const textValueEmail = useMemo(() => fields['email'], [fields]);
  const apiCall = useMemo(() => fields['apiCalling'], [fields]);

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
      <View style={[styles.container, styles.mobileView]}>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontFamily: 'Poppins-ExtraBold',
              color: 'black',
              fontSize: responsiveFontSize(tablet ? 2 : 4),
            }}>
            Login
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: responsiveFontSize(tablet ? 1 : 2),
            }}>
            Please sign in to continue
          </Text>
          <View style={{marginVertical: 10, width: '100%'}}>
            <TextInputLogin
              placeholderText={'Enter Email'}
              value={textValueEmail}
              IconView={<Image source={smsIcon} style={styles.iconSize} />}
              getValueCB={text => onChangeValue('email', text)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              UI={isFocused}
            />
            <TextInputLogin
              placeholderText={'Enter Password'}
              value={textValuePassword}
              IconView={<Image source={lockIcon} style={styles.iconSize} />}
              getValueCB={text => onChangeValue('password', text)}
              isPasswordFields={true}
              onFocus={() => setFocused1(true)}
              onBlur={() => setFocused1(false)}
              UI={isFocused1}
            />
            <View
              style={{
                height: responsiveScreenHeight(10),
                width: '100%',
                alignSelf: 'flex-end',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  loginHandler();
                }}
                activeOpacity={0.4}
                style={{
                  height: responsiveScreenHeight(tablet ? 6 : 5),
                  alignSelf: 'flex-end',
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#fc8a6d', COLORS.primary]}
                  style={{
                    height: responsiveScreenHeight(5),
                    paddingHorizontal: responsiveScreenFontSize(4),
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: responsiveScreenFontSize(5),
                  }}>
                  {apiCall ? (
                    <ActivityIndicator
                      style={{paddingHorizontal: responsiveScreenFontSize(3)}}
                      color={COLORS.white}
                      size={responsiveScreenFontSize(tablet? 2: 3)}
                    />
                  ) : (
                    <>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          color: 'white',
                          fontSize: responsiveFontSize(tablet ? 1 : 2),
                        }}>
                        Next {'  '}
                      </Text>
                      <AntDesign
                        name="right"
                        color="white"
                        size={responsiveScreenFontSize(tablet ? 1 : 2)}
                      />
                    </>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: responsiveFontSize(5),
          width: '100%',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              color: COLORS.primary,
              fontSize: responsiveFontSize(tablet ? 1 : 1.7),
            }}>
            Don't gave an account?{' '}
            <Text style={{fontFamily: 'Poppins-ExtraBold'}}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(null, login)(memo(LoginScreen));

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
