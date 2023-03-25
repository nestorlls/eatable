import React, { useState } from 'react';
import eatable from '../assets/icons/eatable.svg';
import Login from '../components/Login/Login';
import SingUp from '../components/Singup/SingUp';
import { Container, Eatable, Nav, Paragraph, StyledLink } from './Ui';

const UnAuthenticateApp = () => {
  const [active, setActive] = useState('login');

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const inLogin = active === 'login' ? 'active' : '';
  const isSignup = active === 'signup' ? 'active' : '';
  
  return (
    <Container>
      <Eatable>
        <img src={eatable} alt='Eatable' style={{ width: '200px' }} />
        <Paragraph>Foot for Everyone</Paragraph>
        <Nav>
          <Nav style={{ position: 'absolute', top: '40px' }}>
            <StyledLink className={inLogin} id={'login'} onClick={handleClick}>
              Login
            </StyledLink>
            <StyledLink
              className={isSignup}
              id={'signup'}
              onClick={handleClick}
            >
              Sign up
            </StyledLink>
          </Nav>
        </Nav>
      </Eatable>
      {active === 'login' ? <Login /> : <SingUp />}
    </Container>
  );
};

export default UnAuthenticateApp;
