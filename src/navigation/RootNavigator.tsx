import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import {RootStackParamList} from '../types/navigationParamsType';
import CustomSafeAreaView from '../components/custom-component/CustomSafeAreaView';
import {SCREEN_NAME, STACK_NAME} from '../constants/navigation';
import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = observer(() => {
  return (
    <CustomSafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          navigationBarColor: '#fff',
        }}
        initialRouteName={SCREEN_NAME.SPLASH}>
        <RootStack.Screen name={SCREEN_NAME.SPLASH} component={SplashScreen} />
        <RootStack.Screen name={STACK_NAME.MAIN} component={MainNavigator} />
      </RootStack.Navigator>
    </CustomSafeAreaView>
  );
});

export default RootNavigator;
