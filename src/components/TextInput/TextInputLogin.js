import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextInputLogin = ({}) => {
  return (
    <TextInput
        secureTextEntry={true}
        placeholder="Password"
        caretHidden={false}
        style={{width: 340}}
    />
  )
}

export default TextInputLogin

const styles = StyleSheet.create({
    textStyle: {fontSize: responsiveFontSize(2.5), fontWeight: '600'},
  });
  