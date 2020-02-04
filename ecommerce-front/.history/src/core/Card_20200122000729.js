import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
