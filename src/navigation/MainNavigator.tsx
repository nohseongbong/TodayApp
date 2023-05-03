import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME, STACK_NAME} from '../constants/navigation';
import {RootStackParamList} from '../types/navigationParamsType';
import TabNavigator from './TabNavigator';
import TodoScreen from '../screens/TodoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={STACK_NAME.TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={STACK_NAME.TAB} component={TabNavigator} />
      <Stack.Screen name={SCREEN_NAME.TODO} component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
