import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
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
    <Layout title="Home Page" description="Node React E-commerce App">
      {productsByArrival}
      {/* <h2 className="mb-4">Best Sellers</h2>
      {productsBySell.map((product, i) => (
        <Card key={i} product={product}></Card>
      ))}
      <h2 className="mb-4">New Arrivals</h2>
      {productsByArrival.map((product, i) => (
        <Card key={i} product={product}></Card>
      ))} */}
    </Layout>
  );
};
export default Home;
