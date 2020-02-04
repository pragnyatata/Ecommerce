import React, { useState, useEffect } from "react";
import Layout from "./Layout";

const Product = props => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const loadSingleProduct = productId => {
    read().then(data => {
      if (data.error) setError(data.error);
      else setProduct(data);
    });
  };
  useEffect =
    (() => {
      const productId = props.match.params.productId;
      loadSingleProduct(productId);
    },
    []);
  return (
    <Layout
      title="Home Page"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <p>Product Page</p>
    </Layout>
  );
};
export default Product;
