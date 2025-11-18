// import AdminSidebar from "./AdminSidebar";
// import AdminHeader from "./AdminHeader";


// const AdminLayout = ({ children }) => {
//   return (
//     <div className="admin-layout">
//       <AdminSidebar />

//       <div className="admin-main">
//         <AdminHeader />
//         <div className="admin-content">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;





import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="admin-wrapper">
      {/* TOP HEADER */}
      <AdminHeader isCollapsed={isCollapsed} />

      {/* SIDEBAR */}
      <AdminSidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* MAIN CONTENT */}
      <main
        className="admin-content"
        style={{
          marginLeft: isCollapsed ? "80px" : "250px",
          marginTop: "60px",
          padding: "30px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
