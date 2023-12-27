import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {COLORS} from '../constant/theme';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {tablet} from '../theme/Platform';

const CategoryItems = ({index, item, setProducts, products}) => {
  // console.log(item, 'item');
  return (
    <TouchableOpacity onPress={() => setProducts('products', item)}>
      <View
        key={index}
        style={{
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderWidth: 1,
          borderRadius: responsiveFontSize(2),
          marginHorizontal: responsiveScreenFontSize(tablet ? 0.3:0.6),
          marginVertical: tablet? 4:12,
          borderWidth: responsiveFontSize(0.2),
          borderColor: COLORS.primary,
          backgroundColor:
            products.CategoryId == item.CategoryId ? 'white' : COLORS.primary,
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(tablet ?1 : 2),
            color:
              products.CategoryId == item.CategoryId ? COLORS.primary : 'white',
            // fontWeight: '600',
            fontFamily: 'Poppins-Medium'
          }}>
          {item.CategoryName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CategoryItems);

const styles = StyleSheet.create({});
