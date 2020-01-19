import { API } from "../config";

export const signup = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    dataType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => alert(err));
};
