import apiFetch from './api-fetch';

export function getProducts() {
  return apiFetch('/products').then((prod) => {
    const response = prod;
    return response;
  });
}

export function getProduct(id) {
  return apiFetch(`/products/${id}`)
    .then((prod) => {
      const product = prod;
      return product;
    })
    .catch(console.log);
}
