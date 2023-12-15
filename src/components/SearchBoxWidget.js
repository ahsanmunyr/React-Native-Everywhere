import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {memo} from 'react';
import {COLORS, commonStyles} from '../constant/theme';
import {SearchNormal} from '../constant/icon';
import {genericRatio} from '../helper/helper';
import {Pressable} from 'react-native-windows';

const SearchBoxWidget = () => {
  return (
    <View
      style={{
        justifyContent:'space-between', alignItems:'center',flexDirection:'row'
      }}>
      <TextInput clearButtonMode='never'  style={[styles.textInputContainer]} placeholder="Search ..." />
      <Pressable style={styles.iconContainer}>
        <Image  source={SearchNormal} style={styles.iconSize} />
      </Pressable>
    </View>
  );
};

export default memo(SearchBoxWidget);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    // paddingHorizontal: 5,
    borderRadius: 10,
    padding: 5,
  },
  iconContainer: {
    // paddingHorizontal: 10
    width: 40,
    backgroundColor:'white',
    height: 32,
    justifyContent:'center',alignItems:'center'
  },
  iconSize: {
    height: 20,
    width: 20,
  },
  textInputContainer: {
    width: 200,
    borderWidth: 0,
    backgroundColor:'white',
    // borderRadius: 2
  },
});
