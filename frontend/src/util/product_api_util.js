import axios from 'axios';

export const fetchProducts = () => {
  return axios.get(`/api/products`);
};

export const fetchProduct = (productId) => {
  return axios.get(`/api/products/${productId}`, productId);
};

export const createProduct = (product) => {
  return axios.post(`/api/products`, product);
};

export const updateProduct = (product) => {
  return axios.patch(`/api/products/${product.id}`, product);
};

export const deleteProduct = (productId) => {
  return axios.delete(`/api/products/${productId}`, productId);
};