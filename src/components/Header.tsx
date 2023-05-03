import {Image, View} from 'react-native';
import CustomTouchable from './custom-component/CustomTouchable';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigationParamsType';
import style from './headerStyle';
import {IMG} from '../assets/images';

const Header = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <CustomTouchable style={styles.back_btn} onPress={onPressBackButton}>
        <Image style={styles.back_img} source={IMG.BACK} />
      </CustomTouchable>
    </View>
  );
};
export default Header;
