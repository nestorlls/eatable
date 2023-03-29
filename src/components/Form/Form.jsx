import React from 'react';
import Input from '../Input/Input';
import { StyledButton, StyledForm } from './FormUI';

const Form = ({
  onChange,
  onSubmit,
  children,
  page,
  loginError,
  email,
  password,
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        label={'Email Address'}
        name={'email'}
        id={'email'}
        type={'email'}
        placeholder='example@mail.com'
        onChange={onChange}
        error={email}
      />
      <Input
        label={'Password'}
        name={'password'}
        id={'password'}
        type={'password'}
        placeholder='********'
        onChange={onChange}
        error={password}
      />
      <StyledButton type='submit' style={{ marginTop: '130px' }}>
        {children}
      </StyledButton>
      {page && <span>{loginError}</span>}
    </StyledForm>
  );
};

export default Form;
