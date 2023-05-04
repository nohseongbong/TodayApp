import {observer} from 'mobx-react-lite';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import CodePush from 'react-native-code-push';
const App = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미
  updateDialog: false,
  // 업데이트를 할지 안할지 여부에 대한 노출 (잠수함 패치의 경우 false)
  installMode: CodePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CodePush(codePushOptions)(App);
