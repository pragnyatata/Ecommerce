import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
const Dashboard = () => {
  return (
    <Layout title="Dashboard" description="User Dashboard">
      <div className="car mb-5"></div>
      <h3 className="card-header">User Information</h3>
    </Layout>
  );
};
export default Dashboard;
