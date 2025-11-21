import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomasPage from "./pages/HomasPage";
import HomaDetail from "./pages/HomaDetail";
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import MuhurtasPage from './pages/MuhurtasPage';
import React, { useEffect } from "react";
import YantrasPage from "./pages/YantrasPage";

import AstrologyPage from "./pages/AstrologyPage";
import AstrologyDetail from "./pages/AstrologyDetail";
import VastuPage from "./pages/VastuPage";
import VastuDetail from "./pages/VastuDetail";
import MarriageMatchingPage from "./pages/MarriageMatchingPage";
import MarriageMatchingDetail from "./pages/MarriageMatchingDetail";


//Admin
import AdminDashboard from "./admin/pages/AdminDashboard";
import ManageHomas from "./admin/pages/ManageHomas";
import ManageMuhurtas from "./admin/pages/ManageMuhurtas";
import AdminVastu from "./admin/pages/AdminVastu";
import Login from "./pages/Login";
import Register from "./pages/Register";


import AOS from "aos";
import "aos/dist/aos.css";

import MuhurtaDetail from "./pages/MuhurtaDetail";



import AuthProvider from "./auth/AuthContext";
import AdminRoute from "./admin/components/AdminRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
// import AdminDashboard from "./admin/pages/AdminDashboard";
import UsersList from "./admin/pages/UsersList";
import AdminList from "./admin/pages/AdminList";
import AddAdmin from "./admin/pages/AddAdmin";



function App() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/homas" element={<HomasPage />} />
          <Route path="/muhurtas" element={<MuhurtasPage />} />
          <Route path="/yantras" element={<YantrasPage />} />

          <Route path="/muhurta/:slug" element={<MuhurtaDetail />} />
          <Route path="/homa/:slug" element={<HomaDetail />} />

          <Route path="/astrology" element={<AstrologyPage />} />
          <Route path="/astrology/:slug" element={<AstrologyDetail />} />

          <Route path="/vastu" element={<VastuPage />} />
          <Route path="/vastu/:slug" element={<VastuDetail />} />

          <Route path="/marriage-matching" element={<MarriageMatchingPage />} />
          <Route path="/marriage-matching/:slug" element={<MarriageMatchingDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


        {/* admin routes */}
      {/* <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/homas" element={<ManageHomas />} />
      <Route path="/admin/muhurtas" element={<ManageMuhurtas />} />
      <Route path="/admin/vastu" element={<AdminVastu />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;





// import { Routes, Route } from "react-router-dom";
// import React, { useEffect } from "react";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import HomePage from "./pages/HomePage";
// import ServicesPage from "./pages/ServicesPage";
// import ServiceDetail from "./pages/ServiceDetail";
// import GalleryPage from "./pages/GalleryPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

// import HomasPage from "./pages/HomasPage";
// import HomaDetail from "./pages/HomaDetail";

// import MuhurtasPage from "./pages/MuhurtasPage";
// import MuhurtaDetail from "./pages/MuhurtaDetail";

// import YantrasPage from "./pages/YantrasPage";

// import AstrologyPage from "./pages/AstrologyPage";
// import AstrologyDetail from "./pages/AstrologyDetail";

// import VastuPage from "./pages/VastuPage";
// import VastuDetail from "./pages/VastuDetail";

// import MarriageMatchingPage from "./pages/MarriageMatchingPage";
// import MarriageMatchingDetail from "./pages/MarriageMatchingDetail";

// import AdminDashboard from "./admin/pages/AdminDashboard";
// import ManageHomas from "./admin/pages/ManageHomas";
// import ManageMuhurtas from "./admin/pages/ManageMuhurtas";
// import AdminVastu from "./admin/pages/AdminVastu";
// import UsersList from "./admin/pages/UsersList";
// import AdminList from "./admin/pages/AdminList";
// import AddAdmin from "./admin/pages/AddAdmin";

// import AuthProvider from "./auth/AuthContext";
// import Signin from "./auth/Signin";
// import Signup from "./auth/Signup";
// import CheckAuthRedirect from "./auth/CheckAuthRedirect";
// import AdminRoute from "./admin/components/AdminRoute";

// import AOS from "aos";
// import "aos/dist/aos.css";


// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <AuthProvider>
//       <Routes>

//         {/* AUTH ROUTES (NO HEADER/FOOTER) */}
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* LAYOUT FOR ALL OTHER ROUTES */}
//         <Route
//           path="*"
//           element={
//             <>
//               <Header />
//               <main>

//                 {/* PUBLIC ROUTES */}
//                 <Routes>

//                   <Route path="/" element={<CheckAuthRedirect />} />
//                   <Route path="/home" element={<HomePage />} />

//                   <Route path="/services" element={<ServicesPage />} />
//                   <Route path="/services/:slug" element={<ServiceDetail />} />

//                   <Route path="/gallery" element={<GalleryPage />} />
//                   <Route path="/about" element={<AboutPage />} />
//                   <Route path="/contact" element={<ContactPage />} />

//                   <Route path="/homas" element={<HomasPage />} />
//                   <Route path="/homa/:slug" element={<HomaDetail />} />

//                   <Route path="/muhurtas" element={<MuhurtasPage />} />
//                   <Route path="/muhurta/:slug" element={<MuhurtaDetail />} />

//                   <Route path="/yantras" element={<YantrasPage />} />

//                   <Route path="/astrology" element={<AstrologyPage />} />
//                   <Route path="/astrology/:slug" element={<AstrologyDetail />} />

//                   <Route path="/vastu" element={<VastuPage />} />
//                   <Route path="/vastu/:slug" element={<VastuDetail />} />

//                   <Route path="/marriage-matching" element={<MarriageMatchingPage />} />
//                   <Route path="/marriage-matching/:slug" element={<MarriageMatchingDetail />} />

//                   {/* ADMIN ROUTES */}
//                   <Route
//                     path="/admin"
//                     element={
//                       <AdminRoute>
//                         <AdminDashboard />
//                       </AdminRoute>
//                     }
//                   />

//                   <Route
//                     path="/admin/homas"
//                     element={
//                       <AdminRoute>
//                         <ManageHomas />
//                       </AdminRoute>
//                     }
//                   />

//                   <Route
//                     path="/admin/muhurtas"
//                     element={
//                       <AdminRoute>
//                         <ManageMuhurtas />
//                       </AdminRoute>
//                     }
//                   />

//                   <Route
//                     path="/admin/vastu"
//                     element={
//                       <AdminRoute>
//                         <AdminVastu />
//                       </AdminRoute>
//                     }
//                   />

//                   <Route
//                     path="/admin/users"
//                     element={
//                       <AdminRoute>
//                         <UsersList />
//                       </AdminRoute>
//                     }
//                   />

//                   <Route
//                     path="/admin/admins"
//                     element={
//                       <AdminRoute>
//                         <AdminList />
//                       </AdminRoute>
//                     }
//                   />

//                   <Route
//                     path="/admin/add-admin"
//                     element={
//                       <AdminRoute>
//                         <AddAdmin />
//                       </AdminRoute>
//                     }
//                   />

//                 </Routes>
//               </main>
//               <Footer />
//             </>
//           }
//         />

//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;
