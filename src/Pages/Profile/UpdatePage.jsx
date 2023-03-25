import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const UpdatePage = ({ onUpdate }) => {
  return (
    <>
      <Link
        to={'profile'}
        onClick={onUpdate}
        id='profile'
        style={{ width: '100px', height: '100px', border: '1px solid black' }}
      >
        <IoIosArrowBack
          id='profile'
          style={{ width: '30px', height: '30px' }}
        />
      </Link>
      <h3>Update personal details</h3>
      <div>UpdatePage</div>
    </>
  );
};

export default UpdatePage;
