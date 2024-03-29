import React from "react";
const Layout = ({ title = "Title", description = "Description", children }) => (
  <div className="jumbotron">
    <h2>{title}</h2>
    <p className="lead">{description}</p>
  </div>
);
export default Layout;
