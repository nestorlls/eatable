import styled from '@emotion/styled';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { colors } from '../../styles';
import { InputCont } from './Price';

const StyleInput = styled.input`
  padding: 8px;
  background-color: ${colors.gray.medium};
  border: none;
  padding: 8px 8px 8px 45px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.gray.dark};
  }

  &::placeholder {
    color: ${colors.gray.dark};
  }
`;

const Icon = styled(BsSearch)`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.black};
  opacity: 0.7;
`;

const SearchInput = ({ onHandleChange }) => {
  return (
    <InputCont style={{ width: '100%' }}>
      <Icon />
      <StyleInput onChange={onHandleChange} placeholder='Search' />
    </InputCont>
  );
};

export default SearchInput;
