import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container,
  TextInput
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueRef {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, fieldName, error, defaultValue = '' } = useField(name);
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    })
  }, [registerField, fieldName]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <TextInput
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {inputValueRef.current.value = value}}
        keyboardAppearence="dark" 
        placeholderTextColor="#9C98A6" 
        {...rest} 
      />
    </Container>
  );
}

export default Input;