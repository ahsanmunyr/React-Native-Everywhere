import {StyleSheet, Text, View, Image} from 'react-native';
import React, {memo} from 'react';
import SearchBoxWidget from './SearchBoxWidget';
import {tab_icon, tab_icon_focus} from '../constant/icon';
import {connect} from 'react-redux';
import * as drawableWidthChange from '../store/actions/drawableBtnAct';
import {Pressable} from 'react-native-windows';
const Header = ({width, title, drawableWidthChange, drawableWidthRed}) => {
  // console.log(drawableWidthRed.width, 'ASDASDASD');

  return (
    <View
      style={{
        height: 60,
        backgroundColor: '#fafafa',
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderBottomWidth: 2,
        borderColor: '#afa7fa',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            if (drawableWidthRed.width == 200) {
              drawableWidthChange(80);
            } else {
              drawableWidthChange(200);
            }
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            backgroundColor: '#afa7fa',
            borderRadius: 100,
          }}>
          <Image source={tab_icon_focus.Menu} style={{width: 25, height: 25}} />
        </Pressable>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
          }}>
          {'   '} {title}
        </Text>
      </View>
      <View style={{borderColor: '#afa7fa', borderWidth: 2}}>
        <SearchBoxWidget />
      </View>
    </View>
  );
};

function mapStateToProps({drawableWidthRed}) {
  return {
    drawableWidthRed,
  };
}

// export default memo(Header);
export default connect(mapStateToProps, drawableWidthChange)(memo(Header));
const styles = StyleSheet.create({});
