import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';

import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Icon, {Icons} from '../components/Icons';
import {COLORS} from '../constant/theme';
import {tablet} from '../theme/Platform';

const DeliveryAddress = ({stepChange, step}) => {
  function FooterComponent() {
    return (
      <View
        style={{
          height: responsiveScreenHeight(8),
          position: 'absolute',
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          bottom: 0,
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            stepChange(2);
          }}
          style={{
            width: '95%',
            alignSelf:'center',
            height: responsiveScreenHeight(6),
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: responsiveScreenFontSize(1.4),
            borderRadius: responsiveScreenFontSize(1),
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-Medium',
              fontSize: responsiveScreenFontSize(1.8),
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>DeliveryAddress</Text>
      {FooterComponent()}
    </View>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({});
