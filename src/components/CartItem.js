import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../constant/theme';
import Icon, {Icons} from './Icons';
import {tablet} from '../theme/Platform';

const CartItem = ({item, index}) => {
  const [count, onSetCount] = useState(0);
  return (
    <View
      key={index}
      style={{
        width: '98%',
        height: responsiveScreenHeight(10),
        marginVertical: 5,
        alignSelf: 'center',
        marginHorizontal: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 12,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 60, height: 60}}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png',
        }}
      />
      <Text
        style={{
          color: COLORS.primary,
          fontSize: responsiveFontSize(1.2),
          fontFamily: 'Poppins-Medium',
        }}>
        Regular Burger
      </Text>
      <View style={{width: '30%', height: 80, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <TouchableOpacity
          onPress={() => {
            if (count > 0) {
              onSetCount(pre => pre - 1);
            }
          }}
          style={styles.increaseDescreaseVariant}>
          <Icon
            name="minus"
            type={Icons.AntDesign}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 1.4 : 1.7)}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Medium',
            fontSize: responsiveScreenFontSize(1.8),
          }}>
          {count}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (count >= 0) {
              onSetCount(pre => pre + 1);
            }
          }}
          style={styles.increaseDescreaseVariant}>
          <Icon
            name="plus"
            type={Icons.AntDesign}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 1.4 : 1.7)}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: '10%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="trash-bin-outline"
          type={Icons.Ionicons}
          color={COLORS.primary}
          size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
    increaseDescreaseVariant: {
        width: responsiveScreenHeight(2.5),
        height: responsiveScreenHeight(2.5),
        borderRadius: responsiveScreenFontSize(10),
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
