import React, { useState } from 'react';
import { login } from '../../services/auth-services';
import Input from '../Input/Input';
import { StyledButton, StyledForm } from '../Form/FormUI';
import Form from '../Form/Form';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginData);
  };

  return (
    <div>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        Login
      </Form>
    </div>
  );
};

export default Login;
