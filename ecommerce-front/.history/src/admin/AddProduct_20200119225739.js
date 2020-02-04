import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { createProduct } from "./apiAdmin";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    category: [],
    categories: [],
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: ""
  });
  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values;

  const { user, token } = isAuthenticated();
  //   const handleChange = e => {
  //     setError("");
  //     setName(e.target.value);
  //   };
  //   const showSuccess = () => {
  //     if (success) {
  //       return <h3 className="text-success">{name} is created</h3>;
  //     }
  //   };
  //   const showError = () => {
  //     if (error) {
  //       return <h3 className="text-danger">Category should be unique</h3>;
  //     }
  //   };
  //   const goBack = () => (
  //     <div className="mt-5">
  //       <Link to="/admin/dashboard" className="text-warning">
  //         Back to Dashboard
  //       </Link>
  //     </div>
  //   );

  //   const clickSubmit = e => {
  //     e.preventDefault();
  //     setError("");
  //     setSuccess(false);
  //     createCategory(user._id, token, { name }).then(data => {
  //       if (data.error) {
  //         setError(true);
  //       } else {
  //         setError("");
  //         setSuccess(true);
  //       }
  //     });
  //   };

  const newPostForm = () => (
    <form>
      <div className="mb-3">
        <h4>Post Photo</h4>
        <div className="form-group"></div>
        <label></label>
        <input type="file" name="photo" accept="image/*"></input>
        {/* <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Create Category</button> */}
      </div>
    </form>
  );

  return (
    <Layout
      title="Add a new Product"
      description={`G'day ${user.name}, ready to add a new product?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
};
export default AddProduct;
