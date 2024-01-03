import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Icon, {Icons} from '../components/Icons';
import {COLORS} from '../constant/theme';
import {tablet} from '../theme/Platform';
import CartItem from '../components/CartItem';
import Tooltip from 'react-native-walkthrough-tooltip';
import DeliveryAddress from './DeliveryAddress';

const labels = ['Cart', 'Delivery Address', 'Order Summary'];

const getStepIndicatorIconConfig = ({position, stepStatus}) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 20,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'shopping-cart';
      break;
    }
    case 1: {
      iconConfig.name = 'location-on';
      break;
    }
    case 2: {
      iconConfig.name = 'assessment';
      break;
    }

    default: {
      break;
    }
  }
  return iconConfig;
};

const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: COLORS.primary,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: COLORS.primary,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: COLORS.primary,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: COLORS.primary,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 40,
  currentStepIndicatorLabelFontSize: 40,
  stepIndicatorLabelCurrentColor: COLORS.primary,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: COLORS.primary,
};

const renderStepIndicator = params => (
  <Icons.MaterialIcons {...getStepIndicatorIconConfig(params)} />
);

const CartScreen = ({navigation}) => {
  const [currentPosition, onChangeCurrentPosition] = useState(0);
  const [visibleTooltip, onChangeVisibleTooltip] = useState(false);

  function headerComponent() {
    return (
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.goBack()}>
          <Icon
            name="cross"
            type={Icons.Entypo}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
          />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveScreenFontSize(tablet ? 0.8 : 1.8),
              fontFamily: 'Poppins-Bold',
            }}>
            Cart
          </Text>
          <Text style={styles.locationText}>R 659 Shahrah e Zahid</Text>
        </View>
      </View>
    );
  }

  function renderItem({item, index}) {
    return <CartItem item={item} index={index} />;
  }

  function FlatListHeader() {
    return (
      <View style={{marginVertical: responsiveScreenFontSize(1)}}>
        <StepIndicator
          stepCount={3}
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          renderStepIndicator={renderStepIndicator}
        />
      </View>
    );
  }

  function FooterComponent() {
    return (
      <View
        style={{
          height: responsiveScreenHeight(14),
          position: 'absolute',
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View
          style={{
            width: '96%',
            alignSelf: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '96%',
              // height: responsiveScreenHeight(6),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Total{' '}
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'grey',
                  fontSize: responsiveScreenFontSize(1.7),
                }}>
                {'(incl. VAT)'}
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.9),
              }}>
              Rs. 912.19
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '96%',
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: 'Poppins-Regular',
                fontSize: responsiveScreenFontSize(1.3),
              }}>
              See price breakdown
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              onChangeCurrentPosition(1);
            }}
            style={{
              width: '100%',
              height: responsiveScreenHeight(6),
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: responsiveScreenFontSize(1.4),
              borderRadius: responsiveScreenFontSize(1),
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1.8),
              }}>
              Confirm payment and address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function FlatListFooterComponent() {
    return (
      <View
        style={{
          // height: responsiveScreenHeight(14),
          width: '100%',
        }}>
        <View
          style={{
            width: '96%',
            alignSelf: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '96%',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.9),
              }}>
              Rs. 904.20
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '96%',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.4),
              }}>
              Delivery Fee
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.primary,
                padding: 6,
                borderRadius: 18,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'white',
                  fontSize: responsiveScreenFontSize(1.3),
                }}>
                Free
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '96%',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.4),
              }}>
              Welcome gift: free delivery
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '96%',
              height: responsiveScreenHeight(4),
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'black',
                  fontSize: responsiveScreenFontSize(1.3),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Platform Fee{'   '}
              </Text>
              <Tooltip
                isVisible={visibleTooltip}
                contentStyle={{width: 200, height: 65}}
                content={
                  <View style={{}}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: responsiveFontSize(1.3),
                      }}>
                      This helps us improve product features, experience &
                      manage operational costs
                    </Text>
                  </View>
                }
                placement="top"
                onClose={() => onChangeVisibleTooltip(false)}>
                <TouchableHighlight
                  onPress={() => onChangeVisibleTooltip(true)}>
                  <Icon
                    name="information-circle-outline"
                    type={Icons.Ionicons}
                    color={'grey'}
                    size={responsiveScreenFontSize(tablet ? 2 : 2)}
                  />
                </TouchableHighlight>
              </Tooltip>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'black',
                fontSize: responsiveScreenFontSize(1.4),
              }}>
              Rs. 7.99
            </Text>
          </View>
        </View>
        <View style={{height: 150}} />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {headerComponent()}
      {FlatListHeader()}
      {currentPosition == 0 ? (
        <>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              height: responsiveScreenHeight(80),
            }}>
            <FlatList
              data={[1, 2, 3, 4,6,7,8]}
              // ListHeaderComponent={FlatListHeader()}
              ListFooterComponent={FlatListFooterComponent()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              style={{width: '100%'}}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={{height: 100}} />
          {FooterComponent()}
        </>
      ) : currentPosition == 1 ? (
        <DeliveryAddress
          stepChange={onChangeCurrentPosition}
          step={currentPosition}
        />
      ) : null}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    height: responsiveScreenHeight(6),
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: tablet ? 'space-between' : 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bagContainer: {
    width: tablet ? '5%' : '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: '8%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    width: tablet ? '85%' : '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  locationText: {
    color: 'white',
    fontSize: responsiveScreenFontSize(tablet ? 0.8 : 1.4),
    fontFamily: 'Poppins-Medium',
  },
  flatlistHeaderComponent: {
    width: '100%',
    height: responsiveScreenHeight(7),
    backgroundColor: COLORS.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  searchContainer: {
    backgroundColor: 'white',
    width: tablet ? '80%' : '70%',
    height: responsiveScreenHeight(tablet ? 5.5 : 5),
    borderRadius: responsiveScreenFontSize(4),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  searchInputBox: {
    width: tablet ? '95%' : '90%',
    fontSize: responsiveScreenFontSize(tablet ? 1 : 1.8),
    color: 'grey',
    fontFamily: 'Poppins-Medium',
  },
  filterIcon: {
    width: tablet ? '5%' : '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryViewChange: {
    width: tablet ? '5%' : '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
