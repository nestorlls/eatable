import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import UpdatePage from './UpdatePage';

const ProfilePage = () => {
  const [page, setPage] = useState('profile');

  function handlePage(event) {
    event.preventDefault();
    setPage(event.target.id);
    console.log(event.target);
  }

  return (
    <>
      <h2>My Profile</h2>
      {page === 'profile' && <Profile onProfile={handlePage} />}
      {page === 'update' && <UpdatePage onUpdate={handlePage} />}
    </>
  );
};

export default ProfilePage;
