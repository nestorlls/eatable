import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Form/FormUI';
import { useAuth } from '../../context/AuthContext';
import { ProfileContainer, PageName, UserDataDiv, ProfileIcon } from './UI/ui';
import { FaUserAlt } from 'react-icons/fa';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { name, email, phone, address } = user;

  function handleLogOut() {
    logout();
  }

  return (
    <ProfileContainer>
      <h2>My Profile</h2>
      <ProfileIcon>
        <div>
          <FaUserAlt />
        </div>
      </ProfileIcon>
      <PageName>
        <h3>Personal details</h3>
        <Link to={'update'} id='update'>
          Change
        </Link>
      </PageName>
      <UserDataDiv>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </UserDataDiv>
      <>
        <StyledButton
          style={{ width: '100%', marginTop: '229px' }}
          onClick={handleLogOut}
        >
          log out
        </StyledButton>
      </>
    </ProfileContainer>
  );
};

export default ProfilePage;
