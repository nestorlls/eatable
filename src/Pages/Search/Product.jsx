import React, { useState } from 'react';
import { colors } from '../../styles';
import { ContainerPrice, StyledImg, StyledProduct } from './ui';

const Product = ({ product }) => {
  const { id, name, price, picture_url } = product;

  return (
    <StyledProduct key={id}>
      <StyledImg src={picture_url} alt={name} />
      <ContainerPrice>
        <p style={{ color: `${colors.black}` }}>{name}</p>
        <p style={{ color: `${colors.orange}` }}>${price / 100}</p>
      </ContainerPrice>
    </StyledProduct>
  );
};

export default Product;
