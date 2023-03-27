import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../Pages/Search/SearchPage';
import Navitagate from '../components/Nav/Nav';
import ProfilePage from '../Pages/Profile/ProfilePage';
import UpdatePage from '../Pages/Profile/UpdatePage';
import ShowDish from '../Pages/ShowDish/ShowDish';

const AuthenticateApp = () => {
  const [id, setID] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage onGetID={setID} />} />
          <Route path='/products/:id' element={<ShowDish productID={ id} />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profile/update' element={<UpdatePage />} />
        </Routes>
        <Navitagate />
      </BrowserRouter>
    </>
  );
};

export default AuthenticateApp;
