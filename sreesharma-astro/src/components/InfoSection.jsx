import React from "react";

export default function InfoSection({ img, title, subtitle, points }) {
  return (
    <section className="container-fluid py-5">
      <div className="row align-items-center">
        
        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center mb-md-0">
          <img
            src={img}
            alt={title}
            className="img-fluid rounded-3 shadow"
            style={{ height: "480px", objectFit: "cover", }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h4 className="text-primary">{subtitle}</h4>
          <h2 className="fw-bold">{title}</h2>

          <p className="mt-3">
            {/** Description block — passed as points array */}
          </p>

          <ul className="list-unstyled mt-4">
            {points.map((item, i) => (
              <li key={i} className="d-flex align-items-start mb-3">
                <span
                  className="me-2"
                  style={{
                    color: "#2f66ff",
                    fontSize: "20px",
                    marginTop: "3px",
                  }}
                >
                  ✔
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="mb-0 text-muted">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
