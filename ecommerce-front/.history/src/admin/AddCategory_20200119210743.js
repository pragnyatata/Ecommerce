import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, serError] = useState(false);
  const [success, setSuccess] = useState(false);
};
