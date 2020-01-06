import { createAppContainer} from 'react-navigation';
import {  createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';

const navigator = createStackNavigator(
{
  Home: {screen:HomeScreen},
  Components : {screen:ComponentScreen}
}
);

export default createAppContainer(navigator);


