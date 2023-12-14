import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
  } from "react-native";
  import React, { memo, useCallback, useMemo, useState } from "react";
  import { commonStyles } from "../constant/theme";
//   import { genericRatio } from "../helper/helper";
//   import { Feather } from "../constant/icon";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
  
  const TextInputLogin = ({
    IconView,
    placeholderText,
    getValueCB,
    value,
    isPasswordFields,
  }) => {
    const [textVisibilty, setTextVisibility] = useState(true);
    const toggleDisplayText = useMemo(() => {
      return textVisibilty;
    }, [textVisibilty]);
    const textVisibiltyToggle = useCallback((val) => setTextVisibility(val), []);

  
    return (
      <View style={[commonStyles.rowDirection, styles.container]}>
        <View style={[commonStyles.center, styles.iconContainer]}>
          {IconView}
        </View>
        <View style={[commonStyles.fillFullScreen]}>
          <TextInput
            style={[styles.textInputContainr]}
            placeholder={placeholderText}
            onChangeText={getValueCB}
            defaultValue={value}
            secureTextEntry={isPasswordFields && toggleDisplayText}
          />
        </View>
        {/* <ShowTogglePasswordSwicthView /> */}
      </View>
    );
  };
  TextInputLogin.defaultProps = {
    IconView: <View />,
    showpasswordToggles: false,
    isPasswordFields: false,
    placeholderText: "",
    getValueCB: () => {},
    value: "",
  };
  export default memo(TextInputLogin);
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: "#F9FAFB",
    //   borderWidth: 1,
      borderBottomWidth: 2,
      borderColor: "#D1D5DB",
    //   borderRadius: 8,
      marginVertical: 6
    },
    iconContainer: {
      // padding: 10,
      paddingHorizontal: 10,
    },
    textInputContainr: {
      height: responsiveHeight(7),
      padding: 0,
      paddingLeft: 10,
      // borderRadius: 8,
    },
  });
  