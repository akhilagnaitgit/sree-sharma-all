// src/admin/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../../api/axiosConfig";

const AdminDashboard = () => {
  const [count, setCount] = useState({ homas: 0, muhurtas: 0 });

  useEffect(() => {
    // Example: Count homas
    const fetchData = async () => {
      try {
        const res = await api.get("/homas");
        setCount(prev => ({ ...prev, homas: res.data.length }));
      } catch (error) {
        console.error("Error fetching homas:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <h2>Welcome, Admin!</h2>
      <p>Here's an overview of your platform data:</p>
      <div className="d-flex gap-4 mt-4">
        <div className="card p-3 shadow-sm">
          <h5>Total Homas</h5>
          <h3>{count.homas}</h3>
        </div>
        <div className="card p-3 shadow-sm">
          <h5>Total Muhurtas</h5>
          <h3>{count.muhurtas}</h3>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
