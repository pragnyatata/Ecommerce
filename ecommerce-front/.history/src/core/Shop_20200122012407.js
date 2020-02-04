import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from "./apiCore";

const Shop = () => {
  return (
    <Layout
      title="Shop Page"
      description="Search and find your choice of books"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">Left Sidebar</div>
        <div className="col-8">right</div>
      </div>
    </Layout>
  );
};
export default Shop;
