import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
const Card = ({ product }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="/product"></ShowImage>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Link to={`/product/${product._id}`}>
            <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
              View Product
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-warning mt-2 mb-2">
              Add to Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
