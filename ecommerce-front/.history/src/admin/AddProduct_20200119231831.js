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
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);
  const { user, token } = isAuthenticated();
  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  //const showSuccess = () => {
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
        <div className="form-group">
          <label className="btn btn-secondary">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image/*"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            className="form-control"
            onChange={handleChange("description")}
            value={description}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Price</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange("price")}
            value={price}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Category</label>
          <select className="form-control" onChange={handleChange("price")}>
            <option value="5e20b997fe6536242017b0eb">Python</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-muted">Quantity</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange("quantity")}
            value={quantity}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Shipping</label>
          <select className="form-control" onChange={handleChange("shipping")}>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
      </div>
      <button className="btn btn-outline-primary">Create Product</button>
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
