/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {registerRootComponent} from 'expo';
import {name as appName} from './app.json';
import App from './App';

if (Platform.OS == 'android') {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
