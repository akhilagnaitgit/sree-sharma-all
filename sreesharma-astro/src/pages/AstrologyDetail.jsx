import React, { useState } from "react";
import { useParams } from "react-router-dom";
import astrologyData from "../data/astrologyData";
import { Tabs, Tab } from "react-bootstrap";

const AstrologyDetail = () => {
  const { slug } = useParams();
  const service = astrologyData.find((item) => item.slug === slug);
  const [key, setKey] = useState("overview");

  if (!service) return <h3 className="text-center mt-5">Service Not Found</h3>;

  return (
    <div className="pt-5">
      {/* Banner */}
      <section className="text-center position-relative">
        <img
          src={service.img}
          alt={service.title}
          className="w-100"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
             style={{ background: "rgba(0,0,0,0.45)" }}>
          <h1 className="text-white fw-bold display-5">{service.title}</h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Left */}
          <div className="col-lg-9">
            <div className="border rounded-3 p-4 bg-light">
              <h3 className="text-primary mb-3">{service.title}</h3>
              <p><strong>Duration:</strong> {service.duration}</p>
              <p><strong>Participants:</strong> {service.participants}</p>
              <p className="mb-4">{service.description}</p>

              <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="overview" title="Overview">
                  <p>{service.whyPerform}</p>
                  <h6 className="mt-3">Benefits:</h6>
                  <ul>
                    {service.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="program" title="Program Details">
                  <ul>
                    {service.programDetails.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </Tab>
                <Tab eventKey="prasadam" title="Prasadam">
                  <p>{service.prasadam}</p>
                </Tab>
                <Tab eventKey="other" title="Other Info">
                  <p>{service.otherInfo}</p>
                </Tab>
              </Tabs>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-3">
            <div className="p-3 border rounded-3 text-center shadow-sm bg-white">
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid rounded mb-3"
              />
              <h5 className="text-primary">{service.price}</h5>
              <button className="btn btn-primary w-100 my-2">Book Now</button>
              <div className="text-start mt-3">
                <p><strong>Organizer:</strong> Sree Sharma</p>
                <p><strong>Review:</strong> ★★★★☆</p>
                <p><strong>Last Updated:</strong> Nov 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AstrologyDetail;

