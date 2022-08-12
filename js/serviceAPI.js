import { API_URI } from './const.js';

export const getGoods = id =>
  fetch(`${API_URI}/api/goods/${id ? id : '?nopage=true'}`).then(response => response.json());

export const postGoods = data =>
  fetch(`${API_URI}/api/goods`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

export const getCategory = () => fetch(`${API_URI}/api/category`).then(response => response.json());

export const deleteProduct = id =>
  fetch(`${API_URI}/api/goods/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  }).then(response => response.json());
