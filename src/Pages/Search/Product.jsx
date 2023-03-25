import styled from '@emotion/styled';
import React from 'react';
import { colors, typography } from '../../styles';

const StyledProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  height: 212px;
  align-items: center;
  cursor: pointer;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 130px;
  height: 130px;
  top: -38px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;

const ContainerPrice = styled.div`
  ${typography.text.lg}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 8px;
  text-align: center;
  margin-top: 110px;
`;

const Product = ({ product }) => {
  return (
    <StyledProduct key={product.id}>
      <StyledImg src={product.picture_url} alt={product.name} />
      <ContainerPrice>
        <p style={{ color: `${colors.black}` }}>{product.name}</p>
        <p style={{ color: `${colors.orange}`, fontWeight: '600' }}>
          ${product.price / 100}
        </p>
      </ContainerPrice>
    </StyledProduct>
  );
};

export default Product;
