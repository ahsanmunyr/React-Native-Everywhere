import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import WebApp from './WebApp'
import App from './App'
import Windows from './Windows'

const PlatformDetection = () => {
  if(Platform.OS == 'web'){
    return(
      <WebApp />
    )
  }
  if(Platform.OS == 'android' || Platform.OS == 'ios'){
    return(
      <App />
    )
  }
  if(Platform.OS == 'windows'){
    return(
      <Windows />
    )
  }
}

export default PlatformDetection

const styles = StyleSheet.create({})