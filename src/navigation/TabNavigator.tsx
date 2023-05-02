import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigationParamsType';
import MainScreen from '../screens/MainScreen';
import {SCREEN_NAME} from '../constants/navigation';
import CreateScreen from '../screens/CreateScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.MAIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={SCREEN_NAME.MAIN}
        component={MainScreen}
        options={{title: '메인'}}
      />
      <Tab.Screen
        name={SCREEN_NAME.CREATE}
        component={CreateScreen}
        options={{title: '생성'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
