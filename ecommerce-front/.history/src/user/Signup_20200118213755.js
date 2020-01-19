import React, { Component, useState } from "react";
import Layout from "../core/Layout";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const handleChange = name => event => {};
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted"> Name</label>
        <input
          onchange={handleChange()}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted"> Email</label>
        <input type="email" className="form-control"></input>
      </div>
      <div className="form-group">
        <label className="text-muted"> Password</label>
        <input type="password" className="form-control"></input>
      </div>
      <button className="btn btn-primary">Sumbit</button>
    </form>
  );

  return (
    <Layout
      title="Signup"
      description=" Sign Up Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {signUpForm()}
    </Layout>
  );
};
export default Signup;
