import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../Pages/Search/SearchPage';

const AuthenticateApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthenticateApp;
