import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../../styles';
import { AiFillDollarCircle } from 'react-icons/ai';

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;

export const InputCont = styled.div`
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 8px 8px 8px 37px;
  width: 110px;
  border-radius: 8px;
  border: 1px solid ${colors.orange};
  &:focus {
    outline: none;
    border: 1px solid ${colors.orange};
    box-shadow: 0px 1px 6px ${colors.orange};
  }

  &::placeholder {
    color: ${colors.gray.dark};
  }
`;

const IconDollar = styled(AiFillDollarCircle)`
  color: ${colors.gray.dark};
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const Price = ({ onGetPriceRange }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        margin: '30px',
      }}
    >
      <p style={{ color: `${colors.black}` }}>Price</p>
      <ContainerInput>
        <InputCont>
          <Input
            type='number'
            placeholder={'min'}
            id={'min'}
            onChange={onGetPriceRange}
          />
          <IconDollar />
        </InputCont>
        <span>-</span>
        <InputCont>
          <Input
            type='number'
            placeholder={'max'}
            id={'max'}
            onChange={onGetPriceRange}
          />
          <IconDollar />
        </InputCont>
      </ContainerInput>
    </div>
  );
};

export default Price;
