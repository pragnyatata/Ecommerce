import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from "./apiCore";
import CheckBox from "./CheckBox";
const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
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
  const handleFilters = (filters, filterBy) => {
    console.log(filters, filterBy);
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
            <CheckBox categories={categories}></CheckBox>
          </ul>
        </div>
        <div className="col-8">right</div>
      </div>
    </Layout>
  );
};
export default Shop;
