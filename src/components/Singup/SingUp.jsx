import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Form from '../Form/Form';

const SingUp = () => {
  const { signUp } = useAuth();
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(signUpData);
  };

  return (
    <div>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        Sing up
      </Form>
    </div>
  );
};

export default SingUp;
