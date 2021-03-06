import { API } from "../config";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    dataType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    dataType: "json",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const listOrders = (userId, token) => {
  return fetch(`${API}/order/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
