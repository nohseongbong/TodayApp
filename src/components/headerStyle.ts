import {Platform, StyleSheet} from 'react-native';
import {ht, wt} from '../lib/responsiveSize';
import {palette} from '../constants/palette';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(50),
      justifyContent: 'center',
      backgroundColor: colors.INNER_BACKGROUND,
    },
    back_btn: {
      width: wt(50),
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    back_img: {
      width: wt(16),
      height: ht(18),
    },
  });
};

export default style;
