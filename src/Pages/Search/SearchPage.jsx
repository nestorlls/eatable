import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import { BsSearch } from 'react-icons/bs';
import { getProducts } from '../../services/products-services';
import ProductList from './ProductList';
import styled from '@emotion/styled';
import CategoryList from './CategoryList';
import Price from './Price';

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

function filterByCategory(products, category) {
  if (category === '') return products;

  const byCategory = products.filter((product) =>
    product.category === category ? product : null
  );

  return byCategory;
}

function filterProducts(products, filter) {
  const { name, category, price } = filter;

  const filteredByName = filterByName(products, name);
  const filteredByCategory = filterByCategory(filteredByName, category);
  return filteredByCategory;
}

function uniqueCategories(products) {
  const arrayCategories = products.map((prod) => prod.category);

  if (arrayCategories.length === 0) [];

  const categories = new Set();
  for (const cagetory of arrayCategories) {
    categories.add(cagetory);
  }

  return [...categories];
}

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    category: '',
    price: { min: 0, max: Infinity },
  });

  // unique categories
  const uniqCategories = uniqueCategories(products);

  // products filtered
  const filteredProducts = filterProducts(products, filter);

  function handleChange(event) {
    setFilter({
      ...filter,
      name: event.target.value,
    });
  }

  const handleCagetory = (event) => {
    setFilter({
      ...filter,
      category: event.target.id,
    });
  };

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <BsSearch />
      <Input onChange={handleChange} />
      <CategoryList uniqData={uniqCategories} onGetCategory={handleCagetory} />
      <Price />
      <Container>
        <ProductList products={filteredProducts} />
      </Container>
    </div>
  );
};

export default SearchPage;
