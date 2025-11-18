import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import muhurtaData from "../data/muhurtaData";
import api from "../api/axiosConfig";
import InfoSection from "../components/InfoSection";



export default function MuhurtasPage() {
    const [muhurtas, setMuhurtas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMuhurtas = async () => {
    try {
      const res = await api.get("/muhurta");
      setMuhurtas(res.data);
    } catch (err) {
      console.error(" Error fetching muhurtas:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMuhurtas();
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  
  return (
    <div className="pt-5">
      {/* ============ 1 Banner ============ */}
      <section className="position-relative text-white text-center">
        <img
          src="https://iiag.co.in/media/2262/1740745364.webp"
          alt="Muhurta Banner"
          className="w-100"
          style={{ height: "600px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
             style={{ background: "rgba(0,0,0,0.45)" }}>
          <h1 className="display-4 fw-bold">Muhurta Selection</h1>
        </div>
      </section>

      {/* ============ 2 Form + Description + Counters ============ */}
            {/* ============ 3 Muhurta Services ============ */}

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-primary">Muhurta Services</h2>
          <p className="text-center mb-5">
            Our astrologers provide personalized muhurta calculations for a
            variety of events, ensuring optimal results based on planetary influences.
          </p>
                    <div className="row g-4">
        {muhurtas.map((h) => (
          <div className="col-md-6 " key={h.id}>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
             
                <strong>{h.title}</strong>- {h.description}
              
            </li>
          </ul>
          </div>
        ))}
      </div>

        </div>
      </section>


<InfoSection
  img="/assets/MuhurtaMain.png"
  subtitle="Right Time, Right Results"
  title="Auspicious Muhurta Calculations"
  points={[
    {
      title: "Marriage Muhurta",
      desc: "Selecting the most auspicious time for a harmonious marital life."
    },
    {
      title: "Griha Pravesh Muhurta",
      desc: "Best dates to enter your new home with divine blessings."
    },
    {
      title: "Business Muhurta",
      desc: "Find favourable timings for openings, investments, and new ventures."
    },
    {
      title: "NamaKarana Muhurta",
      desc: "Auspicious moment for naming ceremonies of infants."
    }
  ]}
/>


      

      {/* ============ 4 Stats Strip ============ */}
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

      {/* ============ 5 Cards Section ============ */}
{/*  Beautiful Cards Section */}
      <section className="py-5">
        <div className="container py-5">
      <h2 className="text-primary text-center mb-4">All Muhurtas</h2>

            <div className="row g-4">
              {muhurtas.map((h) => (
                <div className="col-md-4 col-lg-4" key={h.id}>
                  <div className="card shadow-sm h-100">
                    <img src={h.img} className="card-img-top" alt={h.title} />
      
                    <div className="card-body">
                      <h5>{h.title}</h5>
                      <p>⭐ {h.rating}</p>
                    </div>
      
                    <div className="card-footer d-flex justify-content-between">
                      <span className="fw-bold text-primary">{h.price}</span>
                      <Link to={`/muhurta/${h.slug}`} className="btn btn-outline-primary btn-sm">
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
