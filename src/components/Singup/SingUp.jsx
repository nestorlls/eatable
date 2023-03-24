import React, { useState } from 'react';
import Form from '../Form/Form';

const SingUp = () => {
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
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        Sing up
      </Form>
    </div>
  );
};

export default SingUp;
