import React from 'react';
import {ScrollView, View} from 'react-native';
import CustomText from '../custom-component/CustomText';
import CustomTextInput from '../custom-component/CustomTextInput';
import {observer} from 'mobx-react-lite';
import style from './styles/todoContainerStyle';
import CustomTouchable from '../custom-component/CustomTouchable';
import {todoStore} from '../../store/todoStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigationParamsType';

const TodoContainer = observer(() => {
  const store = todoStore;
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressDeleteButton = () => {
    store.deleteTodo();
    navigation.goBack();
  };
  const onPressCompleteButton = () => {
    store.completeTodo();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.todo_wrap}>
        <CustomText style={styles.title}>{store.title}</CustomText>

        <View style={styles.filter_wrap}>
          <View style={styles.btns_wrap}>
            {store.state === '진행중' && (
              <CustomTouchable
                onPress={onPressCompleteButton}
                style={styles.btn}>
                <CustomText>완료</CustomText>
              </CustomTouchable>
            )}
            <CustomTouchable onPress={onPressDeleteButton} style={styles.btn}>
              <CustomText>삭제</CustomText>
            </CustomTouchable>
          </View>
          <CustomText
            style={[
              styles.state_text,
              store.state === '완료' && styles.state_complete,
            ]}>
            {store.state}
          </CustomText>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.todo_text}>
            <CustomText numberOfLines={10000}>{store.text}</CustomText>
          </View>
        </ScrollView>
      </View>
    </View>
  );
});

export default TodoContainer;
