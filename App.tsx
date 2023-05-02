import {observer} from 'mobx-react-lite';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

const App = observer(() => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
