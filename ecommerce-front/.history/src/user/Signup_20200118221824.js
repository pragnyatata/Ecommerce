import React, { Component, useState } from "react";
import Layout from "../core/Layout";
import { API } from "../../config";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });
  const { name, email, password } = values;
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const clickSubmit = event => {
    event.preventDefault();
    signup({ name: name, email: email, password: pas });
  };
  const signup = user => {
    //console.log(name, email, password);
    fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
  };
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted"> Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted"> Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted"> Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
        ></input>
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Sumbit
      </button>
    </form>
  );

  return (
    <Layout
      title="Signup"
      description=" Sign Up Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
};
export default Signup;
