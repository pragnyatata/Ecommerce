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
    .catch(err => console.log(err));
};
export const signin = user => {
  return fetch(`${API}/signin`, {
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
    .catch(err => console.log(err));
};
export const authenticate = (data, next) => {
  if (typeof window !== "undefined")
    localStorage.setItem("jwt", JSON.stringify(data));
  next();
};
export const signout = next => {
  if (typeof window !== "undefined") localStorage.removeItem("jwt");
  next();
};
