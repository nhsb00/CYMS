import axios from 'axios';

export const createCart = (cart) => {
    return axios.post(`/api/cart/`, cart)
};

export const fetchUserCart = user => {
  return axios.get(`/api/cart/${user}`) 
}


export const deleteCartItem = product => {
    return axios.delete(`/api/cart/${product}`)
};