import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import astrologyData from "../data/astrologyData";
// import vastuData from "../data/vastuData";
import api from "../api/axiosConfig";
import InfoSection from "../components/InfoSection";


export default function VastuPage() {
    const [vastu, setVastu] = useState([]);

  useEffect(() => {
    const fetchVastu = async () => {
      try {
        const res = await api.get("/vastu");
        setVastu(res.data || []);
      } catch (err) {
        console.error("Error fetching vastus:", err);
      }
    };
    fetchVastu();
  }, []);

  
  return (
    <div className="pt-5">
      {/* ============ 1️⃣ Banner ============ */}
      <section className="position-relative text-white text-center">
        <img
          src="https://iiag.co.in/media/2262/1740745364.webp"
          alt="Vastu Banner"
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
             style={{ background: "rgba(0,0,0,0.45)" }}>
          <h1 className="display-4 fw-bold">Vastu Selection</h1>
        </div>
      </section>

      {/* ============ 2️⃣ Form + Description + Counters ============ */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-md-5">
            <h3 className="mb-3 text-primary">Get Your Auspicious Time</h3>
            <form className="p-4 border rounded-3 bg-light shadow-sm">
              <div className="row g-3">
                <div className="col-md-12">
                  
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-12">
                  
                  <input type="text" className="form-control" placeholder="Your Occupation" />
                </div>
                <div className="col-md-12">
                  <input type="email" className="form-control" placeholder="example@mail.com" />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="col-md-12">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Your Birthplace" />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows="2"></textarea>
                </div>
                <div className="col-12 text-center mt-3">
                  <button className="btn btn-primary px-4">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-1">

          </div>

          {/* Right Description */}
          <div className="col-md-6 mt-1 mt-lg-0">
            <h3 className="text-dark">Why Vastu Matter?</h3>
            <p>
              An auspicious muhurta ensures harmony and success by aligning your
              important moments with planetary favorability. Our experts use
              authentic Vedic methods to calculate ideal timings for your
              spiritual and personal milestones.
            </p>

            <div className="row text-center mt-4">
              <div className="col-4">
                <h2 className="text-primary">
                  <CountUp end={100} duration={3} />%
                </h2>
                <p>Authentic Vedic Calculations</p>
              </div>
              <div className="col-4">
                <h2 className="text-primary">
                  <CountUp end={22} duration={3} />
                </h2>
                <p>Years of Expertise</p>
              </div>
              <div className="col-4">
                <h2 className="text-primary">
                  <CountUp end={10} duration={3} />
                </h2>
                <p>Certified Astrologers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3️⃣ Muhurta Services ============ */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-primary">Astrology Services</h2>
          <p className="text-center mb-5">
            Our astrologers provide personalized muhurta calculations for a
            variety of events, ensuring optimal results based on planetary influences.
          </p>
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
      </section>
<InfoSection
  img="/assets/VastuMain.png"
  subtitle="Balance Your Space"
  title="Vastu Consultation Services"
  points={[
    {
      title: "Home Vastu",
      desc: "Align your home with cosmic energy for harmony and wellbeing."
    },
    {
      title: "Office & Business Vastu",
      desc: "Improve wealth flow, stability, and productivity through Vastu principles."
    },
    {
      title: "Vastu for Plots & Construction",
      desc: "Guidance for choosing and designing land based on directions and energy."
    },
    {
      title: "Remedial Vastu",
      desc: "Non-demolition remedies using mirrors, pyramids, colors, and placement."
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
      <section className="py-5">
         <div className="container py-5">
      <h1 className="text-center text-primary mb-4">Vastu Services</h1>

      <div className="row g-4">
        {vastu.map((v) => (
          <div className="col-md-4 col-lg-3" key={v.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={v.img}
                className="card-img-top"
                alt={v.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="fw-bold">{v.title}</h5>
                <p>⭐ {v.rating || 4.8}</p>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className="text-primary fw-bold">{v.price}</span>
                <Link
                  to={`/vastu/${v.slug}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {vastu.length === 0 && (
          <p className="text-center text-muted">No Vastu Services Available</p>
        )}
      </div>
    </div>
      </section>

    </div>
  );
}
