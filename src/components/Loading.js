import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ProgressView} from '@react-native-community/progress-view';

const Loading = ({width, main}) => {
  if (main) {
    return (
      <View style={{height: '100%', width:'100%', alignSelf: 'center', justifyContent:'center',alignItems:'center'}}>
        <ProgressView
          style={{width: 600, alignSelf: 'center'}}
          isIndeterminate="true"
        />
      </View>
    );
  } else {
    return (
      <ProgressView
        style={{width: width, alignSelf: 'center',}}
        isIndeterminate="true"
      />
    );
  }
};

Loading.defaultProps = {
  width: 400,
  main: false,
};
export default memo(Loading);

const styles = StyleSheet.create({});
