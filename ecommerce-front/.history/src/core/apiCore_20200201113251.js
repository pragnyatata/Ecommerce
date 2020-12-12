import { API } from "../config";
import queryString from "query-string";
export const getProducts = sortBy => {
  return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
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
export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = { limit, skip, filters };
  return fetch(`${API}/products/by/search`, {
    method: "POST",
    dataType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const list = params => {
  const query = queryString.stringify(params);
  console.log(query);
  return fetch(`${API}/products/search?${query}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => console.log(err));
};
export const read = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const listRelated = productId => {
  return fetch(`${API}/products/related/${productId}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const getBraintreeClientToken = (userId, token) => {
  return fetch(`${API}/braintree/getToken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
export const processPayment = (userId, token, paymentData) => {
  return fetch(`${API}/braintree/payment/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(paymentData)
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};