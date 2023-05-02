import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigationParamsType';
import ListScreen from '../screens/ListScreen';
import WriteScreen from '../screens/WriteScreen';
import {SCREEN_NAME} from '../constants/navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.LIST}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={SCREEN_NAME.LIST}
        component={ListScreen}
        options={{title: '목록'}}
      />
      <Tab.Screen
        name={SCREEN_NAME.WRITE}
        component={WriteScreen}
        options={{title: '작성'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
