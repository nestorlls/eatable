import styled from '@emotion/styled';
import React from 'react'
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

const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList