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
  padding: 3px 8px;
  margin: 5px 0;
  background-color: ${colors.gray.medium};
  color: ${colors.gray.dark};

  &.active {
    border-bottom: 2px solid ${colors.orange};
    color: ${colors.orange};
  }
`;

const CategoryList = ({ uniqData, onGetCategory, nameCategory }) => {
  return (
    <Categories onClick={onGetCategory}>
      {uniqData.map((category, index) => (
        <Button
          key={index}
          id={category}
          className={category === nameCategory ? 'active' : ''}
        >
          {category}
        </Button>
      ))}
    </Categories>
  );
};

export default CategoryList;
