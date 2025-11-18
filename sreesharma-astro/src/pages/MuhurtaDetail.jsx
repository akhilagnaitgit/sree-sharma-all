// import { useParams } from "react-router-dom";
// import muhurtaData from "../data/muhurtaData";
// import { useState } from "react";
// import { Tabs, Tab } from "react-bootstrap";
// export default function MuhurtaDetail() {
//   const { slug } = useParams();
//   const data = muhurtaData.find(item => item.slug === slug);
//   const [activeTab, setActiveTab] = useState("overview");

//   if (!data) return <h2 className="p-5 text-center">Muhurta Not Found</h2>;

//   return (
//     <>
//       {/* ✅ Banner */}
//       <section className="position-relative text-white text-center">
//         <img 
//           src={data.img}
//           alt={data.title}
//           className="w-100"
//           style={{ height: "350px", objectFit: "cover", filter:"brightness(0.7)" }}
//         />
//         <div className="position-absolute top-50 start-50 translate-middle">
//           <h1 className="fw-bold">{data.title}</h1>
//         </div>
//       </section>

//       <div className="container py-5">

//         {/* ✅ 2nd Section: 9:3 layout */}
//         <div className="row mb-5">

//           {/* LEFT 9 */}
//           <div className="col-lg-9">
//             <img 
//               src={data.img}
//               className="img-fluid rounded-3 shadow-sm w-100"
//               style={{ maxHeight:"380px", objectFit:"cover" }}
//             />

//             <div className="mt-3">
//               <h3 className="fw-bold">{data.title}</h3>
              
//               <p className="mb-1"><strong>Organisation:</strong> Sree Sharma</p>
//               <p className="mb-1"><strong>Last Updated:</strong> Jan 2025</p>
//               <p className="mb-1"><strong>Reviews:</strong> ⭐ {data.rating} / 5</p>
//             </div>
//           </div>

//           {/* RIGHT 3 */}
//           <div className="col-lg-3">
//             <div className="border rounded-4 p-3 shadow-sm">
//               <img 
//                 src={data.img}
//                 className="img-fluid rounded mb-2"
//                 style={{ height:"120px", objectFit:"cover" }}
//               />
//               <h4 className="text-primary fw-bold">{data.price}</h4>

//               <button className="btn btn-primary w-100 my-2">Book Now</button>

//               <div className="mt-2">
//                 <p><strong>Puja:</strong> {data.title}</p>
//                 <p><strong>Duration:</strong> {data.duration}</p>
//                 <p><strong>Participants:</strong> {data.participants}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ 3rd Section: Tabs + Quick Contact */}
//         <div className="row">

//           {/* LEFT tabs */}
//           <div className="col-lg-9">

//             {/* Tabs */}
//             <ul className="nav nav-tabs mb-3">
//               {["overview", "program", "prasadam", "other"].map(tab => (
//                 <li className="nav-item" key={tab}>
//                   <button
//                     className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                     onClick={() => setActiveTab(tab)}
//                   >
//                     {tab === "overview" && "Overview"}
//                     {tab === "program" && "Program Details"}
//                     {tab === "prasadam" && "Prasadam"}
//                     {tab === "other" && "Other Info"}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* ✅ Tab Content */}
//             <div className="p-3 border rounded-4 shadow-sm bg-light">
//               {activeTab === "overview" && (
//                 <>
//                   <h5>Description</h5>
//                   <p>{data.description}</p>

//                   <h5>Why Perform {data.title}?</h5>
//                   <p>{data.whyPerform}</p>

//                   <h5>Benefits</h5>
//                   <ul>
//                     {data.benefits.map((b,i)=> <li key={i}>{b}</li>)}
//                   </ul>
//                 </>
//               )}

//               {activeTab === "program" && (
//                 <>
//                   <h5>Program Details</h5>
//                   <ul>
//                     {data.programDetails.map((p,i)=> <li key={i}>{p}</li>)}
//                   </ul>
//                 </>
//               )}

//               {activeTab === "prasadam" && (
//                 <>
//                   <h5>Prasadam</h5>
//                   <p>{data.prasadam}</p>
//                 </>
//               )}

