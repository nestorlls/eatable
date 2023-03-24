import React, { useState } from 'react';
import { login } from '../../services/auth-services';
import Input from '../Input/Input';
import { StyledButton, StyledForm } from './LoginUI';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label={'Email Address'}
          name={'email'}
          id={'email'}
          type={'email'}
          placeholder='example@mail.com'
          onChange={handleChange}
        />
        <Input
          label={'Password'}
          name={'password'}
          id={'password'}
          type={'password'}
          placeholder='********'
          onChange={handleChange}
        />
        <StyledButton type='submit'>Login</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Login;
