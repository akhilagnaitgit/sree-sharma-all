// src/admin/components/AdminLayout.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "../admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />
        <div className="admin-content p-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
