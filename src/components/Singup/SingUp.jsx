import React, { useState } from 'react';
import { createUser } from '../../services/user-services';
import Form from '../Form/Form';

const SingUp = () => {
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
    createUser(signUpData);
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
