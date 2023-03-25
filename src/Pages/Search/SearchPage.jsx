import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { getProducts } from '../../services/products-services';
import ProductList from './ProductList';
import styled from '@emotion/styled';
import CategoryList from './CategoryList';
import Price from './Price';
import NotFound from './NotFound';
import SearchInput from './SearchInput';
import { colors } from '../../styles';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconSearch = styled(BsSearch)`
  width: 20px;
  height: 20px;
  color: ${colors.black};
  opacity: 0.7;
`;

export const IconBack = styled(IoIosArrowBack)`
  width: 20px;
  height: 20px;
  color: ${colors.black};
  opacity: 0.7;
  cursor: pointer;
`;

// filter by name
function filterByName(products, name) {
  if (name === '') return products;
  const byName = products.filter((product) =>
    product.name.includes(name) ? product : null
  );

  return byName;
}

// filter by category
function filterByCategory(products, category) {
  if (category === '') return products;

  const byCategory = products.filter((product) =>
    product.category === category ? product : null
  );

  return byCategory;
}

// filter by price
function filterByPrice(products, price) {
  const { min, max } = price;
  if (max === 0) return products;
  const byPrice = products.filter((prod) =>
    prod.price >= min && prod.price <= max ? prod : null
  );

  return byPrice;
}

function filterProducts(products, filter) {
  const { name, category, price } = filter;

  const filteredByName = filterByName(products, name);
  const filteredByCategory = filterByCategory(filteredByName, category);
  const filteredByPrice = filterByPrice(filteredByCategory, price);
  return filteredByPrice;
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

  const navigate = useNavigate();

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

  const handlePrice = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setFilter({
      ...filter,
      price: { ...filter.price, [name]: +value * 100 },
    });
  };

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <InputContainer>
        {filteredProducts.length !== products.length ? (
          <IconBack onClick={() => navigate(-1)} />
        ) : (
          <IconSearch />
        )}

        <SearchInput onHandleChange={handleChange} />
      </InputContainer>
      {filteredProducts.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <CategoryList
            uniqData={uniqCategories}
            onGetCategory={handleCagetory}
          />
          <Price onGetPriceRange={handlePrice} />
          <Container>
            <ProductList products={filteredProducts} />
          </Container>
        </>
      )}
    </div>
  );
};

export default SearchPage;
