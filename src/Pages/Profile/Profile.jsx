import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Form/FormUI';
import Input from '../../components/Input/Input';
import { useAuth } from '../../context/AuthContext';
import { colors, typography } from '../../styles';

const UserDataDiv = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 14px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  padding: 2px;

  h3 {
    color: ${colors.black};
    font-size: ${typography.text.lg};
    font-weight: 500;
  }
`;

const Name = styled.p`
  ${typography.head.sm};
  color: ${colors.black};
  letter-spacing: 0.5px;
`;

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
