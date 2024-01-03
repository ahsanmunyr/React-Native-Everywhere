import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
  useScrollHandlers,
} from 'react-native-actions-sheet';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {tablet} from '../../theme/Platform';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLORS} from '../../constant/theme';
import Icon, {Icons} from '../../components/Icons';
import {FlatList} from 'react-native-gesture-handler';
import VariantItem from '../../components/VariantItem';

function ExampleTwo({sheetId, payload}) {
  //   console.log(payload?.Variants[0].Data.length, 'payload');
  const [count, onSetCount] = useState(0);
  const actionSheetRef = useRef(null);
  const scrollHandlers = useScrollHandlers('scrollview-1', actionSheetRef);

  function flatListHeader() {
    return (
      <>
        <Image
          width={220}
          height={tablet ? 150 : 200}
          style={{
            opacity: 0.9,
            alignSelf: 'center',
          }}
          resizeMode="contain"
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png',
          }}
        />
        <View style={styles.contain}>
          <Text style={styles.heading}>{payload?.DishName}</Text>
          <Text style={styles.price}>
            from Rs. {(payload?.TotalPrice).toFixed(2)}
          </Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            040Z Cheese burger with lettuce ,tomato, 75DH signature sauce &
            pickles can be added
          </Text>
        </View>
        <View style={styles.middleContainerHeader}>
          <View style={{width: '70%'}}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              {payload?.Variants[0]?.Title}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1.5),
              }}>
              {payload?.Variants[0]?.Description}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ededed',
              padding: 10,
              borderRadius: responsiveFontSize(2),
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1.3),
              }}>
              Required
            </Text>
          </View>
        </View>
      </>
    );
  }

  function flatListFooter() {
    return (
      <>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'column',
          }}>
          <View style={{marginVertical: responsiveScreenFontSize(1)}}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Special instructions
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1.5),
              }}>
              Please let us know if you are allergic to anything or if we need
              to avoid anything
            </Text>
          </View>
          <TextInput
            multiline
            textAlignVertical="top"
            placeholder="e.g. no mayo"
            style={styles.textInput}
          />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.firstHalf}>
            <TouchableOpacity
              onPress={() => {
                if (count > 0) {
                  onSetCount(pre => pre - 1);
                }
              }}
              style={styles.increaseDescrease}>
              <Icon
                name="minus"
                type={Icons.AntDesign}
                color={'white'}
                size={responsiveScreenFontSize(tablet ? 1.4 : 2.5)}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(2),
              }}>
              {count}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (count >= 0) {
                  onSetCount(pre => pre + 1);
                }
              }}
              style={styles.increaseDescrease}>
              <Icon
                name="plus"
                type={Icons.AntDesign}
                color={'white'}
                size={responsiveScreenFontSize(tablet ? 1.4 : 2.5)}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '60%',
              height: responsiveScreenHeight(8),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: responsiveScreenFontSize(1),
                width: '80%',
                height: responsiveScreenHeight(5),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveScreenFontSize(1.7),
                  fontFamily: 'Poppins-Medium',
                }}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  function renderItem({item, index}) {
    // console.log(item, 'item');
    return (
        <VariantItem 
            item={item}
            index={index}
        />
    
    );
  }

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
      statusBarTranslucent
      indicatorStyle={{
        width: 100,
      }}
      gestureEnabled={true}>
      <View style={styles.container}>
        
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={flatListHeader()}
            ListFooterComponent={flatListFooter()}
            data={payload?.Variants?.length > 0 ? payload?.Variants[0]?.Data: []}
            // contentContainerStyle={styles.middleContain}
            keyExtractor={(item, i) => i.toString()}
            renderItem={renderItem}
          />
       

        {/* <View style={styles.middleContain}>
          {payload?.Variants?.length > 0 ? (
            <>
              <View style={styles.middleContainerHeader}>
                <View style={{width: '70%'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Medium',
                      fontSize: responsiveScreenFontSize(1.7),
                    }}>
                    {payload?.Variants[0]?.Title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: responsiveScreenFontSize(1.5),
                    }}>
                    {payload?.Variants[0]?.Description}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#ededed',
                    padding: 10,
                    borderRadius: responsiveFontSize(2),
                  }}>
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontFamily: 'Poppins-Medium',
                      fontSize: responsiveScreenFontSize(1.3),
                    }}>
                    Required
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '95%',
                  // height: responsiveScreenHeight(20)
                }}>
                {payload?.Variants[0]?.Data?.map((item, index) => {
                  return (
                    <View>
                      <BouncyCheckbox
                        key={index}
                        size={responsiveScreenFontSize(2)}
                        fillColor={COLORS.primary}
                        text="Jalapeno Chicken Sandwich  + Rs 595.00"
                        iconStyle={{borderColor: COLORS.primary}}
                        textStyle={{
                          fontFamily: 'Poppins-Medium',
                          fontSize: responsiveScreenFontSize(1.2),
                          color: 'black',
                          textDecorationLine: 'none',
                        }}
                        style={{marginVertical: 5}}
                        onPress={isChecked => {}}
                      />
                    </View>
                  );
                })}
              </View>
            </>
          ) : (
            <>
              <View style={styles.middleContainerHeader}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Medium',
                      fontSize: responsiveScreenFontSize(1.7),
                    }}>
                    Frequently bought together
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: responsiveScreenFontSize(1.5),
                    }}>
                    Other customers also ordered these
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#ededed',
                    padding: 10,
                    borderRadius: responsiveFontSize(2),
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontFamily: 'Poppins-Medium',
                      fontSize: responsiveScreenFontSize(1.3),
                    }}>
                    Optional
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '95%',
                  // backgroundColor: 'red',
                  alignSelf: 'center',
                }}>
                <BouncyCheckbox
                  size={responsiveScreenFontSize(2.5)}
                  fillColor={COLORS.primary}
                  text="Jalapeno Chicken Sandwich  + Rs 595.00"
                  iconStyle={{borderColor: COLORS.primary}}
                  textStyle={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: responsiveScreenFontSize(1.6),
                    color: 'black',
                    textDecorationLine: 'none',
                  }}
                  style={{marginVertical: 5}}
                  onPress={isChecked => {}}
                />
                <BouncyCheckbox
                  size={responsiveScreenFontSize(2.5)}
                  fillColor={COLORS.primary}
                  text="Spicy Cheese Fries  + Rs 415.00"
                  iconStyle={{borderColor: COLORS.primary}}
                  style={{marginVertical: 5}}
                  textStyle={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: responsiveScreenFontSize(1.6),
                    color: 'black',
                    textDecorationLine: 'none',
                  }}
                  onPress={isChecked => {}}
                />
                <BouncyCheckbox
                  size={responsiveScreenFontSize(2.5)}
                  fillColor={COLORS.primary}
                  text="Beverage (Can)  + Rs 120.00"
                  iconStyle={{borderColor: COLORS.primary}}
                  style={{marginVertical: 5}}
                  textStyle={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: responsiveScreenFontSize(1.6),
                    color: 'black',
                    textDecorationLine: 'none',
                  }}
                  onPress={isChecked => {}}
                />
              </View>
            </>
          )}
        </View> */}
      </View>
    </ActionSheet>
  );
}

