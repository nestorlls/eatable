import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products-services';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import Price from './Price';
import NotFound from './NotFound';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import { Container, IconBack, IconSearch, InputContainer } from './ui';

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

const SearchPage = ({ onGetID }) => {
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

  function handleBack() {
    setFilter({
      ...filter,
      name: '',
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
    <>
      <InputContainer>
        {filteredProducts.length !== products.length ? (
          <IconBack onClick={handleBack} />
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
            nameCategory={filter.category}
          />
          <Price onGetPriceRange={handlePrice} />
          <Container>
            {filter.name && <p>Found {filteredProducts.length} results</p>}
            <ProductList products={filteredProducts} onGetID={onGetID} />
          </Container>
        </>
      )}
    </>
  );
};

export default SearchPage;
