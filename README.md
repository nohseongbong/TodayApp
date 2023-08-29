# TodayApp

## 프로젝트 소개
fastlane, code push를 사용하기 위해 만든 프로젝트


## Code Push 설정



1. AppCenter cli 설치

```
npm install -g appcenter-cli
```


2. appcenter cli 로그인

```
appcenter login
```

명령어 실행하면 appcenter 홈페이지가 열림
계정이 없으면 계정 생성 후 로그인

로그인 후 토큰값을 복사하라는 화면이 나오는데
복사한 토큰 값을 cli 에 입력 
로그인 후 닉네임을 입력하라는 창이 나오는데 회사명이나 개인이면 개인 이니셜 같은 걸 추천



3. appcenter 콘솔에 앱 등록

```
appcenter apps create -d {앱 이름} -o {os} -p {플랫폼 타입}
```
예시)
1) appcenter apps create -d appName_android -o Android -p React-Native
2) appcenter apps create -d appName_ios -o iOS -p React-Nativ


4. 등록된 앱의 Staging, Production 키 등록

```
appcenter codepush deployment add -a {user name}/{앱 이름} {모드(Staging or Production)
```

예시)
1) appcenter codepush deployment add -a nsb/appName_android Staging
2) appcenter codepush deployment add -a nsb/appName_android Production
3) appcenter codepush deployment add -a nsb/appName_ios Staging
4) appcenter codepush deployment add -a nsb/appName_ios Production


5. 프로젝트에 패키지 설치

```
npm install react-native-code-push
cd ios && pod install
```

6. iOS 설정

밑에 환경 설정은 react-native config을 이용해서 .env 설정 가능

```
//info.plist
<key>CodePushDeploymentKey</key>
<string>${CODEPUSH_KEY}</string>
```


```
//AppDelegate.m.m
#import <CodePush/CodePush.h>

//return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
return [CodePush bundleURL];

```

7. 안드로이드 설정


```
//settings.gradle
include ':app', ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
```




```
//MainApplication.java
import com.microsoft.codepush.react.CodePush;

...

private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        ...
        
        //이거 추가
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
      };
```



밑에도 환경변수를 이용해 빌드 타입별 key를 바꿔주는 방법이다.
react native config를 이용하면 된다 사용법은 밑에서 알려주겠다.

```
//android/app/build.gradle 
buildTypes {
   debug {
      ...
      resValue "string", "CODE_PUSH_KEY", project.env.get("CODE_PUSH_ANDROID_STAGING")
   }
   release {
      ...
      resValue "string", "CODE_PUSH_KEY", project.env.get("CODE_PUSH_ANDROID_PRODUCTION")
   }
   releaseStaging {
      initWith release
      resValue "string", "CODE_PUSH_KEY", project.env.get("CODE_PUSH_ANDROID_STAGING")
      matchingFallbacks = ['release']
   }
}

....

apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"

```

App.tsx 적용방법

```
import CodePush from 'react-native-code-push';
const App = () => {
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
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
```



## react-native config 세팅 및 사용방법

Develop (개발계)
Stage (검증계)
Product (운영계)

.env 파일 작성

```
npm install react-native-config
cd ios && pod install

```


1. Android 설정

android/app/build.gradle
만약 .env 파일 하나만 이용하면 폴더 경로에 env/는 빼고 진행
```
apply plugin: "com.android.application"

project.ext.envConfigFiles = [
    developdebug: "env/.env.develop",
    developrelease: "env/.env.develop", 
    stagedebug: "env/.env.stage",
    stagerelease: "env/.env.stage",
    productdebug: "env/.env.product",    
    productrelease: "env/.env.product",
    anothercustombuild: ".env",
]

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"

//사용법
defaultConfig {
      applicationId project.env.get("APP_ID")
      minSdkVersion rootProject.ext.minSdkVersion
      targetSdkVersion rootProject.ext.targetSdkVersion
      versionCode project.env.get("BUILD_VERSION").toInteger()
      versionName project.env.get("APP_VERSION")
      //아까위에 빌드타입 별로 키를 생성하던 방법도 가능
      resValue "string", "build_config_package", project.env.get("APP_ID")
}

```


2. iOS 설정

참고 자료 : https://sodevly.github.io/react-native-env/

2-1. 우선 프로젝트폴더를 xcode로 연 후 프로젝트 폴더 우클릭 New File.. 생성
2-2  ConfigurationSettings File 선택
2-3 생성한 Config.xcconfig 파일에 아래 소스를 추가

```
#include? "tmp.xcconfig"
```

2-4 info > configurations에서 Debug/Release모드에 Configuration Setting 파일을 적용해줍니다.
2-5 
Product > Scheme > New Scheme... 메뉴를 통해 Scheme를 생성합니다.
Name : Product, Stage, Develop 3개를 생성합니다.


2-6 생성 후 Product Scheme 선택 > Edit Scheme... > Build > Pre-actions > New Run Script Action를 선택합니다.
2-7 그리고 env파일 복사 및 tmp.xcconfig파일 생성하는 소스를 추가합니다.

```
# replace .env.product for your file
cp "${PROJECT_DIR}/../env/.env.product" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"

```
2-8 나머지 Scheme에도 Build > Pre-actions > New Run Script Action을 추가해줍니다.
2-9 사용법은 
```
 <key>CFBundleDisplayName</key>
    <string>${APP_NAME}</string>
    <key>CFBundleIdentifier</key>
    <string>${APP_ID}</string>
    <key>CFBundleShortVersionString</key>
    <string>${APP_VERSION}</string>
    <key>CFBundleVersion</key>
    <string>${BUILD_VERSION}</string>
```
이런식으로 사용가능


추가로 아카이브시 추가 설정이 필요
참고 사이트 : https://ios-development.tistory.com/660

2-10 xcode에서 사이트 메뉴 Project 선택 info tab 이동
2-11 Configurations 에 stage, product 용으로 Debug, Release 각각 생성
2-12 edit scheme 으로 이동 후 Build Configuration 변경






