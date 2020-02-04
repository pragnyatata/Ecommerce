import React, { useState, useEffect } from "react";
import { getBraintreeClientToken, processPayment } from "./apiCore";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { emptyCart } from "./cartHelpers";
const Checkout = ({ products, setRun = f => f, run = undefined }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: ""
  });
  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then(data => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        setData({ clientToken: data.clientToken });
      }
    });
  };
  useEffect(() => {
    getToken(userId, token);
  }, []);
  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()}</div>
    ) : (
      <Link to="/signin">
        <button className="btn btn-primary">Sign In to Checkout</button>
      </Link>
    );
  };
  const buy = () => {
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then(data => {
        console.log(data);
        nonce = data.nonce;
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(products)
        };
        processPayment(userId, token, paymentData)
          .then(response => {
            setData({ ...data, success: response.success });
            emptyCart(() => {
              setRun(!run);
              console.log("payment success and empty cart");
              setData({
                loading: false,
                success: true
              });
            });
          })
          .catch(error => {
            console.log(error);
            setData({ loading: false });
          });
      })
      .catch(error => {
        console.log("drop in error", error);
        setData({ ...data, error: error.message });
      });
  };
  const showError = error => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = success => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Thanks! Your Payment was successful
    </div>
  );
  const showLoading = loading =>
    loading && <h2 className="text-danger">Loading...</h2>;

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: "" })}>
      {data.clientToken !== null && products.length > 0 ? (
        <div>
          <DropIn
            options={{
              authorization: data.clientToken
            }}
            onInstance={instance => (data.instance = instance)}
          ></DropIn>
          <button onClick={buy} className="btn btn-success  btn-block">
            pay
          </button>
        </div>
      ) : null}
    </div>
  );

  return (
    <div>
      <h2> Total: ${getTotal()}</h2>
      {showLoading(data.loading)}

      {showSuccess(data.success)}
      {showError(data.error)}
      {showCheckout()}
    </div>
  );
};
export default Checkout;
