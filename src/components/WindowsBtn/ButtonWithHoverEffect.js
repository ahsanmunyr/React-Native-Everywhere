import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const ButtonWithHoverEffect = ({
  onPress,
  onMouseEnter,
  onMouseLeave,
  showBtnEffect,
  btnTitle,
  btnStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={{alignSelf:'flex-end'}}>
      <View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[
          btnStyle,
          {
            backgroundColor: showBtnEffect ? '#007AFF' : '#2196F3',
          },
        ]}>
        <Text style={styles.textStyle}>{btnTitle}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonWithHoverEffect;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
