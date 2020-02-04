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
