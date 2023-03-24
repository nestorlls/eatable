import React from 'react';
import { Route, Routes } from 'react-router';
import SearchPage from '../Pages/SearchPage';

const AuthenticateApp = () => {
  return (
    <div>
      <Routes>
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default AuthenticateApp;
