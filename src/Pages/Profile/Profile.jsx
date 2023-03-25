import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Form/FormUI';
import Input from '../../components/Input/Input';
import { useAuth } from '../../context/AuthContext';
import { Name, TitleContainer, UserDataDiv } from './UI/ui';


const Profile = ({ onProfile }) => {
  const { user } = useAuth();
  const { name, email, phone, address } = user;

  return (
    <>
      <TitleContainer>
        <h3>Personal details</h3>
        <Link to={'update'} onClick={onProfile} id='update'>
          Change
        </Link>
      </TitleContainer>
      <UserDataDiv>
        <Name>{name || 'add your name'}</Name>
        <Input value={email} readOnly />
        <Input value={phone || 'put phone number'} readOnly />
        <p>{address || 'add your address'}</p>
      </UserDataDiv>
      <>
        <StyledButton style={{ width: '100%', marginTop: '350px' }}>
          log out
        </StyledButton>
      </>
    </>
  );
};

export default Profile;
