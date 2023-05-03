import {Platform, StyleSheet} from 'react-native';
import {palette} from '../../../constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: palette.BACKGROUND,
      paddingHorizontal: wt(7),
      paddingTop: ht(20),
    },
    tab_wrap: {
      width: '100%',
      height: ht(50),
      backgroundColor: palette.INNER_BACKGROUND,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
      marginBottom: ht(10),
    },
    tab_btn: {
      width: '33.3333%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.INNER_BACKGROUND,
    },
    tab_btn_active: {
      backgroundColor: palette.PRIMARY,
    },
    tab_btn_text: {
      color: '#ddd',
      fontSize: fs(14),
      fontWeight: '500',
    },
    tab_btn_text_active: {
      color: palette.BUTTON_TEXT,
    },
    list_wrap: {
      width: '100%',
      height: '100%',
    },
    list_item_wrap: {
      width: '100%',
      height: ht(90),
      justifyContent: 'space-between',
      paddingHorizontal: wt(10),
      backgroundColor: palette.INNER_BACKGROUND,
      borderRadius: 5,
      marginVertical: ht(10),
    },
    list_item_header: {
      width: '100%',
      height: '30%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
    },
    list_item_title_text: {
      color: palette.TEXT,
      fontSize: fs(14),
    },
    list_item_text: {
      width: '100%',
      height: '70%',
      paddingTop: ht(5),
      overflow: 'hidden',
    },
  });
};

export default style;