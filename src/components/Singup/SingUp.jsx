import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Form from '../Form/Form';

const SingUp = () => {
  const { signUp } = useAuth();
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });
  const { statusError } = useAuth();
  const { signupError } = statusError;

  let data, emailError, passwordError;
  if (signupError.message) {
    data = JSON.parse(signupError.message);
    emailError = data.errors.email.join(' ');
    passwordError = data?.errors?.password.join(' ');
  }

  console.log(emailError, passwordError);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(signUpData);
  };

  return (
    <>
      <Form
        onChange={handleChange}
        onSubmit={handleSubmit}
        email={emailError}
        password={passwordError}>
        Sing up
      </Form>
    </>
  );
};

export default SingUp;
