import {Alert, Linking, Platform} from 'react-native';
import VersionCheck from 'react-native-version-check';

export const checkForUpdate = async () => {
  try {
    const updateAvailable = await VersionCheck.needUpdate({
      packageName: 'com.today.todo.app',
    });
    if (!updateAvailable) {
      return;
    }
    if (updateAvailable.isNeeded) {
      const {currentVersion, latestVersion, storeUrl} = updateAvailable;
      Alert.alert(
        `최신 버전 업데이트`,
        `${latestVersion} 버전 업데이트가 필요합니다.(현재 버전 ${currentVersion})`,
        [
          {
            text: '업데이트',
            onPress: () => {
              Linking.openURL(storeUrl);
            },
          },
        ],
      );
    }
  } catch (error) {
    console.log(error);
  }
};
