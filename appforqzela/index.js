import { AppRegistry, YellowBox } from 'react-native';
import Home from './src/screen/Home'
import { name as appName } from './app.json';
/* YellowBox.ignoreWarnings(['Accessing', 'Module RCTImageLoader']) */
AppRegistry.registerComponent(appName, () => Home);
