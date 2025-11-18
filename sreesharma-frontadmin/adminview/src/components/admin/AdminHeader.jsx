import React from "react";
import "./AdminHeader.css";

const AdminHeader = ({ isCollapsed }) => {
  return (
    <header
      className={
        isCollapsed ? "admin-header shifted-collapsed" : "admin-header shifted"
      }
    >
    <h3 style={{ color: "White  ", margin: 0 }}>Admin Panel</h3>
      <div className="header-actions">
        <button className="profile-btn">Profile</button>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};


export default AdminHeader;
