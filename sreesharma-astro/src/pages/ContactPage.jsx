import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* 1️⃣ Banner */}
      <section className="position-relative text-center text-white">
        <img
          src="https://iiag.co.in/media/2262/1740745364.webp"
          alt="Contact Banner"
          className="w-100"
          style={{ height: "300px", objectFit: "cover", filter: "brightness(60%)" }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ zIndex: 1 }}
        >
          <h1 className="fw-bold display-5">Contact Us</h1>
          <p>We’d love to hear from you — connect with Sree Sharma Astrology</p>
        </div>
      </section>

      {/* 2️⃣ Contact Information */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center gy-4">
            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded-3 h-100">
                <FaMapMarkerAlt className="fs-2 text-primary mb-3" />
                <h5>Address</h5>
                <p className="mb-0">
                  9/251-1, Gowri Sankara Puram, Gudivada,
                  <br />
                  Krishna, Andhra Pradesh – 521###.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded-3 h-100">
                <FaPhoneAlt className="fs-2 text-primary mb-3" />
                <h5>Phone</h5>
                <p className="mb-0">+91 70########</p>
                <p>+91 98########</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded-3 h-100">
                <FaEnvelope className="fs-2 text-primary mb-3" />
                <h5>Email</h5>
                <p className="mb-0">astrologysreesharma@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Contact Form */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold text-primary mb-3">Get In Touch</h2>
              <p className="mb-4">
                Have a question about astrology, vastu, or puja bookings?
                Fill out the form below — we’ll respond promptly.
              </p>

              <form className="p-4 bg-light rounded-3 shadow-sm">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center mt-3">
                    <button type="submit" className="btn btn-primary px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="col-lg-6">
              <div className="ratio ratio-4x3 shadow rounded-3 overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9271652740637!2d80.99399671480487!3d16.4329638886519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f22b6b4f26cb%3A0x315fdd1ebec8ac31!2sGudivada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1699552646469!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ CTA Strip */}
      <section
        className="py-4 text-center text-white"
        style={{ background: "#3b1d85" }}
      >
        <div className="container">
          <h4>Connect with Sree Sharma Astrology</h4>
          <p className="mb-0">Bringing harmony, prosperity & divine guidance</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
