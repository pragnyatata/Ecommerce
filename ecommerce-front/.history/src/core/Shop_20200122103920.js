import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from "./apiCore";
import CheckBox from "./CheckBox";
import RadioBox from "./RadioBox";
const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [myfilters, setMyfilters] = useState({
    filters: { category: [], price: [] }
  });
  const init = () => {
    getCategories().then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);
  const newfilters = { ...myfilters };
  const handleFilters = (filters, filterBy) => {
    newfilters.filters[filterBy] = filters;
    setMyfilters(newfilters);
  };

  return (
    <Layout
      title="Shop Page"
      description="Search and find your choice of books"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h4>Filter by categories</h4>
          <ul>
            <CheckBox
              categories={categories}
              handleFilters={filters => handleFilters(filters, "category")}
            ></CheckBox>
          </ul>
          <h4>Filter by Price Range</h4>
          <div>
            <RadioBox
              categories={categories}
              handleFilters={filters => handleFilters(filters, "price")}
            ></RadioBox>
          </div>
        </div>
        <div className="col-8"></div>
      </div>
    </Layout>
  );
};
export default Shop;
