import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Sree Sharma Admin Panel.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "30px"
      }}>
        <div style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "10px"
        }}>
          <h3>Homa Data</h3>
          <p>Manage all Homa related content.</p>
        </div>

        <div style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "10px"
        }}>
          <h3>Muhurta</h3>
          <p>Manage muhurta data.</p>
        </div>

        <div style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "10px"
        }}>
          <h3>Vastu</h3>
          <p>Manage vastu listings.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
