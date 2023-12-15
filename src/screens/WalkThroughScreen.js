import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../constant/theme';
import LinearGradient from 'react-native-linear-gradient';
import { tablet } from '../theme/Platform';
const WalkThroughScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: tablet? '50%' : '80%', alignSelf: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            color: 'black',
            fontSize: responsiveFontSize(tablet? 1: 2),
          }}>
          Keep Everything
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            color: 'black',
            fontSize: responsiveFontSize(tablet? 2 :4),
          }}>
          at Your Fingertip
        </Text>
      </View>
      <LottieView
        source={require('./../assets/lottie/food.json')}
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(50),
        }}
        autoPlay
        loop
      />
      <View
        style={{
          height: responsiveScreenHeight(15),
          width: tablet ? '50%' : '80%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Signup')}
          activeOpacity={0.4}
          style={{
            width: '100%',
            height: responsiveScreenHeight(5),
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#fc8a6d', COLORS.primary]}
            style={{
              // width: '100%',
              height:  responsiveScreenHeight(tablet? 6 : 5),
              // backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveScreenFontSize(5),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'white',
                fontSize: responsiveFontSize(tablet? 1: 2),
              }}>
              Sign up
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              color: COLORS.primary,
              fontSize: responsiveFontSize(tablet? 1: 1.7),
            }}>
            already have an account? <Text style={{ fontFamily: 'Poppins-ExtraBold',}}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({});
