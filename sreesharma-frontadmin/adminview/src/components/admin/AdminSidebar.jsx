import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  Calendar,
  LayoutGrid,
  Menu,
} from "lucide-react"; // icons library (install if not installed)
import "./AdminSidebar.css";

const AdminSidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
  <div className="sidebar-top">
    <button className="toggle-btn" onClick={toggleSidebar}>
      <Menu size={22} /> 
    </button>
  </div>
  
  <nav className="sidebar-nav">
    <Link to="/admin/dashboard">
      <Home /> <span>Dashboard</span>
    </Link>
    <Link to="/admin/homas">
      <BookOpen /> <span>Homa Data</span>
    </Link>
    <Link to="/admin/muhurta">
      <Calendar /> <span>Muhurta</span>
    </Link>
    <Link to="/admin/vastu">
      <LayoutGrid /> <span>Vastu</span>
    </Link>
  </nav>
</aside>

  );
};

export default AdminSidebar;
