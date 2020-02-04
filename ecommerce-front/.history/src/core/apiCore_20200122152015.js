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
  const quey = queryString.stringify(params);
  return fetch(`${API}/products/search?{}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => console.log(err));
};
