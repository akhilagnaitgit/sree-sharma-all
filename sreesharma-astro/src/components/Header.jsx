import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import muhurtaData from "../data/muhurtaData";
import homaData from "../data/homaData";
import astrologyData from "../data/astrologyData";
import vastuData from "../data/vastuData";
import marriageMatchingData from "../data/marriageMatchingData";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null); // 'muhurta' | 'homas' | null
  const [mobileOpen, setMobileOpen] = useState(null);   // 'muhurta' | 'homas' | null
  const navRef = useRef(null);
  const navigate = useNavigate();

  // DON'T close sidebar on outside click (user requested)
  // But close desktop dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopOpen(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [sidebarOpen]);

  const toggleMobile = (key) => setMobileOpen(prev => (prev === key ? null : key));
  const toggleDesktop = (key) => setDesktopOpen(prev => (prev === key ? null : key));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3" ref={navRef}>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/assets/sreelogo.png" alt="Sree Sharma Astrology" style={{ height: 58, marginRight: 10 }} />
          <span className="brand-name">Sree Sharma Astrology</span>
        </Link>

        <button className="navbar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Muhurtas - link + caret */}
            <li className="nav-item position-relative d-none d-lg-flex align-items-center">
              <button className="nav-link link-btn" onClick={() => navigate("/muhurtas")}>
                Muhurtas
              </button>
              <button
                className="dropdown-caret-btn"
                aria-expanded={desktopOpen === "muhurta"}
                aria-controls="dd-muhurta"
                onClick={() => toggleDesktop("muhurta")}
                title={desktopOpen === "muhurta" ? "Close" : "Open"}
              >
                {desktopOpen === "muhurta" ? "▲" : "▼"}
              </button>

              {desktopOpen === "muhurta" && (
                <div id="dd-muhurta" className="dd-menu shadow rounded-3">
                  {muhurtaData.map((m) => (
                    <Link key={m.slug} to={`/muhurta/${m.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
                      {m.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Homas */}
            <li className="nav-item position-relative d-none d-lg-flex align-items-center">
              <button className="nav-link link-btn" onClick={() => navigate("/homas")}>
                Homas
              </button>
              <button
                className="dropdown-caret-btn"
                aria-expanded={desktopOpen === "homas"}
                aria-controls="dd-homas"
                onClick={() => toggleDesktop("homas")}
                title={desktopOpen === "homas" ? "Close" : "Open"}
              >
                {desktopOpen === "homas" ? "▲" : "▼"}
              </button>

              {desktopOpen === "homas" && (
                <div id="dd-homas" className="dd-menu shadow rounded-3">
                  {homaData.map((h) => (
                    <Link key={h.slug} to={`/homa/${h.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
                      {h.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Astrology - link + caret */}
            <li className="nav-item position-relative d-none d-lg-flex align-items-center">
              <button className="nav-link link-btn" onClick={() => navigate("/astrology")}>
                Astrology
              </button>
              <button
                className="dropdown-caret-btn"
                aria-expanded={desktopOpen === "astrology"}
                aria-controls="dd-astrology"
                onClick={() => toggleDesktop("astrology")}
                title={desktopOpen === "astrology" ? "Close" : "Open"}
              >
                {desktopOpen === "astrology" ? "▲" : "▼"}
              </button>

              {desktopOpen === "astrology" && (
                <div id="dd-astrology" className="dd-menu shadow rounded-3">
                  {astrologyData.map((x) => (
                    <Link key={x.slug} to={`/astrology/${x.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
                      {x.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Vastu - link + caret */}
            <li className="nav-item position-relative d-none d-lg-flex align-items-center">
              <button className="nav-link link-btn" onClick={() => navigate("/vastu")}>
                Vastu
              </button>
              <button
                className="dropdown-caret-btn"
                aria-expanded={desktopOpen === "vastu"}
                aria-controls="dd-vastu"
                onClick={() => toggleDesktop("vastu")}
                title={desktopOpen === "vastu" ? "Close" : "Open"}
              >
                {desktopOpen === "vastu" ? "▲" : "▼"}
              </button>

              {desktopOpen === "vastu" && (
                <div id="dd-vastu" className="dd-menu shadow rounded-3">
                  {vastuData.map((p) => (
                    <Link key={p.slug} to={`/vastu/${p.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {/* Marrige - link + caret */}
            <li className="nav-item position-relative d-none d-lg-flex align-items-center">
              <button className="nav-link link-btn" onClick={() => navigate("/marriage-matching")}>
                Marriage-Matching
              </button>
              <button
                className="dropdown-caret-btn"
                aria-expanded={desktopOpen === "marriage-matching"}
                aria-controls="dd-marriage-matching"
                onClick={() => toggleDesktop("marriage-matching")}
                title={desktopOpen === "marriage-matching" ? "Close" : "Open"}
              >
                {desktopOpen === "marriage-matching" ? "▲" : "▼"}
              </button>

              {desktopOpen === "marriage-matching" && (
                <div id="dd-marriage-matching" className="dd-menu shadow rounded-3">
                  {marriageMatchingData.map((lp) => (
                    <Link key={lp.slug} to={`/marriage-matching/${lp.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
                      {lp.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>




            {/* <li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/yantras">Yantras</Link></li> */}
            <li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* MOBILE SIDEBAR (slide-in) */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        {/* CLOSE BUTTON - only way to close aside from clicking real links */}
        <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>✖</button>

        {/* Brand */}
        <Link to="/" onClick={() => setSidebarOpen(false)} className="mobile-brand">
          <img src="/assets/sreelogo.png" alt="logo" style={{ height: 44, marginRight: 8 }} />
          <span className="brand-name">Sree Sharma Astrology</span>
        </Link>

        {/* MENU ITEMS */}
        <nav className="mobile-menu-list" aria-label="Mobile navigation">
          <Link to="/" onClick={() => setSidebarOpen(false)} className="mob-link">Home</Link>

          {/* Muhurtas: main link (navigates) + caret toggles compact list */}
          <div className="mob-line">
            <button
              className="mob-link link-btn"
              onClick={() => { setSidebarOpen(false); navigate("/muhurtas"); }}
            >
              Muhurtas
            </button>
            <button className="mob-caret" aria-expanded={mobileOpen === "muhurta"} onClick={() => toggleMobile("muhurta")}>
              {mobileOpen === "muhurta" ? "▲" : "▼"}
            </button>
          </div>

          {/* Compact sublist when opened */}
          {mobileOpen === "muhurta" && (
            <div className="mob-sub">
              {muhurtaData.map((m) => (
                <Link key={m.slug} to={`/muhurta/${m.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
                  {m.title}
                </Link>
              ))}
            </div>
          )}

          {/* Homas: main + caret */}
          <div className="mob-line mt-2">
            <button
              className="mob-link link-btn"
              onClick={() => { setSidebarOpen(false); navigate("/homas"); }}
            >
              Homas
            </button>
            <button className="mob-caret" aria-expanded={mobileOpen === "homas"} onClick={() => toggleMobile("homas")}>
              {mobileOpen === "homas" ? "▲" : "▼"}
            </button>
          </div>

          {mobileOpen === "homas" && (
            <div className="mob-sub">
              {homaData.map((h) => (
                <Link key={h.slug} to={`/homa/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
                  {h.title}
                </Link>
              ))}
            </div>
          )}

          {/* Astrology: main + caret */}
          <div className="mob-line mt-2">
            <button
              className="mob-link link-btn"
              onClick={() => { setSidebarOpen(false); navigate("/astrology"); }}
            >
              Astrology
            </button>
            <button className="mob-caret" aria-expanded={mobileOpen === "astrology"} onClick={() => toggleMobile("astrology")}>
              {mobileOpen === "astrology" ? "▲" : "▼"}
            </button>
          </div>

          {mobileOpen === "astrology" && (
            <div className="mob-sub">
              {astrologyData.map((x) => (
                <Link key={x.slug} to={`/astrology/${x.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
                  {x.title}
                </Link>
              ))}
            </div>
          )}

          {/* Vastu: main + caret */}
          <div className="mob-line mt-2">
            <button
              className="mob-link link-btn"
              onClick={() => { setSidebarOpen(false); navigate("/vastu"); }}
            >
              Vastu
            </button>
            <button className="mob-caret" aria-expanded={mobileOpen === "vastu"} onClick={() => toggleMobile("vastu")}>
              {mobileOpen === "vastu" ? "▲" : "▼"}
            </button>
          </div>

          {mobileOpen === "vastu" && (
            <div className="mob-sub">
              {vastuData.map((h) => (
                <Link key={h.slug} to={`/vastu/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
                  {h.title}
                </Link>
              ))}
            </div>
          )}

          {/* Marriage-Matching: main + caret */}
          <div className="mob-line mt-2">
            <button
              className="mob-link link-btn"
              onClick={() => { setSidebarOpen(false); navigate("/homas"); }}
            >
              Marriage-Matching
            </button>
            <button className="mob-caret" aria-expanded={mobileOpen === "marriage-matching"} onClick={() => toggleMobile("marriage-matching")}>
              {mobileOpen === "marriage-matching" ? "▲" : "▼"}
            </button>
          </div>

          {mobileOpen === "marriage-matching" && (
            <div className="mob-sub">
              {marriageMatchingData.map((h) => (
                <Link key={h.slug} to={`/marriage-matching/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
                  {h.title}
                </Link>
              ))}
            </div>
          )}



          <Link to="/yantras" onClick={() => setSidebarOpen(false)} className="mob-link">Yantras
          </Link>
          <Link to="/contact" onClick={() => setSidebarOpen(false)} className="mob-link">Contact
          </Link>
        </nav>
      </div>
    </>
  );
}





// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // toggle hamburger sidebar
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   // toggle dropdowns (auto close others)
//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };

//   // close sidebar when background clicked
//   const handleOverlayClick = (e) => {
//     if (e.target.classList.contains("mobile-overlay")) setMenuOpen(false);
//   };

//   // datasets for dropdowns
//   const muhurtaList = [
//     "Anna Prasannam", "Aksharabyasam", "Vahana Puja", "Marriage",
//     "Nischitardam", "Sreemantham", "Shastipurthi"
//   ];
//   const homaList = [
//     "Ganapathi Homam", "Rudra Homam", "Navagraha Homam",
//     "Ayush Homam", "Chandi Homam"
//   ];
//   const astrologyList = [
//     "Personal Horoscope", "Kundli Matching", "Career Astrology", "Astrological Remedies"
//   ];
//   const vastuList = [
//     "Vastu House", "Vastu Main Door", "Vastu Bedroom", "Vastu Kitchen",
//     "Vastu Land", "Vastu Architectural Planning", "Vastu Temple"
//   ];
//   const marriageList = [
//     "Kundli Matching", "Guna Milan", "Manglik Dosha Check", "Relationship Counseling"
//   ];

//   return (
//     <>
//       {/* ---- Desktop Header ---- */}
//       <header className="bg-white shadow-sm fixed-top">
//         <div className="container d-flex justify-content-between align-items-center py-3">
//           {/* logo + name */}
//           <div className="d-flex align-items-center">
//             <img src="/assets/Srinivas Sharma logo.png" alt="Logo" width="45" height="45" />
//             <Link to="/" className="ms-2 text-decoration-none">
//               <h4 className="fw-bold m-0 text-primary">Sree Sharma Astrology</h4>
//             </Link>
//           </div>

//           {/* nav links */}
//           <nav className="d-none d-lg-flex align-items-center gap-4">
//             <NavLink to="/" className="text-dark fw-semibold text-decoration-none">
//               Home
//             </NavLink>

//             {/* Astrology Dropdown */}
//             <div className="dropdown position-relative">
//               <button
//                 onClick={() => toggleDropdown("astrology")}
//                 className="btn btn-link text-dark fw-semibold text-decoration-none d-flex align-items-center"
//               >
//                 Astrology <FaChevronDown className="ms-1" />
//               </button>
//               {activeDropdown === "astrology" && (
//                 <div className="dropdown-menu show shadow">
//                   {astrologyList.map((a, i) => (
//                     <Link key={i} to={`/astrology`} className="dropdown-item">
//                       {a}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Vastu Dropdown */}
//             <div className="dropdown position-relative">
//               <button
//                 onClick={() => toggleDropdown("vastu")}
//                 className="btn btn-link text-dark fw-semibold text-decoration-none d-flex align-items-center"
//               >
//                 Vastu <FaChevronDown className="ms-1" />
//               </button>
//               {activeDropdown === "vastu" && (
//                 <div className="dropdown-menu show shadow">
//                   {vastuList.map((v, i) => (
//                     <Link key={i} to={`/vastu`} className="dropdown-item">
//                       {v}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Marriage Matching Dropdown */}
//             <div className="dropdown position-relative">
//               <button
//                 onClick={() => toggleDropdown("marriage")}
//                 className="btn btn-link text-dark fw-semibold text-decoration-none d-flex align-items-center"
//               >
//                 Marriage Matching <FaChevronDown className="ms-1" />
//               </button>
//               {activeDropdown === "marriage" && (
//                 <div className="dropdown-menu show shadow">
//                   {marriageList.map((m, i) => (
//                     <Link key={i} to={`/marriage-matching`} className="dropdown-item">
//                       {m}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Muhurtas Dropdown */}
//             <div className="dropdown position-relative">
//               <button
//                 onClick={() => toggleDropdown("muhurta")}
//                 className="btn btn-link text-dark fw-semibold text-decoration-none d-flex align-items-center"
//               >
//                 Muhurtas <FaChevronDown className="ms-1" />
//               </button>
//               {activeDropdown === "muhurta" && (
//                 <div className="dropdown-menu show shadow">
//                   {muhurtaList.map((m, i) => (
//                     <Link key={i} to={`/muhurta/${m.toLowerCase().replace(/ | /g, "-")}`} className="dropdown-item">
//                       {m}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Homas Dropdown */}
//             <div className="dropdown position-relative">
//               <button
//                 onClick={() => toggleDropdown("homas")}
//                 className="btn btn-link text-dark fw-semibold text-decoration-none d-flex align-items-center"
//               >
//                 Homas <FaChevronDown className="ms-1" />
//               </button>
//               {activeDropdown === "homas" && (
//                 <div className="dropdown-menu show shadow">
//                   {homaList.map((h, i) => (
//                     <Link key={i} to={`/homa/${h.toLowerCase().replace(/ | /g, "-")}`} className="dropdown-item">
//                       {h}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* hamburger */}
//           <button
//             className="btn btn-outline-primary d-lg-none"
//             onClick={toggleMenu}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </header>

//       {/* ---- Mobile Sidebar ---- */}
//       <div
//         className={`mobile-overlay ${menuOpen ? "show" : ""}`}
//         onClick={handleOverlayClick}
//         style={{
//           position: "fixed",
//           top: 0, left: 0, width: "100%", height: "100%",
//           background: menuOpen ? "rgba(0,0,0,0.4)" : "transparent",
//           transition: "all 0.3s ease",
//           zIndex: menuOpen ? 1000 : -1,
//         }}
//       >
//         <div
//           className="mobile-sidebar bg-white p-4"
//           style={{
//             width: "270px",
//             height: "100%",
//             transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
//             transition: "transform 0.3s ease",
//           }}
//         >
//           {/* logo */}
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h5 className="fw-bold text-primary">Sree Sharma Astrology</h5>
//             <button className="btn btn-sm btn-outline-danger" onClick={toggleMenu}>
//               <FaTimes />
//             </button>
//           </div>

//           {/* sidebar links */}
//           <ul className="list-unstyled">
//             <li><Link to="/" className="text-dark fw-semibold text-decoration-none d-block py-2" onClick={toggleMenu}>Home</Link></li>

//             {/* dropdowns */}
//             {[
//               { name: "Astrology", key: "astrology", list: astrologyList, path: "/astrology" },
//               { name: "Vastu", key: "vastu", list: vastuList, path: "/vastu" },
//               { name: "Marriage Matching", key: "marriage", list: marriageList, path: "/marriage-matching" },
//               { name: "Muhurtas", key: "muhurta", list: muhurtaList, path: "/muhurta" },
//               { name: "Homas", key: "homas", list: homaList, path: "/homa" },
//             ].map((menu) => (
//               <li key={menu.key}>
//                 <button
//                   className="btn btn-link text-dark fw-semibold text-decoration-none w-100 text-start d-flex justify-content-between align-items-center py-2"
//                   onClick={() => toggleDropdown(menu.key)}
//                 >
//                   {menu.name} <FaChevronDown />
//                 </button>
//                 {activeDropdown === menu.key && (
//                   <ul className="list-unstyled ps-3">
//                     {menu.list.map((item, i) => (
//                       <li key={i}>
//                         <Link
//                           to={menu.path}
//                           className="text-muted text-decoration-none d-block py-1 small"
//                           onClick={toggleMenu}
//                         >
//                           {item}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
