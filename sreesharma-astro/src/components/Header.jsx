// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import muhurtaData from "../data/muhurtaData";
// import homaData from "../data/homaData";
// import astrologyData from "../data/astrologyData";
// import vastuData from "../data/vastuData";
// import marriageMatchingData from "../data/marriageMatchingData";

// export default function Header() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [desktopOpen, setDesktopOpen] = useState(null); // 'muhurta' | 'homas' | null
//   const [mobileOpen, setMobileOpen] = useState(null);   // 'muhurta' | 'homas' | null
//   const navRef = useRef(null);
//   const navigate = useNavigate();

//   // DON'T close sidebar on outside click (user requested)
//   // But close desktop dropdown when clicking outside
//   useEffect(() => {
//     function onClickOutside(e) {
//       if (navRef.current && !navRef.current.contains(e.target)) {
//         setDesktopOpen(null);
//       }
//     }
//     document.addEventListener("mousedown", onClickOutside);
//     return () => document.removeEventListener("mousedown", onClickOutside);
//   }, []);

//   // disable body scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
//     return () => { document.body.style.overflow = "auto"; };
//   }, [sidebarOpen]);

//   const toggleMobile = (key) => setMobileOpen(prev => (prev === key ? null : key));
//   const toggleDesktop = (key) => setDesktopOpen(prev => (prev === key ? null : key));

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3" ref={navRef}>
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <img src="/assets/sreelogo.png" alt="Sree Sharma Astrology" style={{ height: 58, marginRight: 10 }} />
//           <span className="brand-name">Sree Sharma Astrology</span>
//         </Link>

//         <button className="navbar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>

//             {/* Muhurtas - link + caret */}
//             <li className="nav-item position-relative d-none d-lg-flex align-items-center">
//               <button className="nav-link link-btn" onClick={() => navigate("/muhurtas")}>
//                 Muhurtas
//               </button>
//               <button
//                 className="dropdown-caret-btn"
//                 aria-expanded={desktopOpen === "muhurta"}
//                 aria-controls="dd-muhurta"
//                 onClick={() => toggleDesktop("muhurta")}
//                 title={desktopOpen === "muhurta" ? "Close" : "Open"}
//               >
//                 {desktopOpen === "muhurta" ? "▲" : "▼"}
//               </button>

//               {desktopOpen === "muhurta" && (
//                 <div id="dd-muhurta" className="dd-menu shadow rounded-3">
//                   {muhurtaData.map((m) => (
//                     <Link key={m.slug} to={`/muhurta/${m.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
//                       {m.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>

//             {/* Homas */}
//             <li className="nav-item position-relative d-none d-lg-flex align-items-center">
//               <button className="nav-link link-btn" onClick={() => navigate("/homas")}>
//                 Homas
//               </button>
//               <button
//                 className="dropdown-caret-btn"
//                 aria-expanded={desktopOpen === "homas"}
//                 aria-controls="dd-homas"
//                 onClick={() => toggleDesktop("homas")}
//                 title={desktopOpen === "homas" ? "Close" : "Open"}
//               >
//                 {desktopOpen === "homas" ? "▲" : "▼"}
//               </button>

//               {desktopOpen === "homas" && (
//                 <div id="dd-homas" className="dd-menu shadow rounded-3">
//                   {homaData.map((h) => (
//                     <Link key={h.slug} to={`/homa/${h.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
//                       {h.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>

//             {/* Astrology - link + caret */}
//             <li className="nav-item position-relative d-none d-lg-flex align-items-center">
//               <button className="nav-link link-btn" onClick={() => navigate("/astrology")}>
//                 Astrology
//               </button>
//               <button
//                 className="dropdown-caret-btn"
//                 aria-expanded={desktopOpen === "astrology"}
//                 aria-controls="dd-astrology"
//                 onClick={() => toggleDesktop("astrology")}
//                 title={desktopOpen === "astrology" ? "Close" : "Open"}
//               >
//                 {desktopOpen === "astrology" ? "▲" : "▼"}
//               </button>

//               {desktopOpen === "astrology" && (
//                 <div id="dd-astrology" className="dd-menu shadow rounded-3">
//                   {astrologyData.map((x) => (
//                     <Link key={x.slug} to={`/astrology/${x.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
//                       {x.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>

