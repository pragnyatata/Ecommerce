import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();
  const handleChange = e => {
    setError("");
    setName(e.target.value);
  };
  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>;
    }
  };
  const showError = () => {
    if (error) {
      return <h3 className="text-danger">{name} should be unique</h3>;
    }
  };

  const clickSubmit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    createCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  );

  return (
    <Layout
      title="Add a new category"
      description={`G'day ${user.name}, ready to add a new category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newCategoryForm()}</div>
      </div>
    </Layout>
  );
};
export default AddCategory;
