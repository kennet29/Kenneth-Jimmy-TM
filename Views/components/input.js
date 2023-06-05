import React from 'react';
import { TextInput } from 'react-native-paper';

const Input = ({ label, value, onChangeText, ...rest }) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

export default Input;