//             {/* Vastu - link + caret */}
//             <li className="nav-item position-relative d-none d-lg-flex align-items-center">
//               <button className="nav-link link-btn" onClick={() => navigate("/vastu")}>
//                 Vastu
//               </button>
//               <button
//                 className="dropdown-caret-btn"
//                 aria-expanded={desktopOpen === "vastu"}
//                 aria-controls="dd-vastu"
//                 onClick={() => toggleDesktop("vastu")}
//                 title={desktopOpen === "vastu" ? "Close" : "Open"}
//               >
//                 {desktopOpen === "vastu" ? "▲" : "▼"}
//               </button>

//               {desktopOpen === "vastu" && (
//                 <div id="dd-vastu" className="dd-menu shadow rounded-3">
//                   {vastuData.map((p) => (
//                     <Link key={p.slug} to={`/vastu/${p.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
//                       {p.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//             {/* Marrige - link + caret */}
//             <li className="nav-item position-relative d-none d-lg-flex align-items-center">
//               <button className="nav-link link-btn" onClick={() => navigate("/marriage-matching")}>
//                 Marriage-Matching
//               </button>
//               <button
//                 className="dropdown-caret-btn"
//                 aria-expanded={desktopOpen === "marriage-matching"}
//                 aria-controls="dd-marriage-matching"
//                 onClick={() => toggleDesktop("marriage-matching")}
//                 title={desktopOpen === "marriage-matching" ? "Close" : "Open"}
//               >
//                 {desktopOpen === "marriage-matching" ? "▲" : "▼"}
//               </button>

//               {desktopOpen === "marriage-matching" && (
//                 <div id="dd-marriage-matching" className="dd-menu shadow rounded-3">
//                   {marriageMatchingData.map((lp) => (
//                     <Link key={lp.slug} to={`/marriage-matching/${lp.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>
//                       {lp.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>




//             {/* <li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/yantras">Yantras</Link></li> */}
//             <li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/contact">Contact</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* MOBILE SIDEBAR (slide-in) */}
//       <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`} role="dialog" aria-modal="true">
//         {/* CLOSE BUTTON - only way to close aside from clicking real links */}
//         <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>✖</button>

//         {/* Brand */}
//         <Link to="/" onClick={() => setSidebarOpen(false)} className="mobile-brand">
//           <img src="/assets/sreelogo.png" alt="logo" style={{ height: 44, marginRight: 8 }} />
//           <span className="brand-name">Sree Sharma Astrology</span>
//         </Link>

//         {/* MENU ITEMS */}
//         <nav className="mobile-menu-list" aria-label="Mobile navigation">
//           <Link to="/" onClick={() => setSidebarOpen(false)} className="mob-link">Home</Link>

//           {/* Muhurtas: main link (navigates) + caret toggles compact list */}
//           <div className="mob-line">
//             <button
//               className="mob-link link-btn"
//               onClick={() => { setSidebarOpen(false); navigate("/muhurtas"); }}
//             >
//               Muhurtas
//             </button>
//             <button className="mob-caret" aria-expanded={mobileOpen === "muhurta"} onClick={() => toggleMobile("muhurta")}>
//               {mobileOpen === "muhurta" ? "▲" : "▼"}
//             </button>
//           </div>

//           {/* Compact sublist when opened */}
//           {mobileOpen === "muhurta" && (
//             <div className="mob-sub">
//               {muhurtaData.map((m) => (
//                 <Link key={m.slug} to={`/muhurta/${m.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
//                   {m.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Homas: main + caret */}
//           <div className="mob-line mt-2">
//             <button
//               className="mob-link link-btn"
//               onClick={() => { setSidebarOpen(false); navigate("/homas"); }}
//             >
//               Homas
//             </button>
//             <button className="mob-caret" aria-expanded={mobileOpen === "homas"} onClick={() => toggleMobile("homas")}>
//               {mobileOpen === "homas" ? "▲" : "▼"}
//             </button>
//           </div>

//           {mobileOpen === "homas" && (
//             <div className="mob-sub">
//               {homaData.map((h) => (
//                 <Link key={h.slug} to={`/homa/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
//                   {h.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Astrology: main + caret */}
//           <div className="mob-line mt-2">
//             <button
//               className="mob-link link-btn"
//               onClick={() => { setSidebarOpen(false); navigate("/astrology"); }}
//             >
//               Astrology
//             </button>
//             <button className="mob-caret" aria-expanded={mobileOpen === "astrology"} onClick={() => toggleMobile("astrology")}>
//               {mobileOpen === "astrology" ? "▲" : "▼"}
//             </button>
//           </div>

