import React from 'react';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {View} from 'react-native';
import {RootStackParamList} from '../../types/navigationParamsType';
import {STACK_NAME} from '../../constants/navigation';
import CustomText from '../custom-component/CustomText';

const SplashContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
      }, 2000);
    }, []),
  );

  return (
    <View>
      <CustomText>스플래시 화면</CustomText>
    </View>
  );
};

export default SplashContainer;
