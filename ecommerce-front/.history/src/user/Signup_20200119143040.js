import React, { Component, useState } from "react";
import Layout from "../core/Layout";
import { API } from "../config";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });
  const { name, email, password, error, success } = values;
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const clickSubmit = event => {
    event.preventDefault();
    signup({ name, email, password }).then(data => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true
        });
      }
    });
  };
  const signup = user => {
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        console.log(response);
        return response.json;
      })
      .catch(err => alert(err)));
  };
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted"> Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted"> Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted"> Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        ></input>
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New Account created succesfully{" "}
    </div>
  );

  return (
    <Layout
      title="Signup"
      description=" Sign Up Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};
export default Signup;
