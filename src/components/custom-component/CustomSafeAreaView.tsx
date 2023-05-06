import {SafeAreaView as RNSafe, Platform, StyleSheet} from 'react-native';
import {SafeAreaView as ContextSafe} from 'react-native-safe-area-context';

interface Props {
  style?: object;
  children: React.ReactNode;
}

const CustomSafeAreaView = ({children, style, ...props}: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

  return (
    <>
      {Platform.OS === 'android' ? (
        <ContextSafe style={[styles.container, style]} {...props}>
          {children}
        </ContextSafe>
      ) : (
        <RNSafe style={[styles.container, style]} {...props}>
          {children}
        </RNSafe>
      )}
    </>
  );
};

export default CustomSafeAreaView;
