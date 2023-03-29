import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './InputUi';

const Input = ({
  label,
  name,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <InputContainer>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        type={type}
        name={name}
        id={id || name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <span>{error}</span>
    </InputContainer>
  );
};

export default Input;
