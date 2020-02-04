import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";
const Card = ({
  product,
  showViewProductButton = true,
  showAddToCart = true,
  cartUpdate = false,
  showRemoveProduct = false,
  setRun = f => f,
  run = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const viewProductButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`}>
          <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
            View Product
          </button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });
  };
  const addToCartButton = showAddToCart => {
    return (
      showAddToCart && (
        <button
          onClick={addToCart}
          className="btn btn-outline-warning mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock</span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock</span>
    );
  };
  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const handleChange = productId => event => {
    setRun(!run);
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };
  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            ></input>
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProduct => {
    return (
      showRemoveProduct && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run);
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Delete
        </button>
      )
    );
  };

  return (
    <div className="card">
      <div className="card-header name">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="/product"></ShowImage>
        <p className="lead mt-2">{product.description}</p>
        <p className="black-10">{product.price}</p>
        <p className="black-9">
          Category:{product.category && product.category.name}
        </p>
        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>
        {showStock(product.quantity)}
        <br />
        {viewProductButton(showViewProductButton)}
        {addToCartButton(showAddToCart)}
        {showCartUpdateOptions(cartUpdate)}
        {showRemoveButton(showRemoveProduct)}
      </div>
    </div>
  );
};
export default Card;
