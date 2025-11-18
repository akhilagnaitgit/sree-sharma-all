// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../api/axiosConfig";

// export default function HomaDetail() {
//   const { slug } = useParams();
//   const [homa, setHoma] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");

//   useEffect(() => {
//     const fetchHoma = async () => {
//       try {
//         const res = await api.get("/homas");
//         const found = res.data.find((h) => h.slug === slug);
//         setHoma(found || {});
//       } catch (err) {
//         console.error("❌ Error fetching homa:", err);
//         setHoma({});
//       }
//     };
//     fetchHoma();
//   }, [slug]);

//   if (!homa) return <h2 className="p-5 text-center">Loading...</h2>;

//   const {
//     img = "",
//     title = "",
//     price = "",
//     rating = "",
//     duration = "",
//     participants = "",
//     description = "",
//     whyPerform = "",
//     benefits = [],
//     programDetails = [],
//     prasadam = "",
//     otherInfo = ""
//   } = homa;

//   return (
//     <>
//       {/* Banner */}
//       <section className="position-relative text-white text-center">
//         <img
//           src={img || "/placeholder.jpg"}
//           alt={title}
//           className="w-100"
//           style={{ height: "350px", objectFit: "cover", filter: "brightness(0.7)" }}
//         />
//         <div className="position-absolute top-50 start-50 translate-middle">
//           <h1 className="fw-bold">{title}</h1>
//         </div>
//       </section>

//       <div className="container py-5">
        
//         {/* TOP SECTION */}
//         <div className="row mb-5">
//           <div className="col-lg-9">
//             <img
//               src={img || "/placeholder.jpg"}
//               className="img-fluid rounded-3 shadow-sm w-100"
//               style={{ maxHeight: "380px", objectFit: "cover" }}
//             />

//             <div className="mt-3">
//               <h3 className="fw-bold">{title}</h3>
//               <p><strong>Organisation:</strong> Sree Sharma</p>
//               <p><strong>Last Updated:</strong> Jan 2025</p>
//               <p><strong>Reviews:</strong> ⭐ {rating || "4.8"}</p>
//             </div>
//           </div>

//           <div className="col-lg-3">
//             <div className="border rounded-4 p-3 shadow-sm">
//               <img
//                 src={img || "/placeholder.jpg"}
//                 className="img-fluid rounded mb-2"
//                 style={{ height: "120px", objectFit: "cover" }}
//               />

//               <h4 className="text-primary fw-bold">{price}</h4>

//               <button className="btn btn-primary w-100 my-2">
//                 Book Now
//               </button>

//               <p><strong>Homa:</strong> {title}</p>
//               <p><strong>Duration:</strong> {duration}</p>
//               <p><strong>Participants:</strong> {participants}</p>
//             </div>
//           </div>
//         </div>

//         {/* TABS SECTION */}
//         <div className="row">
//           <div className="col-lg-9">

//             {/* Tabs */}
//             <ul className="nav nav-tabs mb-3">
//               {["overview", "program", "prasadam", "other"].map((tab) => (
//                 <li className="nav-item" key={tab}>
//                   <button
//                     className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                     onClick={() => setActiveTab(tab)}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* Tab Content */}
//             <div className="p-3 border rounded-4 shadow-sm bg-light">

//               {activeTab === "overview" && (
//                 <>
//                   <h5>Description</h5>
//                   <p>{description}</p>

//                   <h5>Why Perform {title}?</h5>
//                   <p>{whyPerform}</p>

//                   <h5>Benefits</h5>
//                   <ul>
//                     {benefits.length > 0
//                       ? benefits.map((b, i) => <li key={i}>{b}</li>)
//                       : <p>No benefits listed.</p>}
//                   </ul>
//                 </>
//               )}

//               {activeTab === "program" && (
//                 <>
//                   <h5>Program Details</h5>
//                   <ul>
//                     {programDetails.length > 0
//                       ? programDetails.map((p, i) => <li key={i}>{p}</li>)
//                       : <p>No program details available.</p>}
//                   </ul>
//                 </>
//               )}

//               {activeTab === "prasadam" && (
//                 <>
//                   <h5>Prasadam</h5>
//                   <p>{prasadam || "No prasadam info available."}</p>
//                 </>
//               )}

//               {activeTab === "other" && (
//                 <>
//                   <h5>Other Information</h5>
//                   <p>{otherInfo || "No additional information."}</p>
//                 </>
//               )}

//             </div>
//           </div>

