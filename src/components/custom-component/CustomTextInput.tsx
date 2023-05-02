import React from 'react';
import {TextInputProps, TextInput, StyleSheet} from 'react-native';
import {wt} from '../../lib/responsiveSize';

interface Props extends TextInputProps {
  style?: object;
  refProp?: React.RefObject<TextInput>;
}

const CustomTextInput = ({style, refProp, ...props}: Props) => {
  const styles = StyleSheet.create({
    input: {
      color: '#000',
      borderWidth: 1,
      borderRadius: 2,
      paddingHorizontal: wt(10),
    },
  });

  return (
    <TextInput
      ref={refProp}
      placeholderTextColor={'#757779'}
      style={[styles.input, style]}
      {...props}
    />
  );
};
export default CustomTextInput;
