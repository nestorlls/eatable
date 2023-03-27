import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Product from './Product';

const breakpoints = [320, 375, 425, 768, 1024];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const StyledProductList = styled.div`
  display: grid;
  row-gap: 58px;
  ${mq[0]} {
    grid-template-columns: 260px;
  }
  ${mq[1]} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }
  ${mq[2]} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
  ${mq[3]} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
  ${mq[4]} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
  }
`;

const ProductList = ({ products, onGetID }) => {
  return (
    <StyledProductList>
      {products?.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          onClickCapture={() => onGetID(product.id)}
        >
          <Product product={product} />
        </Link>
      ))}
    </StyledProductList>
  );
};

export default ProductList;
