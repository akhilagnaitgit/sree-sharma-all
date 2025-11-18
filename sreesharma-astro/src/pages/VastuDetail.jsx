// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// // import astrologyData from "../data/astrologyData";
// import { Tabs, Tab } from "react-bootstrap";
// import vastuData from "../data/vastuData";

// const AstrologyDetail = () => {
//   const { slug } = useParams();
//   const service = vastuData.find((item) => item.slug === slug);
//   const [key, setKey] = useState("overview");

//   if (!service) return <h3 className="text-center mt-5">Service Not Found</h3>;

//   return (
//     <div className="pt-5">
//       {/* Banner */}
//       <section className="text-center position-relative">
//         <img
//           src={service.img}
//           alt={service.title}
//           className="w-100"
//           style={{ height: "350px", objectFit: "cover" }}
//         />
//         <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
//              style={{ background: "rgba(0,0,0,0.45)" }}>
//           <h1 className="text-white fw-bold display-5">{service.title}</h1>
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="container py-5">
//         <div className="row g-4">
//           {/* Left */}
//           <div className="col-lg-9">
//             <div className="border rounded-3 p-4 bg-light">
//               <h3 className="text-primary mb-3">{service.title}</h3>
//               <p><strong>Duration:</strong> {service.duration}</p>
//               <p><strong>Participants:</strong> {service.participants}</p>
//               <p className="mb-4">{service.description}</p>

//               <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
//                 <Tab eventKey="overview" title="Overview">
//                   <p>{service.whyPerform}</p>
//                   <h6 className="mt-3">Benefits:</h6>
//                   <ul>
//                     {service.benefits.map((b, i) => (
//                       <li key={i}>{b}</li>
//                     ))}
//                   </ul>
//                 </Tab>
//                 <Tab eventKey="program" title="Program Details">
//                   <ul>
//                     {service.programDetails.map((p, i) => (
//                       <li key={i}>{p}</li>
//                     ))}
//                   </ul>
//                 </Tab>
//                 <Tab eventKey="prasadam" title="Prasadam">
//                   <p>{service.prasadam}</p>
//                 </Tab>
//                 <Tab eventKey="other" title="Other Info">
//                   <p>{service.otherInfo}</p>
//                 </Tab>
//               </Tabs>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="col-lg-3">
//             <div className="p-3 border rounded-3 text-center shadow-sm bg-white">
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="img-fluid rounded mb-3"
//               />
//               <h5 className="text-primary">{service.price}</h5>
//               <button className="btn btn-primary w-100 my-2">Book Now</button>
//               <div className="text-start mt-3">
//                 <p><strong>Organizer:</strong> Sree Sharma</p>
//                 <p><strong>Review:</strong> ★★★★☆</p>
//                 <p><strong>Last Updated:</strong> Nov 2025</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AstrologyDetail;



// VastuDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";

export default function VastuDetails() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchVastu = async () => {
      try {
        const res = await api.get("/vastu");
        const found = res.data.find((v) => v.slug === slug);
        setItem(found || null);
      } catch (err) {
        console.error("Error fetching vastu:", err);
      }
    };
    fetchVastu();
  }, [slug]);

  if (!item) return <h2 className="p-5 text-center">Vastu Not Found</h2>;

  return (
    <>
      {/* Banner */}
      <section className="position-relative text-white text-center">
        <img
          src={item.img}
          alt={item.title}
          className="w-100"
          style={{ height: "350px", objectFit: "cover", filter: "brightness(0.6)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">{item.title}</h1>
        </div>
      </section>

      <div className="container py-5">
        {/* Main Section */}
        <div className="row mb-5">
          {/* Left Section */}
          <div className="col-lg-9">
            <img
              src={item.img}
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: "380px", objectFit: "cover" }}
            />
            <div className="mt-3">
              <h3 className="fw-bold">{item.title}</h3>
              <p><strong>Organisation:</strong> Sree Sharma Astrology</p>
              <p><strong>Last Updated:</strong> Jan 2025</p>
              <p><strong>Reviews:</strong> ⭐ {item.rating || 4.9}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-3">
            <div className="border rounded-4 p-3 shadow-sm">
              <img
                src={item.img}
                className="img-fluid rounded mb-2"
                style={{ height: "120px", objectFit: "cover" }}
              />
              <h4 className="text-primary fw-bold">{item.price}</h4>
              <button className="btn btn-primary w-100 my-2">Book Now</button>

              <p><strong>Service:</strong> {item.title}</p>
              <p><strong>Duration:</strong> {item.duration}</p>
              <p><strong>Participants:</strong> {item.participants}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row">
          <div className="col-lg-9">
            <ul className="nav nav-tabs mb-3">
              {["overview", "program", "prasadam", "other"].map((t) => (
                <li className="nav-item" key={t}>
                  <button
                    className={`nav-link ${activeTab === t ? "active" : ""}`}
                    onClick={() => setActiveTab(t)}
                  >
                    {t === "overview" && "Overview"}
                    {t === "program" && "Program Details"}
                    {t === "prasadam" && "Prasadam"}
                    {t === "other" && "Other Info"}
                  </button>
                </li>
              ))}
            </ul>

            <div className="p-3 border rounded-4 shadow-sm bg-light">
              {activeTab === "overview" && (
                <>
                  <h5>Description</h5>
                  <p>{item.description}</p>

                  <h5>Why Perform?</h5>
                  <p>{item.whyPerform}</p>

                  <h5>Benefits</h5>
                  <ul>
                    {item.benefits?.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "program" && (
                <>
                  <h5>Program Details</h5>
                  <ul>
                    {item.programDetails?.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "prasadam" && (
                <>
                  <h5>Prasadam</h5>
                  <p>{item.prasadam}</p>
                </>
              )}

              {activeTab === "other" && (
                <>
                  <h5>Other Info</h5>
                  <p>{item.otherInfo}</p>
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
              <button className="btn btn-success w-100">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
