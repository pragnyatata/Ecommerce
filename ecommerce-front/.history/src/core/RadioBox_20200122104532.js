import React, { useState, useEffect, Fragment } from "react";

const RadioBox = ({ prices }) => {
  const [value, setValue] = useState(0);
  const handleChange = () => {};
  return prices.map((p, i) => (
    <div key={i}>
      <input
        value={`${p._id}`}
        onChange={handleChange()}
        type="radio"
        className="mr-2 ml-2"
      ></input>
      <label className="form-check-label">{p.name}</label>
    </div>
  ));
};
export default RadioBox;
