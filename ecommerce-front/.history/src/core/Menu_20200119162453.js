import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ff9900" };
  return { color: "#ffffff" };
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/">
          Home
        </Link>
      </li>
      {!isAuthenticated() && (
        <div>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              Sign In{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </div>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff" }}
            onClick={() =>
              signout(() => {
                history.push("/");
              })
            }
          >
            Sign Out
          </span>
        </li>
      )}
    </ul>
  </div>
);
export default withRouter(Menu);
