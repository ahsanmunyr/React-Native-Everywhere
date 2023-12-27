import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import DrawerView from '../components/DrawerView';
import {COLORS} from '../constant/theme';
import {connect} from 'react-redux';
import categoryRed from '../store/reducer/categoryRed';
import * as categoryAct from '../store/actions/categoriesAct';
import * as dishListAct from '../store/actions/dishlistAct';
import otpRed from '../store/reducer/otpRed';
import CategoryItem from '../components/CategoryItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Icon, {Icons} from '../components/Icons';
import DishItem from '../components/DishItem';
import {tablet} from '../theme/Platform';

const DashboardScreen = ({
  categoryRed,
  categoryAct,
  otpRed,
  dishListRed,
  dishListAct,
  navigation,
}) => {
  // console.log(dishListRed?.DishList, '==============dishListRed');
  const [fields, setFields] = useState({
    products: {},
    loader: false,
    categoryView: false,
  });

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const getValCategory = async () => {
    // let userData = await AsyncStorage.getItem('userInfo');
    // console.log(otpRed, "otpRed")
    // alert('getValCategory');
    if (otpRed.hasOwnProperty('PlaceId')) {
      categoryAct(otpRed['PlaceId'], otpRed?.UserData['Token'])
        .then(res => {
          // console.log(res, '=================');
        })
        .catch(err => {
          console.warn(err);
        });
    }
  };

  const getValDishList = async () => {
    // alert('getValDishList');

    if (otpRed.hasOwnProperty('PlaceId')) {
      dishListAct(otpRed['PlaceId'], otpRed?.UserData['Token'])
        .then(res => {
          // console.log(res, '=================');
        })
        .catch(err => {
          console.warn(err);
        });
    }
  };

  useEffect(() => {
    // In future we using promise.all
    onChangeValue('loader', true);
    getValCategory();
    getValDishList();
    onChangeValue('loader', false);
  }, []);

  const apiLoader = useMemo(() => fields['loader'], [fields]);
  const productID = useMemo(() => fields['products'], [fields]);
  const categoryView = useMemo(() => fields['categoryView'], [fields]);
  if (apiLoader) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ActivityIndicator
          size={responsiveFontSize(5)}
          color={COLORS.primary}
        />
      </View>
    );
  }

  function renderItem({item, index}) {
    return <DishItem index={index} item={item} />;
  }

  console.log(categoryView, 'categoryView');

  return (
    <DrawerView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      <View
        style={{
          height: responsiveScreenHeight(6),
          width: '100%',
          backgroundColor: COLORS.primary,
          justifyContent: tablet ? 'space-between' : 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: '5%',
            height: '100%',
            // backgroundColor:'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="menu"
            type={Icons.Ionicons}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
          />
        </TouchableOpacity>
        <View
          style={{
            width: tablet ? '85%' : '70%',
            // backgroundColor: 'yellow',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveScreenFontSize(tablet ? 0.8 : 1.5),
              fontFamily: 'Poppins-Medium',
            }}>
            R 659 Shahrah e Zahid
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveScreenFontSize(tablet ? 0.6 : 1.2),
              fontFamily: 'Poppins-Medium',
            }}>
            Karachi
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '5%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="bag"
            type={Icons.Ionicons}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                width: '100%',
                height: responsiveScreenHeight(7),
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: tablet ? '92%' : '90%',
                  height: responsiveScreenHeight(tablet ? 5.5 : 5),
                  borderRadius: responsiveScreenFontSize(4),
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 12,
                  alignItems: 'center',
                }}>
                <Icon
                  name="search"
                  type={Icons.Ionicons}
                  color={'grey'}
                  size={responsiveScreenFontSize(tablet ? 1.4 : 2.5)}
                />
                <TextInput
                  style={{
                    width: tablet ? '95%' : '90%',
                    fontSize: responsiveScreenFontSize(tablet ? 1 : 1.8),
                    color: 'grey',
                    fontFamily: 'Poppins-Medium',
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (categoryView) {
                    onChangeValue('categoryView', false);
                  } else {
                    onChangeValue('categoryView', true);
                  }
                }}
                style={{
                  width: '5%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="view-dashboard-outline"
                  type={Icons.MaterialCommunityIcons}
                  color={'white'}
                  size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
                />
              </TouchableOpacity>
            </View>
            {categoryRed?.FoodCategories?.length > 0 && (
              <View
                style={{
                  width: '100%',
                  // height: responsiveScreenHeight(6),
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {categoryView ? (
                  <FlatList
                    data={[
                      {CategoryId: 1, CategoryName: 'All'},
                      ...categoryRed?.FoodCategories,
                    ]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                      <CategoryItem
                        index={index}
                        item={item}
                        setProducts={onChangeValue}
                        products={productID}
                      />
                    )}
                    keyExtractor={(item, id) => id.toString()}
                  />
                ) : (
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {[
                      {CategoryId: 1, CategoryName: 'All'},
                      ...categoryRed?.FoodCategories,
                    ].map((item, index) => (
                      <CategoryItem
                        index={index}
                        item={item}
                        setProducts={onChangeValue}
                        products={productID}
                      />
                    ))}
                  </View>
                )}
              </View>
            )}
          </>
        }
        data={dishListRed?.DishList}
        keyExtractor={(item, id) => id.toString()}
        renderItem={renderItem}
        numColumns={tablet ? 5 : 2}
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
      />
    </DrawerView>
  );
};

function mapStateToProps({otpRed, categoryRed, dishListRed}) {
  return {
    otpRed,
    categoryRed,
    dishListRed,
  };
}

export default connect(mapStateToProps, {...categoryAct, ...dishListAct})(
  memo(DashboardScreen),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
