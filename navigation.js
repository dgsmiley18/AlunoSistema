import { createStackNavigator } from 'react-navigation-stack';
import InputScreen from './InputScreen';

const AppNavigator = createStackNavigator({
  Input: {
    screen: InputScreen,
  },
});

export default AppNavigator;
