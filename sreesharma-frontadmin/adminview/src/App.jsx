// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminLogin from "./components/admin/pages/admin/AdminLogin";
// import AdminProtectedRoute from "./routes/AdminProtectedRoute";
// import AdminDashboard from "./components/admin/AdminDashboard";
// import AdminLayout from "./components/admin/AdminLayout";
// import HomaPage from "./components/admin/pages/admin/HomaPage";
// import MuhurtaPage from "./components/admin/pages/admin/MuhurtaPage";
// import VastuPage from "./components/admin/pages/admin/VastuPage";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         <Route path="/admin/login" element={<AdminLogin />} />

//         <Route
//           path="/admin/*"
//           element={
//             <AdminProtectedRoute>
//               <AdminLayout>
//                 <Routes>
//                   <Route path="dashboard" element={<AdminDashboard />} />
//                   <Route path="homas" element={<HomaPage />} />
//                   <Route path="muhurta" element={<MuhurtaPage />} />
//                   <Route path="vastu" element={<VastuPage />} />
//                   <Route path="homas" element={<HomaPage />} />
//                 </Routes>
//               </AdminLayout>
//             </AdminProtectedRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLogin from "./components/admin/pages/admin/AdminLogin";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLayout from "./components/admin/AdminLayout";

import HomaPage from "./components/admin/pages/admin/HomaPage";
import MuhurtaPage from "./components/admin/pages/admin/MuhurtaPage";
import VastuPage from "./components/admin/pages/admin/VastuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root to admin login */}
        <Route path="/" element={<Navigate to="/admin/login" />} />

        {/* Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Area */}
        <Route
          path="/admin/*"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="homas" element={<HomaPage />} />
                  <Route path="muhurta" element={<MuhurtaPage />} />
                  <Route path="vastu" element={<VastuPage />} />
                </Routes>
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
