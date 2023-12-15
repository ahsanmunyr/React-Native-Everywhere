import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Heading = ({text}) => {
  return <Text  style={[styles.textStyle, Platform.OS == 'web'? {fontSize: responsiveFontSize(2)}: {fontSize: responsiveFontSize(3)}]}>{text}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  textStyle: {fontFamily: 'Poppins-ExtraBold', color: 'black', letterSpacing: 2, textDecorationLine:'underline', textTransform:'capitalize'},
});