export default ExampleTwo;

const styles = StyleSheet.create({
  firstHalf: {
    width: '35%',
    height: responsiveScreenHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  firstHalfVariant:{
    width: '35%',
    height: responsiveScreenHeight(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '90%',
    height: responsiveScreenHeight(8),
    alignSelf: 'center',
    marginVertical: responsiveScreenFontSize(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenFontSize(2),
  },
  increaseDescrease: {
    width: responsiveScreenHeight(3),
    height: responsiveScreenHeight(3),
    borderRadius: responsiveScreenFontSize(10),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  increaseDescreaseVariant:{
    width: responsiveScreenHeight(2),
    height: responsiveScreenHeight(2),
    borderRadius: responsiveScreenFontSize(10),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: responsiveScreenFontSize(10),
    borderRadius: responsiveScreenFontSize(2),
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: responsiveScreenFontSize(1),
    borderColor: 'grey',
    marginVertical: responsiveScreenFontSize(1),
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  contain: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '70%',
    fontFamily: 'Poppins-ExtraBold',
    color: 'black',
    fontSize: responsiveScreenFontSize(2.5),
  },
  price: {
    width: '30%',
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: responsiveScreenFontSize(1.5),
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
  },

  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveScreenFontSize(1.5),
  },
  middleContain: {
    width: '90%',
    // height: responsiveScreenFontSize(20),

    backgroundColor: '#f8f8f8',
    alignSelf: 'center',
    marginVertical: responsiveScreenFontSize(2),
    paddingVertical: responsiveScreenFontSize(2),
    borderRadius: responsiveScreenFontSize(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  middleContainerHeader: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 12,
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
