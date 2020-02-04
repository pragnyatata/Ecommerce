import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem } from "./cartHelpers";
const Card = ({ product, showViewProductButton = true }) => {
  const [redirect, setRedirect] = useState(false);
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
  const addToCartButton = () => {
    return (
      <Link to="/">
        <button
          onClick={addToCart}
          className="btn btn-outline-warning mt-2 mb-2"
        >
          Add to Cart
        </button>
      </Link>
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
  return (
    <div className="card">
      <div className="card-header name">{product.name}</div>
      <div className="card-body">
        {shouldRedirect}
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
        {addToCartButton()}
      </div>
    </div>
  );
};
export default Card;
