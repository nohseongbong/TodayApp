import {TextProps, Text, StyleSheet, Platform} from 'react-native';
import {observer} from 'mobx-react-lite';
import {fs} from '../../lib/responsiveSize';

interface Props extends TextProps {
  style?: object;
  children: React.ReactNode;
}

const CustomText = observer(({children, style, ...props}: Props) => {
  const styles = StyleSheet.create({
    text: {
      color: '#000',
      fontSize: fs(12),
      maxWidth: '100%',
      lineHeight: 24,
    },
  });

  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={1}
      ellipsizeMode="tail"
      {...props}>
      {children}
    </Text>
  );
});

export default CustomText;
