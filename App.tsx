import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {listStore} from './src/store/listStore';
import {spy} from 'mobx';
import {createMobxDebugger} from 'mobx-flipper';

const App = () => {
  spy(createMobxDebugger(listStore));
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
