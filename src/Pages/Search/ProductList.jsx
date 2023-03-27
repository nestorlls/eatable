import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Product from './Product';

const StyledProductList = styled.div`
  display: grid;
  grid-row-gap: 75px;
  grid-column-gap: 10px;
  margin-bottom: 70px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  a {
    text-decoration: none;
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
