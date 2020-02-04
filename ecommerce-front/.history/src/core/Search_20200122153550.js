import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
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
    <form onSubmit={searchSubmit}>
      <span className="input-group-text">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <select className="btn mr-2" onChange={handleChange("category")}>
              <option value="All"> Pick Category</option>
              {categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="search"
            className="form-control"
            onChange={handleChange("search")}
            placeholder="Search by Name"
          ></input>
        </div>
        <div className="btn input-group-append" style={{ border: "none" }}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );
  const searchData = () => {
    if (search) {
      list({ search: search || undefined, category: category }).then(
        response => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };
  const searchSubmit = event => {
    event.preventDefault();
    searchData();
  };
  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };
  return (
    <div>
      <div className="container mb-3">{searchForm()}</div>
      <div className="container-fluid mb-3">{searchedProducts()}</div>
    </div>
  );
};
export default Search;
