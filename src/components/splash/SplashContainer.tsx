import React from 'react';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {RootStackParamList} from '../../types/navigationParamsType';
import {STACK_NAME} from '../../constants/navigation';
import CustomText from '../custom-component/CustomText';
import {IMG} from '../../assets/images';
import {palette} from '../../constants/palette';
import {clearStorage, getStorage} from '../../lib/storage';
import {listStore} from '../../store/listStore';

const SplashContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const getTodoList = async () => {
    // await clearStorage();
    let list = await getStorage('list');
    if (!list) {
      list = [];
    }
    console.log(list, '이거당');
    listStore.setTodoList(list);
  };

  useFocusEffect(
    React.useCallback(() => {
      getTodoList();
      setTimeout(() => {
        navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
      }, 2000);
    }, []),
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.INNER_BACKGROUND,
      }}>
      <Image source={IMG.LOGO} style={{width: 100, height: 100}} />
      <CustomText
        style={{
          fontSize: 25,
          color: palette.PRIMARY,
          marginTop: 25,
          fontWeight: 'bold',
        }}>
        ToDo
      </CustomText>
    </View>
  );
};

export default SplashContainer;
