import React, { useState, useEffect } from "react";
import { getCategories } from "./apiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false
  });
  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) console.log(data.error);
      else {
        setData({ ...data, categories: data });
      }
    });
  };
  useEffect(() => {
    loadCategories();
  }, []);
  const { categories, category, search, results, searched } = data;
  const searchForm = () => (
    <span className="input-group-text">
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <select className="btn mr-2" onChange={handleChange("category")}>
            Categories
          </select>
        </div>
        <form onSubmit={searchSubmit}>
          <input
            type="search"
            className="form-control"
            onChange={handleChange("search")}
            placeholder="Search by Name"
          ></input>
        </form>
      </div>
    </span>
  );
  const searchSubmit = () => {};
  const handleChange = () => {};
  return (
    <div>
      <div className="container">{searchForm()}</div>
    </div>
  );
};
export default Search;
