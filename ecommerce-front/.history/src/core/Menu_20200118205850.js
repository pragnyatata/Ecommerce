import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <link className="nav-Link" to="/">
          Home
        </link>
      </li>
      <li className="nav-item">
        <link className="nav-Link" to="/signin">
          Sign In{" "}
        </link>
      </li>
      <li className="nav-item">
        <link className="nav-Link" to="/signup">
          Sign Up
        </link>
      </li>
    </ul>
  </div>
);
export default withRouter(Menu);
