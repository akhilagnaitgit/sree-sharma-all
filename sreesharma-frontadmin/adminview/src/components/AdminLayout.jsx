import React from "react";
import Sidebar from "./Sidebar";
import "../styles/layout.css";
import { useNavigate } from "react-router-dom";


// const AdminLayout = ({ children }) => {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <main className="content">{children}</main>
//     </div>
//   );
// };

// export default AdminLayout;

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("adminData"));

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    navigate("/admin-login");
  };

  return (
    <div className="layout">

      <Sidebar />

      <div className="topbar">
        <div className="admin-info">
          <span>{admin?.full_name || admin?.username}</span>
        </div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <div className="content">{children}</div>
    </div>
  );
}


