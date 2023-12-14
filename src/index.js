import {AppRegistry} from 'react-native';
import App from './PlatformDetection';
import ExtraBold from './assets/fonts/Poppins-ExtraBold.ttf';

const regularFontStyles = `@font-face {
  src: url(${ExtraBold});
  font-family: 'Poppins-ExtraBold';
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = regularFontStyles;
} else {
  style.appendChild(document.createTextNode(regularFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
