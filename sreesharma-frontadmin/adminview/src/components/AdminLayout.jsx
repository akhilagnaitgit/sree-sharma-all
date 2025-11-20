import React from "react";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
};

export default AdminLayout;

