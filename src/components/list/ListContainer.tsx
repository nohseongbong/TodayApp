import React, {memo, useCallback, useEffect} from 'react';
import {Image, View} from 'react-native';
import CustomText from '../custom-component/CustomText';
import style from './styles/listContainerStyle';
import CustomTouchable from '../custom-component/CustomTouchable';
import {listStore} from '../../store/listStore';
import {observer} from 'mobx-react-lite';
import CustomFlatList from '../custom-component/CustomFlatList';
import {dummyData} from '../../data/testData';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigationParamsType';
import {SCREEN_NAME} from '../../constants/navigation';
import {todoStore} from '../../store/todoStore';
import {TodoType} from '../../types/todoType';
import {IMG} from '../../assets/images';

const ListContainer = observer(() => {
  const store = listStore;
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressTab = (type: string) => {
    store.setTabType(type);
  };

  const renderTabButton = (type: string) => (
    <CustomTouchable
      onPress={() => onPressTab(type)}
      style={[styles.tab_btn, store.tabType === type && styles.tab_btn_active]}>
      <CustomText
        style={[
          styles.tab_btn_text,
          store.tabType === type && styles.tab_btn_text_active,
        ]}>
        {type}
      </CustomText>
    </CustomTouchable>
  );

  const onPressListitem = useCallback((item: TodoType) => {
    navigation.navigate(SCREEN_NAME.TODO);
    todoStore.setTodo(item);
  }, []);

  const RenderListitem = memo(({item}: any) => {
    return (
      <CustomTouchable
        onPress={() => {
          onPressListitem(item);
        }}
        style={styles.list_item_wrap}>
        <View style={styles.list_item_header}>
          <CustomText style={styles.list_item_title_text}>
            {item?.title}
          </CustomText>
          {item?.state === '완료' ? (
            <Image style={styles.check_img} source={IMG.CHECK} />
          ) : (
            <CustomText
              style={item?.state === '완료' ? styles.state_complete : {}}>
              {item?.state}
            </CustomText>
          )}
        </View>
        <CustomText numberOfLines={2} style={styles.list_item_text}>
          {item?.text}
        </CustomText>
      </CustomTouchable>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.tab_wrap}>
        {renderTabButton('전체')}
        {renderTabButton('진행중')}
        {renderTabButton('완료')}
      </View>
      {store.todoList.length === 0 ? (
        <View style={styles.not_todo_wrap}>
          <CustomText style={styles.not_todo_text}>
            할 일이 없습니다 ㅠ . ㅠ
          </CustomText>
        </View>
      ) : (
        <CustomFlatList
          style={styles.list_wrap}
          data={store.todoList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <RenderListitem item={item} />;
          }}
        />
      )}
    </View>
  );
});

export default ListContainer;
