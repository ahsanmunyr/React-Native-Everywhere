// import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { CommonActions } from "@react-navigation/native";
// import { useDispatch } from 'react-redux';
// import Toast from "react-native-toast-message";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Alert, Platform } from "react-native";
// import { request, PERMISSIONS } from "react-native-permissions";
// import moment from "moment";

// export const genericWidth = (ratio) => scale(ratio);
// export const genericHeight = (ratio) => verticalScale(ratio);
// export const genericRatio = (ratio) => moderateScale(ratio);

// export const dispatch = useDispatch()

export const screenNavigation = (navigation, path = "", data = {}) => {
  // console.log("navigation", navigation)
  navigation.navigate(path, data);
};
export const hardScreenNavigation = (navigaiton, name = "", params = {}) =>
  navigaiton.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  );
// export const HttpToastMsg = (msg = "") => showToastMsg("info", msg);

// export function showToastMsg(type = "success", msg = "", position = "bottom") {
//   // success, error, info
//   return Toast.show({
//     type,
//     text1: msg,
//     position,
//   });
// }
export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
export const CANCEL_INDEX = 0;
export const DESTRUCTIVE_INDEX = 4;
export const BOTTOMSHEET_BUTTON = ["Cancel", "Camera", "Gallery"];

// export const openCamera = (cb) => {
//   const _platform =
//     Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
//   request(_platform).then((result) => {
//     console.log(result);
//     if (result === "granted") {
//       let options = {
//         storageOptions: {
//           skipBackup: true,
//           path: "images",
//         },
//       };
//       launchCamera(options, (response) => {
//         console.log("Response = ", response);

//         if (response.didCancel) {
//           console.log("User cancelled image picker");
//         } else if (response.error) {
//           console.log("ImagePicker Error: ", response.error);
//         } else if (response.customButton) {
//           console.log("User tapped custom button: ", response.customButton);
//           Alert(response.customButton);
//         } else {
//           const image = response.assets[0];
//           cb(image);
//         }
//       });
//     }
//   });
// };
// export const pickImageFromGallery = (cb) => {
//   let options = {
//     mediaType: "photo",
//     includeBase64: false,
//     maxHeight: 200,
//     maxWidth: 200,
//     selectionLimit: 1,
//   };
//   launchImageLibrary(options, (response) => {
//     console.log("Response = ", response);

//     if (response.didCancel) {
//       console.log("User cancelled image picker");
//     } else if (response.error) {
//       console.log("ImagePicker Error: ", response.error);
//     } else if (response.customButton) {
//       console.log("User tapped custom button: ", response.customButton);
//       Alert(response.customButton);
//     } else {
//       const source = { uri: response.uri };
//       console.log("response", JSON.stringify(response));
//       const image = response.assets[0];
//       cb(image);
//     }
//   });
// };

export const DateArray = ["Today", "7 Days", "30 Days"];

// export const dateStatusConvertToDate = (status = "Today") => {
//   const todate = moment(new Date()).format("MM/DD/YYYY");
//   const obj = {
//     Today: {
//       fromdate: moment(new Date().setDate(new Date().getDate() - 1)).format(
//         "MM/DD/YYYY"
//       ),
//       todate,
//     },
//     "7 Days": {
//       fromdate: moment(new Date().setDate(new Date().getDate() - 7)).format(
//         "MM/DD/YYYY"
//       ),
//       todate,
//     },
//     "30 Days": {
//       fromdate: moment(new Date().setDate(new Date().getDate() - 30)).format(
//         "MM/DD/YYYY"
//       ),
//       todate,
//     },
//   };
//   return obj[status] || {};
// };

export function textDotDot(mytextvar, maxlimit) {
  return mytextvar.length > maxlimit
    ? mytextvar.substring(0, maxlimit - 3) + "..."
    : mytextvar;
}
export function getRandomValueRange(min, max) {
  return Math.random() * (max - min) + min;
}
