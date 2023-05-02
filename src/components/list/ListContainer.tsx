import React, {memo} from 'react';
import {View} from 'react-native';
import CustomText from '../custom-component/CustomText';
import style from './styles/listContainerStyle';
import CustomTouchable from '../custom-component/CustomTouchable';
import {listStore} from '../../store/listStore';
import {observer} from 'mobx-react-lite';
import CustomFlatList from '../custom-component/CustomFlatList';
import {dummyData} from '../../data/testData';

const ListContainer = observer(() => {
  const store = listStore;
  const styles = style();

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

  const RenderListitem = memo(({item}: any) => {
    console.log(item, '아이템');
    return (
      <CustomTouchable style={styles.list_item_wrap}>
        <View style={styles.list_item_header}>
          <CustomText style={styles.list_item_title_text}>
            {item?.title}
          </CustomText>
          <CustomText>{item?.state}</CustomText>
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
      <CustomFlatList
        style={styles.list_wrap}
        data={dummyData()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <RenderListitem item={item} />;
        }}
      />
    </View>
  );
});

export default ListContainer;
