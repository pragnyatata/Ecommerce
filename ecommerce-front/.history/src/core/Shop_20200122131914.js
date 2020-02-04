import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import CheckBox from "./CheckBox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";
const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [filteredResults, setFilteredResults] = useState(0);
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
    loadFilteredResults(skip, limit, myfilters.filters);
  }, []);
  const newfilters = { ...myfilters };
  const handleFilters = (filters, filterBy) => {
    newfilters.filters[filterBy] = filters;
    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newfilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myfilters.filters);
    setMyfilters(newfilters);
  };
  const handlePrice = value => {
    const data = prices;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };
  const loadFilteredResults = newFilters => {
    getFilteredProducts(skip, limit, newFilters).then(data => {
      if (data.error) setError(data.error);
      else setFilteredResults(data.data);
    });
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
              prices={prices}
              handleFilters={filters => handleFilters(filters, "price")}
            ></RadioBox>
          </div>
        </div>
        <div className="col-8">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {filteredResults}
            {/* {filteredResults.map((product, i) => (
              <div className="col-6 mb-3">
                <Card key={i} product={product}></Card>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Shop;
