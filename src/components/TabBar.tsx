import React from 'react';
import {Image, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react-lite';
import style from './tabBarStyle';
import CustomTouchable from './custom-component/CustomTouchable';
import {IMG} from '../assets/images';

const TabBar = observer(
  ({state, descriptors, navigation}: BottomTabBarProps) => {
    const styles = style();

    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <CustomTouchable
              key={route.key}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.icon}>
              {label === '목록' ? (
                <Image
                  style={styles.list_icon_img}
                  source={isFocused ? IMG.LIST_ON : IMG.LIST_OFF}
                />
              ) : (
                <Image
                  style={styles.write_icon_img}
                  source={isFocused ? IMG.WRITE_ON : IMG.WRITE_OFF}
                />
              )}
            </CustomTouchable>
          );
        })}
      </View>
    );
  },
);

export default TabBar;
