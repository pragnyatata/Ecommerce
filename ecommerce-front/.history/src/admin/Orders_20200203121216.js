import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders } from "./apiAdmin";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = isAuthenticated();
  const loadOrders = () => {
    listOrders(user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };
  useEffect(() => {
    loadOrders();
  }, []);
  const showOrdersLength = orders => {
    if (orders.length > 0) {
      return <h1>Total orders</h1>;
    } else {
      return <h1 className="text-danger">No orders</h1>;
    }
  };
  return (
    <Layout
      title="Orders"
      description={`G'day ${user.name}, Manage all your customers orders?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showOrdersLength}
          {JSON.stringify(orders)}
        </div>
      </div>
    </Layout>
  );
};
export default Orders;
