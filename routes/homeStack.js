import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import DailyTasksScreen from '../screens/dailyTasksScreen';
import TaskDescriptionScreen from '../screens/taskDescriptionScreen';

const screens = {

  SplashScreen: {
    screen: SplashScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  DailyTasksScreen: {
    screen: DailyTasksScreen,
  },
  TaskDescriptionScreen: {
    screen: TaskDescriptionScreen,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#111',
    headerShown: false,

    // headerStyle: {backgroundColor: '#0090FF'},
  },
});

export default createAppContainer(HomeStack);
