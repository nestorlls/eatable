import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import { BsSearch } from 'react-icons/bs';
import { getProducts } from '../../services/products-services';
import ProductList from './ProductList';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
function filterByName(products, name) {
  if (name === '') return products;
  const byName = products.filter((product) =>
    product.name.includes(name) ? product : null
  );

  return byName;
}

function filterProducts(products, filter) {
  const { name, category, price } = filter;

  const filteredByName = filterByName(products, name);
  return filteredByName;
}

const SearchPage = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState({
    name: '',
    category: '',
    price: { min: 0, max: Infinity },
  });

  // products filtered
  const filteredProducts = filterProducts(products, filter);

  function handleChange(event) {
    setFilter({
      ...filter,
      name: event.target.value,
    });
  }

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <BsSearch />
      <Input onChange={handleChange} />
      <Container>
        <ProductList products={filteredProducts} />
      </Container>
    </div>
  );
};

export default SearchPage;
