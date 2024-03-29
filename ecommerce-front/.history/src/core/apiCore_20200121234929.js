import { API } from "../config";

export const getProducts = sortBy => {
  return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};
