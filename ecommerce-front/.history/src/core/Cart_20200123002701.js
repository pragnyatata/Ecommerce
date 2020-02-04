import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import { getCart } from "./cartHelpers";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getCart());
  }, []);
  return (
    <Layout
      title="Home Page"
      description="Node React E-commerce App"
      className="container-fluid"
    ></Layout>
  );
};
export default Cart;
