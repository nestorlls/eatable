import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../../styles';

const Categories = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 40px 20px 0;
  /* overflow: hidden; */
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: ${colors.gray.medium};
  color: ${colors.gray.dark};
`;

const CategoryList = ({ uniqData, onGetCategory }) => {
  return (
    <Categories onClick={onGetCategory}>
      {uniqData.map((category, index) => (
        <Button key={index} id={category}>
          {category}
        </Button>
      ))}
    </Categories>
  );
};

export default CategoryList;
