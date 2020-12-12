import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
  <div className="product-img">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alet={item.name}
      className="mb-3"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    ></img>
  </div>
);
export default ShowImage;