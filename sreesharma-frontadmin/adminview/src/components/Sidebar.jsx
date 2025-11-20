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
        <li><Link to="/muhurta">Manage Muhurtas</Link></li>
        <li><Link to="/vastu">Manage Vastu</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/admins">Admins</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/trending">Trending</Link></li>


      </ul>
    </div>
  );
}
