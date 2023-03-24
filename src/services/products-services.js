import apiFetch from './api-fetch';

export function getProducts() {
  return apiFetch('/products').then((prod) => {
    const response = prod;
    return response;
  });
}
