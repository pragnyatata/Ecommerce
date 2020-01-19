import React, { Component } from "react";
import Layout from "../core/Layout";
const Signup = () => {
  const signUpForm = () => {
    <form>
      <div className="form-group">
        <label className="text-muted"> Name</label>
        <input type="text" className="form-control"></input>
      </div>
    </form>;
  };
  return (
    <Layout
      title="Signup"
      description=" Sign Up Node React E-commerce App"
    ></Layout>
  );
};
export default Signup;
