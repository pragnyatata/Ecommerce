import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);
  const loadProductBySell = () => {
    getProducts("sold").then(data => {
      if (data.error) setError(data.error);
      else {
        setProductsBySell(data);
      }
    });
  };
  const loadProductByArrival = () => {
    getProducts("createdAt").then(data => {
      if (data.error) setError(data.error);
      else {
        setProductsByArrival(data);
      }
    });
  };
  useEffect(() => {
    loadProductByArrival();
    loadProductBySell();
  }, []);
  return (
    <Layout
      title="Home Page"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <Search />
      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <Card key={i} product={product}></Card>
        ))}
      </div>{" "}
      <h2 className="mb-4">Latest Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product}></Card>
        ))}
      </div>
    </Layout>
  );
};
export default Home;
