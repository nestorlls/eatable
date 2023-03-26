import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { PageName, UserDataDiv, Back } from './UI/ui';
import Input from '../../components/Input/Input';
import { StyledButton } from '../../components/Form/FormUI';
import { useAuth } from '../../context/AuthContext';

const UpdatePage = ({ onUpdate }) => {
  const navigate = useNavigate();
  const { upDate, user } = useAuth();
  const { name, email, phone, address } = user;

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    upDate(data);
  };
  return (
    <>
      <Back>
        <Link onClick={() => navigate(-1)} id='profile'>
          <IoIosArrowBack id='profile' />
        </Link>
        <h2>My Profile</h2>
      </Back>
      <PageName>
        <h3>Update personal details</h3>
      </PageName>
      <form onSubmit={handleSubmit}>
        <UserDataDiv>
          <Input
            label={'Name'}
            name={'name'}
            id={'name'}
            type={'name'}
            placeholder={name}
            onChange={handleChange}
          />
          <Input
            label={'Email'}
            name={'email'}
            id={'email'}
            type={'email'}
            placeholder={email}
            onChange={handleChange}
          />
          <Input
            label={'Phone'}
            name={'phone'}
            id={'phone'}
            type={'phone'}
            placeholder={phone}
            onChange={handleChange}
          />
          <Input
            label={'Address'}
            name={'address'}
            id={'address'}
            type={'address'}
            placeholder={address}
            onChange={handleChange}
          />
        </UserDataDiv>
        <StyledButton style={{ width: '100%', marginTop: '200px' }}>
          Update
        </StyledButton>
      </form>
    </>
  );
};

export default UpdatePage;
