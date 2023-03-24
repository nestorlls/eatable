import React, { useState } from 'react';
import Form from '../Form/Form';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

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
