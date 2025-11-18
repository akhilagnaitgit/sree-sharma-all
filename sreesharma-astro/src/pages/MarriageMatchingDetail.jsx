import { useParams } from "react-router-dom";
// import homaData from "../data/homaData";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import React from "react";
import marriageMatchingData from "../data/marriageMatchingData";

export default function MarriageMatchingDetail() {
  const { slug } = useParams();
  const data = marriageMatchingData.find((h) => h.slug === slug);
  const [activeTab, setActiveTab] = useState("overview");

  if (!data) return <h2 className="p-5 text-center">Homa Not Found</h2>;

  return (
    <>
      {/* Banner */}
      <section className="position-relative text-white text-center">
        <img
          src={data.img}
          alt={data.title}
          className="w-100"
          style={{ height: "350px", objectFit: "cover", filter: "brightness(0.7)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">{data.title}</h1>
        </div>
      </section>

      <div className="container py-5">
        {/* Main Section */}
        <div className="row mb-5">
          <div className="col-lg-9">
            <img
              src={data.img}
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: "380px", objectFit: "cover" }}
            />
            <div className="mt-3">
              <h3 className="fw-bold">{data.title}</h3>
              <p><strong>Organisation:</strong> Sree Sharma</p>
              <p><strong>Last Updated:</strong> Jan 2025</p>
              <p><strong>Reviews:</strong> ⭐ {data.rating}</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="border rounded-4 p-3 shadow-sm">
              <img
                src={data.img}
                className="img-fluid rounded mb-2"
                style={{ height: "120px", objectFit: "cover" }}
              />
              <h4 className="text-primary fw-bold">{data.price}</h4>
              <button className="btn btn-primary w-100 my-2">Book Now</button>
              <p><strong>Homa:</strong> {data.title}</p>
              <p><strong>Duration:</strong> {data.duration}</p>
              <p><strong>Participants:</strong> {data.participants}</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
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
                  <p>{data.description}</p>
                  <h5>Why Perform {data.title}?</h5>
                  <p>{data.whyPerform}</p>
                  <h5>Benefits</h5>
                  <ul>
                    {data.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "program" && (
                <>
                  <h5>Program Details</h5>
                  <ul>
                    {data.programDetails.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "prasadam" && (
                <>
                  <h5>Prasadam</h5>
                  <p>{data.prasadam}</p>
                </>
              )}

              {activeTab === "other" && (
                <>
                  <h5>Other Information</h5>
                  <p>{data.otherInfo}</p>
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
