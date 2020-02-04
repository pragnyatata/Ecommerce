import React from "react";

const CheckBox = ({ categories }) => {
  return categories.map((c, i) => (
    <li className="list-unstyled">
      <input type="checkbox" className="form-check-input"></input>
    </li>
  ));
};
export default CheckBox;
