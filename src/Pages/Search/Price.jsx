import React from 'react';
import { colors } from '../../styles';
import { ContainerInput, IconDollar, InputCont, InputMinMax } from './ui';

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
          <InputMinMax
            type='number'
            placeholder={'min'}
            id={'min'}
            onChange={onGetPriceRange}
          />
          <IconDollar />
        </InputCont>
        <span>-</span>
        <InputCont>
          <InputMinMax
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
