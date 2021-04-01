import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import { InputProps } from '../../interfaces';

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
          />
        </div>
      </Container>
      {error && <div style={{ color: 'red', fontSize: 10 }}>{error} </div>}
    </>
  );
};

export default Input;
