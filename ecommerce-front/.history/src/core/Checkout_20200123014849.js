import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Checkout = ({ products }) => {
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * currentValue.price;
    }, 0);
  };
  return (
    <div>
      <h2> {`Total: ${getTotal()}`}</h2>
    </div>
  );
};
export default Checkout;
