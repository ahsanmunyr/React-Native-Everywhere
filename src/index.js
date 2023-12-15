import {AppRegistry} from 'react-native';
import App from './PlatformDetection';
import ExtraBold from './assets/fonts/Poppins-ExtraBold.ttf';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
// Generate required css
import iconFontFeather from 'react-native-vector-icons/Fonts/Feather.ttf';
import iconFontAntDesign from 'react-native-vector-icons/Fonts/AntDesign.ttf';

const regularFontStyles = `@font-face {
  src: url(${ExtraBold});
  font-family: 'Poppins-ExtraBold';
}`;

const regularFontFeather = `@font-face {
  src: url(${iconFontFeather});
  font-family: "Feather";
}`;

const regularFontAntDesign= `@font-face {
  src: url(${iconFontAntDesign});
  font-family: "AntDesign";
}`;
// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = regularFontStyles;
} else {
  style.appendChild(document.createTextNode(regularFontStyles));
  style.appendChild(document.createTextNode(regularFontFeather));
  style.appendChild(document.createTextNode(regularFontAntDesign));

}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
