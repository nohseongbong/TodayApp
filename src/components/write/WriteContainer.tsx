import React from 'react';
import {View} from 'react-native';
import CustomText from '../custom-component/CustomText';
import style from './styles/writeContainerStyle';
import CustomTextInput from '../custom-component/CustomTextInput';
import {writeStore} from '../../store/writeStore';
import {observer} from 'mobx-react-lite';
import CustomTouchable from '../custom-component/CustomTouchable';

const WriteContainer = observer(() => {
  const store = writeStore;
  const styles = style();
  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="제목을 입력해 주세요.(최대 15자)"
        textContentType="name"
        maxLength={15}
        style={styles.title_input_wrap}
        value={store.titleText}
        onChangeText={store.setTitleText}
      />
      <View style={styles.content_wrap}>
        <CustomTextInput
          placeholder="할 일을 적어주세요. (최대 500)"
          multiline
          maxLength={500}
          numberOfLines={15}
          style={styles.content_input}
          value={store.contentText}
          onChangeText={store.setContentText}
        />
      </View>

      <CustomTouchable style={styles.write_btn}>
        <CustomText style={styles.write_btn_text}>작성완료</CustomText>
      </CustomTouchable>
    </View>
  );
});

export default WriteContainer;
