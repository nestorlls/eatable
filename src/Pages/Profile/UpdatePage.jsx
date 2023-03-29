import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import {
  PageName,
  UserDataDiv,
  Back,
  ProfileContainer,
  ProfileIcon,
} from './UI/ui';
import Input from '../../components/Input/Input';
import { StyledButton } from '../../components/Form/FormUI';
import { useAuth } from '../../context/AuthContext';
import { FaUserAlt } from 'react-icons/fa';

const UpdatePage = () => {
  const navigate = useNavigate();
  const { upDate, user } = useAuth();

  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });

  const { name, email, phone, address } = data;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    upDate(data);
  };
  return (
    <ProfileContainer>
      <Back>
        <Link onClick={() => navigate(-1)} id='profile'>
          <IoIosArrowBack id='profile' />
        </Link>
        <h2>My Profile</h2>
        <ProfileIcon>
          <div>
            <FaUserAlt />
          </div>
        </ProfileIcon>
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
            value={name}
            onChange={handleChange}
          />
          <Input
            label={'Email'}
            name={'email'}
            id={'email'}
            type={'email'}
            placeholder={email}
            value={email}
            onChange={handleChange}
          />
          <Input
            label={'Phone'}
            name={'phone'}
            id={'phone'}
            type={'phone'}
            placeholder={phone}
            value={phone}
            onChange={handleChange}
          />
          <Input
            label={'Address'}
            name={'address'}
            id={'address'}
            type={'address'}
            placeholder={address}
            value={address}
            onChange={handleChange}
          />
        </UserDataDiv>
        <StyledButton style={{ width: '100%', marginTop: '70px' }}>
          Update
        </StyledButton>
      </form>
    </ProfileContainer>
  );
};

export default UpdatePage;
