import {Platform, StyleSheet} from 'react-native';
import {palette} from '../../../constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.BACKGROUND,
      paddingHorizontal: wt(7),
      paddingVertical: ht(20),
    },
    todo_wrap: {
      width: '100%',
      height: '98%',
      backgroundColor: palette.INNER_BACKGROUND,
      borderRadius: 5,
    },
    title: {
      color: colors.TEXT,
      fontSize: fs(16),
      fontWeight: 'bold',
      paddingHorizontal: wt(20),
      paddingVertical: ht(15),
    },
    filter_wrap: {
      width: '100%',
      height: ht(68),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 8,
      borderBottomWidth: 8,
      borderColor: colors.BACKGROUND,
      paddingRight: wt(20),
      paddingLeft: wt(5),
    },
    btns_wrap: {
      width: '70%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    btn: {
      width: wt(50),
      height: ht(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    state_text: {
      fontSize: fs(15),
      fontWeight: 'bold',
    },
    todo_text: {
      width: '100%',
      height: '100%',
      paddingVertical: ht(20),
    },
    scroll: {
      paddingHorizontal: wt(20),
    },
    state_complete: {
      color: colors.COMPLETE,
    },
    state_deleted: {
      color: colors.DELETED,
    },
  });
};

export default style;
