import React, { useState } from 'react';
import Input from '../Input/Input';
import { StyledButton, StyledForm } from './LoginUI';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <StyledForm action=''>
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
          name={'email'}
          id={'email'}
          type={'email'}
          placeholder='********'
          onChange={handleChange}
        />
        <StyledButton type='submit'>Login</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Login;
