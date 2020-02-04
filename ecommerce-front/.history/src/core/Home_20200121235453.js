import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
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
  return (
    <Layout title="Home Page" description="Node React E-commerce App"></Layout>
  );
};
export default Home;
