import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();
  const handleChange = e => {
    setError("");
    setName(e.target.value);
  };
  const clickSumbit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSumbit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
        ></input>
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  );
  return (
    <Layout
      title="Add new Category"
      description={`Hello ${name} , ready to add a category`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newCategoryForm}</div>
      </div>
    </Layout>
  );
};
export default AddCategory;
