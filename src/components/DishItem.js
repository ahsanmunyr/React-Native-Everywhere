import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constant/theme';
import {tablet} from '../theme/Platform';
import {SheetManager} from 'react-native-actions-sheet';

const DishItem = ({index, item}) => {
  // console.log(item, 'item========================');
  // const obj = {
  //   ApplyDiscount: true,
  //   ApplyGST: true,
  //   BarCode: '0077',
  //   CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
  //   Discription: '',
  //   DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
  //   DishName: 'Lemon Tart (Mini)',
  //   GstAmount: 26.46,
  //   ImageURL:
  //     'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
  //   InMinut: 0,
  //   InSec: 0,
  //   IsDeal: false,
  //   IsPriceWithGST: true,
  //   PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
  //   PriceStartFrom: 203.54,
  //   PriceWithGST: 230,
  //   TotalPrice: 203.54,
  //   Variants: [],
  //   WeightInGram: '',
  // };
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: -1}}
      style={{
        width: tablet ? '19.2%' : '48%',
        height: responsiveScreenHeight(25),
        // backgroundColor: 'white',
        marginHorizontal: responsiveFontSize(tablet ? 0.3 : 0.5),
        marginVertical: responsiveFontSize(0.3),
        borderRadius: responsiveFontSize(1),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      colors={['#f0f0f0', 'black']}>
      <TouchableOpacity
        onPress={() => {
          console.log(item?.Variants.length, "item")
          if(item?.Variants.length == 0){
            SheetManager.show('example-two-without-variant', {
              payload: item,
            });
          }
          if(item?.Variants.length == 1){
               SheetManager.show('example-two', {
            payload: item,
          });
          }
          // SheetManager.show('example-two', {
          //   payload: item,
          // });
        }}
        key={index}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            borderRadius: responsiveFontSize(1),
          }}>
          <View
            style={{
              position: 'absolute',
              top: 5,
              left: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: responsiveScreenFontSize(tablet ? 1 : 1.5),
                fontFamily: 'Poppins-Medium',
              }}>
              {item?.DishName}
            </Text>
          </View>
          <Image
            width={220}
            height={tablet ? 150 : 200}
            style={{
              opacity: 0.9,
            }}
            resizeMode="contain"
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png',
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            paddingHorizontal: 6,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveScreenFontSize(tablet ? 1.2 : 1.5),
              fontFamily: 'Poppins-Medium',
            }}>
            Rs. {(item?.PriceWithGST).toFixed(2)}
          </Text>
        </View>
        {/* <Text>DishItem</Text> */}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DishItem;

const styles = StyleSheet.create({});
