import {StyleSheet} from 'react-native';
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
      fontWeight: 'bold',
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
    state_complete: {
      color: colors.COMPLETE,
    },
    not_todo_wrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    not_todo_text: {
      color: '#949996',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: ht(60),
    },
    check_img: {
      width: wt(15),
      height: ht(15),
    },
  });
};

export default style;
