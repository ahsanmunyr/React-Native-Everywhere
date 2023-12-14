import {StyleSheet, Text, View, Platform, Image, TextInput} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {Revaki_logo} from '../constant/images';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Heading from '../components/Text/Heading';
import TextInputLogin from '../components/TextInputLogin';
import {lockIcon, smsIcon} from '../constant/icon';
const LoginScreen = () => {
  const [fields, setFields] = useState({
    email: 'Od_Testing',
    password: '@rT4441',
  });

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const textValuePassword = useMemo(() => fields['password'], [fields]);
  const textValueEmail = useMemo(() => fields['email'], [fields]);
  return (
    <View style={styles.main}>
      <View
        style={[
          styles.container,
          Platform.OS == 'web' ? styles.webBox : styles.mobileView,
        ]}>
        <View style={styles.contentContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image
              source={Revaki_logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Heading text={'Login'} />
          <Text>
            Welcome to React Native Multi-Platforms
          </Text>
          <View style={{marginVertical: 10, width: '100%'}}>
            <TextInputLogin
              placeholderText={'Enter Email'}
              value={textValueEmail}
              IconView={<Image source={smsIcon} style={styles.iconSize} />}
              getValueCB={text => onChangeValue('email', text)}
            />
            <TextInputLogin
              placeholderText={'Enter Password'}
              value={textValuePassword}
            //   isPasswordFields={true}
              IconView={<Image source={lockIcon} style={styles.iconSize} />}
              getValueCB={text => onChangeValue('password', text)}
              isPasswordFields={true}
            />
            {/* <TextInput
              placeholder="Email Address"
              caretHidden={false}
              style={styles.textInput}
              onChangeText={text => onChangeValue('email', text)}
              defaultValue={textValueEmail}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              caretHidden={false}
              style={styles.textInput}
              onChangeText={text => onChangeValue('password', text)}
              defaultValue={textValuePassword}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webBox: {
    width: '30%',
    height: '45%',
  },
  mobileView: {
    width: '90%',
    // height: '45%',
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 1,
  },
  innerMain: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: responsiveScreenHeight(50),
    // backgroundColor: 'red',
    // height: 500,
  },
  iconSize: {height: responsiveFontSize(2), width: responsiveFontSize(2),},
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
