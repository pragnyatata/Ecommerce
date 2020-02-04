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
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
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
      console.log(data.data);
      if (data.error) setError(data.error);
      else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  const loadMore = () => {
    let toSkip = skip + limit;
    getFilteredProducts(toSkip, limit, myfilters.filters).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load more
        </button>
      )
    );
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
            {filteredResults.map((product, i) => (
              <Card key={i} product={product}></Card>
            ))}
          </div>
          <hr />
          {loadMoreButton()}
        </div>
      </div>
    </Layout>
  );
};
export default Shop;
