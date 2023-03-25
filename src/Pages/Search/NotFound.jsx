import styled from '@emotion/styled';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { colors } from '../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 80vh;
`;

const Message = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: ${colors.black};
`;

const SearchIcon = styled(BsSearch)`
  width: 100px;
  height: 100px;
`;

const NotFound = () => {
  return (
    <Container>
      <SearchIcon />
      <Message>No products found</Message>
    </Container>
  );
};

export default NotFound;
