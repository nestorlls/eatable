import React, { useState } from 'react';
import Form from '../Form/Form';
import { useAuth } from '../../context/AuthContext';

const Login = ({ page }) => {
  const { login } = useAuth();
  const { statusError } = useAuth();
  const { loginError } = statusError;

  let data, loginErrors;
  if (loginError.message) {
    data = JSON.parse(loginError.message);
    loginErrors = data.errors;
  }
  console.log(loginErrors);

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
    <>
      <Form
        onChange={handleChange}
        onSubmit={handleSubmit}
        page={page}
        loginError={loginErrors || ''}
      >
        Login
      </Form>
    </>
  );
};

export default Login;
