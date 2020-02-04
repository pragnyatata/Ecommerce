import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: ""
  });
  return (
    <div>
      <h2>Search bar</h2>
    </div>
  );
};
export default Search;
