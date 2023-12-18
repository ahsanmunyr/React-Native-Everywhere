import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import DrawerView from '../components/DrawerView'
import { COLORS } from '../constant/theme'


export default function DrawerScreen({ route, navigation }) {
  return (
    <DrawerView style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
    </DrawerView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})
