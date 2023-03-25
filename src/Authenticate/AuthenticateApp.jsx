import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../Pages/Search/SearchPage';
import Navitagate from '../components/Nav/Nav';
import ProfilePage from '../Pages/Profile/ProfilePage';

const AuthenticateApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/profile/*' element={<ProfilePage />} />
        </Routes>
        <Navitagate />
      </BrowserRouter>
    </>
  );
};

export default AuthenticateApp;