//           {mobileOpen === "astrology" && (
//             <div className="mob-sub">
//               {astrologyData.map((x) => (
//                 <Link key={x.slug} to={`/astrology/${x.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
//                   {x.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Vastu: main + caret */}
//           <div className="mob-line mt-2">
//             <button
//               className="mob-link link-btn"
//               onClick={() => { setSidebarOpen(false); navigate("/vastu"); }}
//             >
//               Vastu
//             </button>
//             <button className="mob-caret" aria-expanded={mobileOpen === "vastu"} onClick={() => toggleMobile("vastu")}>
//               {mobileOpen === "vastu" ? "▲" : "▼"}
//             </button>
//           </div>

//           {mobileOpen === "vastu" && (
//             <div className="mob-sub">
//               {vastuData.map((h) => (
//                 <Link key={h.slug} to={`/vastu/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
//                   {h.title}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Marriage-Matching: main + caret */}
//           <div className="mob-line mt-2">
//             <button
//               className="mob-link link-btn"
//               onClick={() => { setSidebarOpen(false); navigate("/homas"); }}
//             >
//               Marriage-Matching
//             </button>
//             <button className="mob-caret" aria-expanded={mobileOpen === "marriage-matching"} onClick={() => toggleMobile("marriage-matching")}>
//               {mobileOpen === "marriage-matching" ? "▲" : "▼"}
//             </button>
//           </div>

//           {mobileOpen === "marriage-matching" && (
//             <div className="mob-sub">
//               {marriageMatchingData.map((h) => (
//                 <Link key={h.slug} to={`/marriage-matching/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>
//                   {h.title}
//                 </Link>
//               ))}
//             </div>
//           )}



//           <Link to="/yantras" onClick={() => setSidebarOpen(false)} className="mob-link">Yantras
//           </Link>
//           <Link to="/contact" onClick={() => setSidebarOpen(false)} className="mob-link">Contact
//           </Link>
//         </nav>
//       </div>
//     </>
//   );
// }





// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import muhurtaData from "../data/muhurtaData";
import homaData from "../data/homaData";
import vastuData from "../data/vastuData";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [user, setUser] = useState(null); // user object if logged in
  const navRef = useRef(null);
  const navigate = useNavigate();
  

  // load user profile from localStorage
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopOpen(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [sidebarOpen]);

  const toggleMobile = (key) => setMobileOpen(prev => (prev === key ? null : key));
  const toggleDesktop = (key) => setDesktopOpen(prev => (prev === key ? null : key));

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    console.log("Loaded user:", user);

    setUser(null);
    navigate("/");
  };

  const requireLoginOr = (fn) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login?next=" + encodeURIComponent(window.location.pathname));
      return;
    }
    fn();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" ref={navRef}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/assets/sreelogo.png" alt="logo" style={{ height: 48, marginRight: 10 }} />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontWeight: 700 }}>Sree Sharma</div>
              <div style={{ fontSize: 18 }}>Astrology</div>
            </div>
          </Link>

          <button className="navbar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav align-items-center">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              {/* Muhurtas (with caret & dropdown) */}
              <li className="nav-item position-relative d-none d-lg-flex align-items-center">
                <button className="nav-link link-btn" onClick={() => navigate("/muhurtas")}>Muhurtas</button>
                <button className="dropdown-caret-btn" onClick={() => toggleDesktop("muhurta")}>
                  {desktopOpen === "muhurta" ? "▲" : "▼"}
                </button>
                {desktopOpen === "muhurta" && (
                  <div className="dd-menu shadow rounded-3">
                    {muhurtaData.map(m => (
                      <Link key={m.slug} to={`/muhurta/${m.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>{m.title}</Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Homas */}
              <li className="nav-item position-relative d-none d-lg-flex align-items-center">
                <button className="nav-link link-btn" onClick={() => navigate("/homas")}>Homas</button>
                <button className="dropdown-caret-btn" onClick={() => toggleDesktop("homas")}>
                  {desktopOpen === "homas" ? "▲" : "▼"}
                </button>
                {desktopOpen === "homas" && (
                  <div className="dd-menu shadow rounded-3">
                    {homaData.map(h => (
                      <Link key={h.slug} to={`/homa/${h.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>{h.title}</Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Vastu */}
              <li className="nav-item position-relative d-none d-lg-flex align-items-center">
                <button className="nav-link link-btn" onClick={() => navigate("/vastu")}>Vastu</button>
                <button className="dropdown-caret-btn" onClick={() => toggleDesktop("vastu")}>
                  {desktopOpen === "vastu" ? "▲" : "▼"}
                </button>
                {desktopOpen === "vastu" && (
                  <div className="dd-menu shadow rounded-3">
                    {vastuData.map(v => (
                      <Link key={v.slug} to={`/vastu/${v.slug}`} className="dd-item" onClick={() => setDesktopOpen(null)}>{v.title}</Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Astrology (no dropdown) */}
              <li className="nav-item"><Link className="nav-link" to="/astrology">Astrology</Link></li>

              {/* Marriage Matching (no dropdown) */}
              <li className="nav-item"><Link className="nav-link" to="/marriage-matching">Marriage Matching</Link></li>

              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

              {/* Login / Settings */}
              <li className="nav-item position-relative">
                {user ? (
                  <>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => toggleDesktop("settings")}>
                      Settings
                    </button>
                    {desktopOpen === "settings" && (
                      <div className="dd-menu shadow rounded-3" style={{ right: 0, left: "auto" }}>
                        <Link to="#" className="dd-item">Profile (Coming Soon)</Link>
                        <button className="dd-item btn-plain" onClick={handleLogout}>Logout</button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link className="btn btn-sm btn-primary" to="/login">Login</Link>
                )}
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>✖</button>

        <Link to="/" className="mobile-brand" onClick={() => setSidebarOpen(false)}>
          <img src="/assets/sreelogo.png" alt="logo" style={{ height: 44, marginRight: 8 }} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontWeight: 700 }}>Sree Sharma</div>
            <div style={{ fontSize: 12 }}>Astrology</div>
          </div>
        </Link>

        <nav className="mobile-menu-list">
          <Link to="/" onClick={() => setSidebarOpen(false)} className="mob-link">Home</Link>

          {/* Muhurta with mobile dropdown */}
          <div className="mob-line">
            <button className="mob-link link-btn" onClick={() => { setSidebarOpen(false); navigate('/muhurtas'); }}>Muhurtas</button>
            <button className="mob-caret" onClick={() => toggleMobile('muhurta')}>{mobileOpen === 'muhurta' ? '▲' : '▼'}</button>
          </div>
          {mobileOpen === 'muhurta' && <div className="mob-sub">
            {muhurtaData.map(m => <Link key={m.slug} to={`/muhurta/${m.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>{m.title}</Link>)}
          </div>}

          {/* Homas */}
          <div className="mob-line">
            <button className="mob-link link-btn" onClick={() => { setSidebarOpen(false); navigate('/homas'); }}>Homas</button>
            <button className="mob-caret" onClick={() => toggleMobile('homas')}>{mobileOpen === 'homas' ? '▲' : '▼'}</button>
          </div>
          {mobileOpen === 'homas' && <div className="mob-sub">
            {homaData.map(h => <Link key={h.slug} to={`/homa/${h.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>{h.title}</Link>)}
          </div>}

          {/* Vastu */}
          <div className="mob-line">
            <button className="mob-link link-btn" onClick={() => { setSidebarOpen(false); navigate('/vastu'); }}>Vastu</button>
            <button className="mob-caret" onClick={() => toggleMobile('vastu')}>{mobileOpen === 'vastu' ? '▲' : '▼'}</button>
          </div>
          {mobileOpen === 'vastu' && <div className="mob-sub">
            {vastuData.map(v => <Link key={v.slug} to={`/vastu/${v.slug}`} className="mob-sub-link" onClick={() => setSidebarOpen(false)}>{v.title}</Link>)}
          </div>}

          {/* Astrology & Marriage Matching (no dropdown on mobile) */}
          <Link to="/astrology" onClick={() => setSidebarOpen(false)} className="mob-link">Astrology</Link>
          <Link to="/marriage-matching" onClick={() => setSidebarOpen(false)} className="mob-link">Marriage Matching</Link>

          <Link to="/gallery" onClick={() => setSidebarOpen(false)} className="mob-link">Gallery</Link>
          <Link to="/about" onClick={() => setSidebarOpen(false)} className="mob-link">About Us</Link>
          <Link to="/contact" onClick={() => setSidebarOpen(false)} className="mob-link">Contact</Link>

          <div style={{ marginTop: 12 }}>
            {user ? (
              <>
                <div style={{ padding: "8px 12px" }}>{user.full_name}</div>
                <button className="mob-link btn-plain" onClick={() => { setSidebarOpen(false); handleLogout(); }}>Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setSidebarOpen(false)} className="mob-link">Login</Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
