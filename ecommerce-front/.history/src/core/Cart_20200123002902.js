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
  const showItems = items => {
    return (
      <div>
        <h2>{`Your cart has ${items.length} items`}</h2>
      </div>
    );
  };
  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items."
      className="container-fluid"
    ></Layout>
  );
};
export default Cart;