//               {activeTab === "other" && (
//                 <>
//                   <h5>Other Information</h5>
//                   <p>{data.otherInfo}</p>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* RIGHT: Quick Contact */}
//           <div className="col-lg-3 mt-4 mt-lg-0">
//             <div className="border rounded-4 p-3 shadow-sm">
//               <h5>Quick Contact</h5>
//               <input className="form-control mb-2" placeholder="Your Name" />
//               <input className="form-control mb-2" placeholder="Phone" />
//               <button className="btn btn-success w-100">WhatsApp Us</button>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* ✅ Ribbon / Stats */}
//       <section className="py-4 bg-primary text-white text-center">
//         <div className="container d-flex justify-content-around flex-wrap">
//           <div><h4>{data.counts.performed}+</h4><p>Performed</p></div>
//           <div><h4>{data.counts.yearsService}+</h4><p>Years Service</p></div>
//           <div><h4>{data.counts.satisfaction}</h4><p>Satisfaction</p></div>
//           <div><h4>{data.counts.blessings}</h4><p>Blessings</p></div>
//         </div>
//       </section>
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";

export default function MuhurtaDetails() {
  const { slug } = useParams();
  const [muhurta, setMuhurta] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchMuhurta = async () => {
      try {
        const res = await api.get("/muhurta");
        const found = res.data.find((m) => m.slug === slug);
        setMuhurta(found);
      } catch (err) {
        console.error("❌ Error fetching muhurta:", err);
      }
    };

    fetchMuhurta();
  }, [slug]);

  if (!muhurta)
    return <h2 className="text-center py-5">Muhurta Not Found</h2>;

  return (
    <>
      {/* Banner */}
      <section className="position-relative text-white text-center">
        <img
          src={muhurta.img}
          alt={muhurta.title}
          className="w-100"
          style={{ height: "350px", objectFit: "cover", filter: "brightness(0.7)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">{muhurta.title}</h1>
        </div>
      </section>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-9">
            <img
              src={muhurta.img}
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: "380px", objectFit: "cover" }}
            />

            <div className="mt-3">
              <h3 className="fw-bold">{muhurta.title}</h3>
              <p><strong>Organisation:</strong> Sree Sharma</p>
              <p><strong>Last Updated:</strong> 2025</p>
              <p><strong>Reviews:</strong> ⭐ {muhurta.rating}</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="border rounded-4 p-3 shadow-sm">
              <img
                src={muhurta.img}
                className="img-fluid rounded mb-2"
                style={{ height: "120px", objectFit: "cover" }}
              />

              <h4 className="text-primary fw-bold">{muhurta.price}</h4>
              <button className="btn btn-primary w-100 my-2">Book Now</button>

              <p><strong>Muhurta:</strong> {muhurta.title}</p>
              <p><strong>Duration:</strong> {muhurta.duration}</p>
              <p><strong>Participants:</strong> {muhurta.participants}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row">
          <div className="col-lg-9">
            <ul className="nav nav-tabs mb-3">
              {["overview", "program", "prasadam", "other"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "overview" && "Overview"}
                    {tab === "program" && "Program Details"}
                    {tab === "prasadam" && "Prasadam"}
                    {tab === "other" && "Other Info"}
                  </button>
                </li>
              ))}
            </ul>

            <div className="p-3 border rounded-4 shadow-sm bg-light">
              {activeTab === "overview" && (
                <>
                  <h5>Description</h5>
                  <p>{muhurta.description}</p>

                  <h5>Why Perform?</h5>
                  <p>{muhurta.whyPerform}</p>

                  <h5>Benefits</h5>
                  <ul>
                    {(muhurta.benefits || []).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "program" && (
                <>
                  <h5>Program Details</h5>
                  <ul>
                    {(muhurta.programDetails || []).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "prasadam" && (
                <>
                  <h5>Prasadam</h5>
                  <p>{muhurta.prasadam}</p>
                </>
              )}

              {activeTab === "other" && (
                <>
                  <h5>Other Information</h5>
                  <p>{muhurta.otherInfo}</p>
                </>
              )}
            </div>
          </div>

          {/* Quick Contact */}
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
