import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Input from '../Input/Input';
import { StyledButton, StyledForm } from './FormUI';

const Form = ({ onChange, onSubmit, children }) => {
  const { errorLogin } = useAuth();
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        label={'Email Address'}
        name={'email'}
        id={'email'}
        type={'email'}
        placeholder='example@mail.com'
        onChange={onChange}
      />
      <Input
        label={'Password'}
        name={'password'}
        id={'password'}
        type={'password'}
        placeholder='********'
        onChange={onChange}
      />
      <span>{errorLogin.message}</span>
      <StyledButton type='submit'>{children}</StyledButton>
    </StyledForm>
  );
};

export default Form;
