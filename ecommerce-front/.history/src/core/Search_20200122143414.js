import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false
  });
  return (
    <div>
      <h2>Search bar</h2>
    </div>
  );
};
export default Search;
