// import React from "react";
// import Sidebar from "./Sidebar";
// import "../styles/layout.css";
// import { useNavigate } from "react-router-dom";


// // const AdminLayout = ({ children }) => {
// //   return (
// //     <div className="layout">
// //       <Sidebar />
// //       <main className="content">{children}</main>
// //     </div>
// //   );
// // };

// // export default AdminLayout;

// export default function AdminLayout({ children }) {
//   const navigate = useNavigate();
//   const admin = JSON.parse(localStorage.getItem("adminData"));

//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminData");
//     navigate("/adminlogin");
//   };

//   return (
//     <div className="layout">

//       <Sidebar />

//       <div className="topbar">
//         <div className="admin-info">
//           <span>{admin?.full_name || admin?.username}</span>
//         </div>
//         <button className="logout-btn" onClick={logout}>Logout</button>
//       </div>

//       <div className="content">{children}</div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("adminData"));

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    navigate("/adminlogin");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      
      {/* LEFT SIDEBAR */}
      <aside
        style={{
          width: "240px",
          background: "#111",
          color: "white",
          padding: "20px 15px",
          flexShrink: 0,
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Admin Panel</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <a href="/dashboard" style={navLink}>Dashboard</a>
          <a href="/homas" style={navLink}>Manage Homas</a>
          <a href="/muhurta" style={navLink}>Manage Muhurtas</a>
          <a href="/vastu" style={navLink}>Manage Vastu</a>
          <a href="/gallery" style={navLink}>Gallery</a>
          <a href="/forms" style={navLink}>Forms</a>
          <a href="/users" style={navLink}>Users</a>
          <a href="/admins" style={navLink}>Admins</a>
          <a href="/payments" style={navLink}>Payments</a>
          <a href="/trending" style={navLink}>Trending</a>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div style={{ flexGrow: 1, padding: "0" }}>
        {/* TOP BAR */}
        <div
          style={{
            height: "60px",
            background: "white",
            borderBottom: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 20px",
            gap: "15px",
          }}
        >
          <span>{admin?.full_name}</span>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              background: "#d9534f",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div style={{ padding: "25px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  padding: "8px 0",
};
