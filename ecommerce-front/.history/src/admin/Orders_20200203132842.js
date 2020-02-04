import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues } from "./apiAdmin";
import moment from "moment";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [statusValue, setStatusValue] = useState([]);
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
  const loadStatusValues = () => {
    getStatusValues(user._id, token).then(data => {
      setStatusValue(data);
    });
  };

  useEffect(() => {
    loadOrders();
    loadStatusValues();
  }, []);
  const showStatus = o => {
    return (
      <div className="form-group">
        <h3 className="mark mb-4"> Status:{o.status}</h3>
        <select
          className="form-control"
          onChange={(e) => handleStatusChange(e,o._id)}
        >
          <option>Update Status</option>
          {statusValue.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    );
  };
  const handleStatusChange = e,orderId => {
    console.log("update order status");
  };
  const showOrdersLength = () => {
    if (orders.length > 0) {
      return (
        <h1 className="text-danger display-2">Total orders {orders.length}</h1>
      );
    } else {
      return <h1 className="text-danger">No orders</h1>;
    }
  };
  const showInput = (key, value) => (
    <div className="input-group mb-2 mr-sm-2">
      <div className="input-group-prepend">
        <div className="input-group-text">{key}</div>
      </div>
      <input
        type="text"
        value={value}
        className="form-control"
        readOnly
      ></input>
    </div>
  );

  return (
    <Layout
      title="Orders"
      description={`G'day ${user.name}, Manage all your customers orders?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showOrdersLength()}
          {orders.map((order, oIndex) => {
            return (
              <div
                className="mt-5"
                key={oIndex}
                style={{ borderBottom: "5-px solid indigo" }}
              >
                <h2 className="mb-5">
                  <span className="bg-primary"> Order ID:{order._id}</span>
                </h2>
                <ul className="list-group mb-2">
                  <li className="list-group-item">{showStatus(order)}</li>
                  <li className="list-group-item">
                    Transaction ID:{order.transaction_id}
                  </li>
                  <li className="list-group-item">Amount: ${order.amount}</li>
                  <li className="list-group-item">
                    Ordered By{order.user.name}
                  </li>
                  <li className="list-group-item">
                    Ordered On: {moment(order.createdAt).fromNow()}
                  </li>
                  <li className="list-group-item">
                    Delivery Address:{order.address}
                  </li>
                </ul>
                <h3 className="mt-4 mb-4 font-italic">
                  Total products in the order:{order.products.length}
                </h3>
                {order.products.map((p, pIndex) => (
                  <div
                    className="mb-4"
                    key={pIndex}
                    style={{ padding: "20px", border: "1px solid indigo" }}
                  >
                    {showInput("Prodcut name", p.name)}
                    {showInput("Product price", p.price)}
                    {showInput("Prodcut total", p.count)}
                    {showInput("Prodcut Id", p._id)}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Orders;
