import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <h5>About Company</h5>
            <p>
              sree sharma Astrology offers expert services in Vastu, Homa, Marriages,
              Muhurtas, and Astrology to bring harmony and success.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Astrology</li>
              <li>Vastu</li>
              <li>Homas</li>
              <li>Muhurtas</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Homam</h5>
            <ul className="list-unstyled">
              <li>Ganapathi Homam</li>
              <li>Vastu Homam</li>
              <li>Rudra Homam</li>
              <li>Ayush Homam</li>
              <li>Chandi Homam</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Get in Touch!</h5>
            <address>
              9/251-1, Gowri Sankara Puram,<br />
              Gudivada, Krishna,<br />
              Andhra Pradesh - 521###.<br />
              <br />
              📧 astrologysreesharma@gmail.com<br />
              📞 70#########
            </address>
          </div>
        </div>
        <hr className="mt-4" />
        <p className="text-center mb-0">© 2025 Sree sharma Astrology. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
