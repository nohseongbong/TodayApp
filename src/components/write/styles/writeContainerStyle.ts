import {Platform, StyleSheet} from 'react-native';
import {palette} from '../../../constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    scroll: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.BACKGROUND,
    },
    container: {
      width: '100%',
      height: ht(700),
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.BACKGROUND,
      paddingHorizontal: wt(7),
      paddingVertical: ht(20),
    },
    title_input_wrap: {
      width: '100%',
      height: ht(50),
      backgroundColor: colors.INNER_BACKGROUND,
      borderRadius: 5,
      borderWidth: 0,
    },
    content_wrap: {
      width: '100%',
      paddingVertical: 10,
      backgroundColor: colors.INNER_BACKGROUND,
      borderRadius: 5,
    },
    content_input: {
      width: '100%',
      height: ht(480),
      borderRadius: 5,
      borderWidth: 0,
      textAlignVertical: 'top',
    },
    write_btn: {
      width: '100%',
      height: ht(50),
      maxWidth: wt(600),
      backgroundColor: colors.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    write_btn_text: {
      color: colors.BUTTON_TEXT,
      fontSize: fs(15),
      fontWeight: 'bold',
    },
  });
};

export default style;
