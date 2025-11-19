import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Admin Panel</h3>

      <ul className="sidebar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/homas">Manage Homas</Link></li>
      </ul>
    </div>
  );
}
