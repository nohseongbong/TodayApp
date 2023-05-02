import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK_NAME} from '../constants/navigation';
import {RootStackParamList} from '../types/navigationParamsType';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={STACK_NAME.TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={STACK_NAME.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
