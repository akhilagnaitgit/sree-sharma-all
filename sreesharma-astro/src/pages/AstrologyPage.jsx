import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import astrologyData from "../data/astrologyData";
import api from "../api/axiosConfig";
import InfoSection from "../components/InfoSection";


export default function AstrologyPage() {
  
  return (
    <div className="pt-5">
      {/* ============ 1️⃣ Banner ============ */}
      <section className="position-relative text-white text-center">
        <img
          src="https://iiag.co.in/media/2262/1740745364.webp"
          alt="Astroloy Banner"
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
             style={{ background: "rgba(0,0,0,0.45)" }}>
          <h1 className="display-4 fw-bold">Astrology Selection</h1>
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
            <h3 className="text-dark">Why Astrology Matter?</h3>
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



<InfoSection
  img="/assets/AstrologyMain.png"
  subtitle="Unlock Your Future"
  title="Astrology Consultation Services"
  points={[
    {
      title: "Personal Horoscope",
      desc: "Gain insights into personality, destiny, opportunities, and future events."
    },
    {
      title: "Career & Business Astrology",
      desc: "Plan your career moves and business decisions based on planetary alignments."
    },
    {
      title: "Love & Relationship Astrology",
      desc: "Understand compatibility and strengthen your relationships through astrological insights."
    },
    {
      title: "Astrological Remedies",
      desc: "Overcome challenges with gemstone guidance, mantras, yantras, and rituals."
    }
  ]}
/>


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
        <div className="container">
          <h2 className="text-center text-primary mb-4 fw-bold" data-aos="fade-up">
            Auspicious Muhurtas
          </h2>

          <div className="row g-4">
            {astrologyData.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="muhurta-card shadow-sm rounded-4 overflow-hidden bg-white border-0">
            
                  {/* Image */}
                  <div className="muhurta-card-img-wrapper">
                    <img src={item.img} alt={item.title} className="muhurta-card-img" />
                  </div>
            
                  {/* Body */}
                  <div className="p-3">
                    <h5 className="fw-bold text-dark">{item.title}</h5>
                    <p className="mb-1 text-muted">⭐ {item.rating}</p>
                    <p className="fw-bold text-primary mb-2">{item.price}</p>
            
                    <Link
                      to={`/muhurta/${item.slug}`}
                      className="btn btn-primary w-100 mt-2"
                      style={{ borderRadius: "10px" }}
                    >
                      View Details
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