//           {/* Right Side Contact */}
//           <div className="col-lg-3 mt-4 mt-lg-0">
//             <div className="border rounded-4 p-3 shadow-sm">
//               <h5>Quick Contact</h5>
//               <input className="form-control mb-2" placeholder="Your Name" />
//               <input className="form-control mb-2" placeholder="Phone" />
//               <button className="btn btn-success w-100">
//                 WhatsApp Us
//               </button>
//             </div>
//           </div>

//         </div>

//       </div>
//     </>
//   );
// }




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";

export default function HomaDetail() {
  const { slug } = useParams();

  const [homa, setHoma] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoma = async () => {
      try {
        const res = await api.get("/homas");
        const found = res.data.find((h) => h.slug === slug);
        setHoma(found);
      } catch (err) {
        console.error(" Error fetching homa:", err);
      }
      setLoading(false);
    };
    fetchHoma();
  }, [slug]);

  if (loading) return <h2 className="p-5 text-center">Loading...</h2>;
  if (!homa) return <h2 className="p-5 text-center">Homa Not Found</h2>;

  return (
    <>
      {/* ============================
          1️⃣ BANNER
      ============================= */}
      <section className="position-relative text-white text-center">
        <img
          src={homa.img}
          alt={homa.title}
          className="w-100"
          style={{ height: "350px", objectFit: "cover", filter: "brightness(0.65)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">{homa.title}</h1>
        </div>
      </section>

      <div className="container py-5">

        {/* ============================
            2️⃣ MAIN SECTION (Left 9 / Right 3)
        ============================= */}
        <div className="row mb-5">

          {/* LEFT SIDE */}
          <div className="col-lg-9">
            <img
              src={homa.img}
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: "380px", objectFit: "cover" }}
              alt={homa.title}
            />

            <div className="mt-3">
              <h3 className="fw-bold">{homa.title}</h3>
              <p><strong>Organisation:</strong> Sree Sharma</p>
              <p><strong>Last Updated:</strong> Jan 2025</p>
              <p><strong>Reviews:</strong> ⭐ {homa.rating}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-3">
            <div className="border rounded-4 p-3 shadow-sm">

              <img
                src={homa.img}
                className="img-fluid rounded mb-2"
                style={{ height: "120px", objectFit: "cover" }}
                alt={homa.title}
              />

              <h4 className="text-primary fw-bold">{homa.price}</h4>

              <button className="btn btn-primary w-100 my-2">Book Now</button>

              <p><strong>Homa:</strong> {homa.title}</p>
              <p><strong>Duration:</strong> {homa.duration}</p>
              <p><strong>Participants:</strong> {homa.participants}</p>
            </div>
          </div>
        </div>

        {/* ============================
            3️⃣ TABBED SECTION
        ============================= */}
        <div className="row">

          {/* TABS CONTENT */}
          <div className="col-lg-9">

            {/* TABS HEADER */}
            <ul className="nav nav-tabs mb-3">
              {["overview", "program", "prasadam", "other"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    style={{ color: activeTab === tab ? "#000" : "#555" }}
                  >
                    {tab === "overview" && "Overview"}
                    {tab === "program" && "Program Details"}
                    {tab === "prasadam" && "Prasadam"}
                    {tab === "other" && "Other Info"}
                  </button>
                </li>
              ))}
            </ul>

            {/* TABS BODY */}
            <div className="p-3 border rounded-4 shadow-sm bg-light">

              {/* Overview */}
              {activeTab === "overview" && (
                <>
                  <h5>Description</h5>
                  <p>{homa.description}</p>

                  <h5>Why Perform {homa.title}?</h5>
                  <p>{homa.whyPerform}</p>

                  <h5>Benefits</h5>
                  <ul>
                    {homa.benefits?.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Program Details */}
              {activeTab === "program" && (
                <>
                  <h5>Program Details</h5>
                  <ul>
                    {homa.programDetails?.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Prasadam */}
              {activeTab === "prasadam" && (
                <>
                  <h5>Prasadam</h5>
                  <p>{homa.prasadam}</p>
                </>
              )}

              {/* Other Info */}
              {activeTab === "other" && (
                <>
                  <h5>Other Information</h5>
                  <p>{homa.otherInfo}</p>
                </>
              )}
            </div>
          </div>

          {/* ============================
              QUICK CONTACT
          ============================= */}
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="border rounded-4 p-3 shadow-sm">
              <h5>Quick Contact</h5>
              <input className="form-control mb-2" placeholder="Your Name" />
              <input className="form-control mb-2" placeholder="Phone" />
              <button className="btn btn-success w-100">WhatsApp Us</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
