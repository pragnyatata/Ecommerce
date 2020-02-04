import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import { getCart, removeItem } from "./cartHelpers";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);
  const showItems = items => {
    return (
      <div>
        <h2>{`Your cart has ${items.length} items`}</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCart={false}
            cartUpdate={true}
            showRemoveProduct={true}
            setRun={setRun}
            run={run}
          ></Card>
        ))}
      </div>
    );
  };
  const noItemsMessage = () => {
    return (
      <h2>
        Your cart is empty
        <br /> <Link to="/shop">Continue Shopping</Link>
      </h2>
    );
  };
  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items."
      className="container-fluid"
    >
      <div className="row">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className="col-6">
          <Checkout products={items}></Checkout>
        </div>
      </div>
    </Layout>
  );
};
export default Cart;
