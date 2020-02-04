import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
const Card = ({ product, showViewProductButton = true }) => {
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
  const addToCartButton = () => {
    return (
      <Link to="/">
        <button className="btn btn-outline-warning mt-2 mb-2">
          Add to Cart
        </button>
      </Link>
    );
  };
  return (
    <div className="card">
      <div className="card-header">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="/product"></ShowImage>
        <p className="lead mt-2">{product.description}</p>
        <p className="black-9">{product.price}</p>
        <p className="black-8">
          Category:{product.category && product.category.name}
        </p>
        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>
        {viewProductButton(showViewProductButton)}
        {addToCartButton()}
      </div>
    </div>
  );
};
export default Card;
