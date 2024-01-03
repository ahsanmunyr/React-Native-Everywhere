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
import {SheetManager} from 'react-native-actions-sheet';

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
  const [fields, setFields] = useState({
    products: {},
    loader: false,
    categoryView: true,
  });

  const [category, onSetCategory] = useState({});
  const [dishList, onSetDishlist] = useState([]);

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  useEffect(() => {
    if (category?.CategoryId != 1 && category.CategoryId != undefined) {
      console.log(category.CategoryId, '1');
      let dishList = dishListRed?.DishList;
      let val = dishList?.filter(
        item => item?.CategoryId === category?.CategoryId,
      );
      onSetDishlist(val);
    } else {
      onSetDishlist(dishListRed?.DishList);
    }
  }, [category, dishListRed?.DishList]);

  useEffect(() => {
    if (otpRed.hasOwnProperty('PlaceId')) {
      onChangeValue('loader', true);
      Promise.all([
        categoryAct(otpRed['PlaceId'], otpRed?.UserData['Token']),
        dishListAct(otpRed['PlaceId'], otpRed?.UserData['Token']),
      ])
        .then(res => {
          console.log(res, '========');
          onChangeValue('loader', false);
        })
        .catch(err => {
          onChangeValue('loader', false);
          console.log(err, '=======');
        });
    }
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

  function flatlistHeaderComponent() {
    return (
      <>
        <View style={styles.flatlistHeaderComponent}>
          <View style={styles.searchContainer}>
            <Icon
              name="search"
              type={Icons.Ionicons}
              color={'grey'}
              size={responsiveScreenFontSize(tablet ? 1.4 : 2.5)}
            />
            <TextInput style={styles.searchInputBox} />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterIcon}>
            <Icon
              name="filter"
              type={Icons.MaterialCommunityIcons}
              color={'white'}
              size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (categoryView) {
                onChangeValue('categoryView', false);
              } else {
                onChangeValue('categoryView', true);
              }
            }}
            style={styles.categoryViewChange}>
            <Icon
              name="view-dashboard-outline"
              type={Icons.MaterialCommunityIcons}
              color={'white'}
              size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
            />
          </TouchableOpacity>
        </View>
        {categoryRed?.FoodCategories?.length > 0 && (
          <View style={styles.flatlistContainer}>
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
                    onSetCategory={onSetCategory}
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
                    onSetCategory={onSetCategory}
                  />
                ))}
              </View>
            )}
          </View>
        )}
      </>
    );
  }

  function headerComponent() {
    return (
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="menu"
            type={Icons.Ionicons}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
          />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveScreenFontSize(tablet ? 0.8 : 1.5),
              fontFamily: 'Poppins-Medium',
            }}>
            R 659 Shahrah e Zahid
          </Text>
          <Text style={styles.locationText}>Karachi</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CartScreen')
            // SheetManager.show('example-two');
          }}
          style={styles.bagContainer}>
          <Icon
            name="bag"
            type={Icons.Ionicons}
            color={'white'}
            size={responsiveScreenFontSize(tablet ? 2 : 3.5)}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <DrawerView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      {headerComponent()}
      <FlatList
        ListHeaderComponent={flatlistHeaderComponent()}
        data={dishList}
        keyExtractor={(item, id) => id.toString()}
        renderItem={renderItem}
        numColumns={tablet ? 5 : 2}
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
    width: '5%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    width: tablet ? '85%' : '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  locationText: {
    color: 'white',
    fontSize: responsiveScreenFontSize(tablet ? 0.8 : 1.5),
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
