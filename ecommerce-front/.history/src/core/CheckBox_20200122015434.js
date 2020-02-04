import React from "react";

const CheckBox = ({ categories }) => {
  return categories.map((c, i) => (
    <li key={i} className="list-unstyled">
      <input type="checkbox" className="form-check-input"></input>
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};
export default CheckBox;
