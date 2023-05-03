import {StyleSheet} from 'react-native';
import {palette} from '../constants/palette';
import {fs, ht, wt} from '../lib/responsiveSize';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: ht(60),
      alignItems: 'center',
      backgroundColor: colors.INNER_BACKGROUND,
      overflow: 'hidden',
    },
    icon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    list_icon_img: {
      width: wt(26),
      height: ht(26),
    },
    write_icon_img: {
      width: wt(23),
      height: ht(23),
    },
    icon_text: {
      fontWeight: '600',
      textAlign: 'center',
      fontSize: fs(12),
      marginTop: 2,
      textAlignVertical: 'center',
    },
  });
};

export default style;
