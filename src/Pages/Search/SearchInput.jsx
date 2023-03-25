import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../../styles';

const StyleInput = styled.input`
  padding: 8px;
  background-color: ${colors.gray.medium};
  border: none;
  padding: 8px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.gray.dark};
  }

  &::placeholder {
    color: ${colors.gray.dark};
  }
`;

const SearchInput = ({ onHandleChange }) => {
  return <StyleInput onChange={onHandleChange} placeholder='Search' />;
};

export default SearchInput;
