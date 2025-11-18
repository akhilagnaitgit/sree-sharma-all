// src/admin/components/AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar mt-5">
      <h4 className="p-3 text-white text-center bg-dark">Admin Panel</h4>
      <nav className="d-flex flex-column p-3">
        <Link to="/admin" className="admin-link">Dashboard</Link>
        <Link to="/admin/homas" className="admin-link">Manage Homas</Link>
        <Link to="/admin/muhurtas" className="admin-link">Manage Muhurtas</Link>
        <Link to="/admin/vastu" className="admin-link">Manage Vastu</Link>
        <Link to="/admin/settings" className="admin-link">Settings</Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
