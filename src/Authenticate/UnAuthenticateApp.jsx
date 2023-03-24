import React, { useState } from 'react';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import eatable from '../assets/icons/eatable.svg';
import Login from '../components/Login/Login';
import SingUp from '../components/Singup/SingUp';
import { Container, Eatable, Nav, Paragraph, StyledLink } from './Ui';

const UnAuthenticateApp = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleClick = (e) => {
    e.precentDefault();
  };

  const isActive = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <Container>
      <Eatable>
        <img src={eatable} alt='Eatable' style={{ width: '200px' }} />
        <Paragraph>Foot for Everyone</Paragraph>
        <Nav>
          <Nav style={{ position: 'absolute', top: '40px' }}>
            <NavLink style={StyledLink} to='/login' className={isActive}>
              Login
            </NavLink>
            <NavLink style={StyledLink} to='/signup' className={isActive}>
              Sign up
            </NavLink>
          </Nav>
        </Nav>
      </Eatable>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SingUp />} />
      </Routes>
    </Container>
  );
};

export default UnAuthenticateApp;
