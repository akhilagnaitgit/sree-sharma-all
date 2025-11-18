// import React from "react";
// import { Link } from "react-router-dom";
// import homaData from "../data/homaData";
// import CountUp from "react-countup";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function HomasPage() {
//   return (
//     <div className="pt-5">
//       {/* Banner */}
//       <section className="position-relative text-white text-center">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG3fgOcpEyBH5qcFwUK2iIT5sgAcPu55SxA&s"
//           alt="Homas Banner"
//           className="w-100"
//           style={{ height: "400px", objectFit: "cover" }}
//         />
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//           style={{ background: "rgba(0,0,0,0.45)" }}
//         >
//           <h1 className="display-4 fw-bold">Sacred Homas & Fire Rituals</h1>
//         </div>
//       </section>

//       {/* Intro Section */}
//       <section className="container py-5 text-center">
//         <h3 className="text-primary mb-3">Experience the Power of Vedic Homas</h3>
//         <p>
//           Our expert priests perform authentic Vedic Homas to bring spiritual harmony,
//           good health, prosperity, and protection into your life.
//         </p>
//         <div className="d-flex justify-content-center flex-wrap mt-4 gap-4 text-primary fw-bold">
//           <div>
//             <CountUp end={25} duration={3} />+ Years of Experience
//           </div>
//           <div>
//             <CountUp end={5000} duration={3} />+ Successful Homas
//           </div>
//           <div>
//             <CountUp end={98} duration={3} />% Devotee Satisfaction
//           </div>
//         </div>
//       </section>

//       {/* All Homas Cards */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary mb-4">All Homas</h2>
//           <div className="row g-4">
//             {homaData.map((h, i) => (
//               <div className="col-md-4 col-lg-3" key={i}>
//                 <div className="card h-100 shadow-sm border-0 hover-shadow">
//                   <img
//                     src={h.img}
//                     className="card-img-top"
//                     alt={h.title}
//                     style={{ height: "180px", objectFit: "cover" }}
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{h.title}</h5>
//                     <p>⭐ {h.rating}</p>
//                   </div>
//                   <div className="card-footer d-flex justify-content-between align-items-center">
//                     <span className="fw-bold text-primary">{h.price}</span>
//                     <Link
//                       to={`/homa/${h.slug}`}
//                       className="btn btn-outline-primary btn-sm"
//                     >
//                       View More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import muhurtaData from "../data/muhurtaData";
import homaData from "../data/homaData";
import api from "../api/axiosConfig";
import InfoSection from "../components/InfoSection";


export default function HomasPage() {
   const [homas, setHomas] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchHomas = async () => {
    try {
      const res = await api.get("/homas");
      setHomas(res.data);
    } catch (err) {
      console.error(" Error fetching homas:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHomas();
  }, []);

  if (loading) return <p>Loading...</p>;

  
  return (
    <div className="pt-1">
      {/* ============ 1️⃣ Banner ============ */}
      <section className="position-relative text-white text-center">
        <img
          src="https://iiag.co.in/media/2262/1740745364.webp"
          alt="Homas Banner"
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
             style={{ background: "rgba(0,0,0,0.45)" }}>
          <h1 className="display-4 fw-bold">Homas Selection</h1>
        </div>
      </section>


      {/* ============ 3️⃣ Homas Services ============ */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-primary">Homas Services</h2>
          <p className="text-center mb-5">
            Our astrologers provide personalized muhurta calculations for a
            variety of events, ensuring optimal results based on planetary influences.
          </p>
                    <div className="row g-4">
        {homas.map((h) => (
          <div className="col-md-6 " key={h.id}>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
             
                <strong>{h.title}</strong>- {h.description}
              
            </li>
          </ul>
          </div>
        ))}
      </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Wedding Muhurta</strong> – Find the most auspicious time for marriage.
                </li>
                <li className="list-group-item">
                  <strong>Griha Pravesh Muhurta</strong> – Ideal dates for entering a new home.
                </li>
                <li className="list-group-item">
                  <strong>Naamkaran Muhurta</strong> – Selecting the best time for naming ceremonies.
                </li>
                <li className="list-group-item">
                  <strong>Annaprashan Muhurta</strong> – Determining the right moment for a baby’s first solid food.
                </li>
                <li className="list-group-item">
                  <strong>Business & Career Muhurta</strong> – Favorable timings for job changes, business launches, and investments.
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src="/assets/muhurta-services.jpg" alt="Muhurta Services" className="img-fluid rounded-3 shadow" />
            </div>
          </div>
        </div>
      </section> */}
<InfoSection
  img="/assets/HomaMain.png"
  subtitle="Sacred Fire Rituals"
  title="Powerful Homa & Yagna Services"
  points={[
    {
      title: "Navagraha Homa",
      desc: "Balance the planetary energies to attract peace, success, and growth."
    },
    {
      title: "Ganapati Homa",
      desc: "Remove obstacles and invite positive beginnings in your life."
    },
    {
      title: "Maha Lakshmi Homa",
      desc: "Enhance wealth, prosperity, and abundance with divine blessings."
    },
    {
      title: "Rudra Homa",
      desc: "A powerful ritual for protection, healing, and mental peace."
    }
  ]}
/>

      

      {/* ============ 4️⃣ Stats Strip ============ */}
      <section className="py-4 text-white text-center" style={{ background: "#3b1d85" }}>
        <div className="container d-flex flex-wrap justify-content-around">

          <div>
            <h2><CountUp end={3.9} duration={3} decimals={1} />k+</h2>
            <p>Successfully Trained</p>
          </div>
          <div>
            <h2><CountUp end={15.8} duration={3} decimals={1} />k+</h2>
            <p>Classes Completed</p>
          </div>
          <div>
            <h2><CountUp end={97.5} duration={3} decimals={1} />k+</h2>
            <p>Satisfaction Rate</p>
          </div>
          <div>
            <h2><CountUp end={100.2} duration={3} decimals={1} />k+</h2>
            <p>Students Community</p>
          </div>
        </div>
      </section>

      {/* ============ 5️⃣ Cards Section ============ */}
{/* ✅ Beautiful Cards Section */}
      <section className="py-4">
        <div className="container py-4">
      <h2 className="text-primary text-center mb-4">All Homas</h2>

      <div className="row g-4">
        {homas.map((h) => (
          <div className="col-md-4 col-lg-4" key={h.id}>
            <div className="card shadow-sm m-2 h-100">
              <img src={h.img} className="card-img-top" alt={h.title} />

              <div className="card-body">
                <h5>{h.title}</h5>
                <p>⭐ {h.rating}</p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <span className="fw-bold text-primary">{h.price}</span>
                <Link to={`/homa/${h.slug}`} className="btn btn-outline-primary btn-sm">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

    </div>
  );
}
