import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../Pages/Search/SearchPage';
import Navitagate from '../components/Nav/Nav';

const AuthenticateApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/profile' element={'Profile'} />
        </Routes>
        <Navitagate />
      </BrowserRouter>
    </>
  );
};

export default AuthenticateApp;
