
// import React, { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import muhurtaData from "../data/muhurtaData";
// import homaData from "../data/homaData";
// import marriageMatchingData from "../data/marriageMatchingData";


// export default function MarriageMatchingPage() {
  
//   const staticCards = [
// { id: 1, title: 'Compatibility Overview', subtitle: 'Summary of planetary matches', text: 'Basic compatibility score and short notes.' },
// { id: 2, title: 'Dosha Check', subtitle: 'Manglik / Kuja Dosha', text: 'Quick dosha presence check and short guidance.' },
// { id: 3, title: 'Guna Milan', subtitle: 'Ashtakoot matching', text: 'Guna score breakdown in brief.' },
// { id: 4, title: 'Suggested Remedies', subtitle: 'Simple remedies', text: 'Short list of remedial suggestions.' }
// ]
//   return (
//     <div className="pt-5">
//       {/* ============ 1️⃣ Banner ============ */}
//       <section className="position-relative text-white text-center">
//         <img
//           src="https://iiag.co.in/media/2262/1740745364.webp"
//           alt="Homas Banner"
//           className="w-100"
//           style={{ height: "400px", objectFit: "cover" }}
//         />
//         <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//              style={{ background: "rgba(0,0,0,0.45)" }}>
//           <h1 className="display-4 fw-bold">Marriage-Matching Selection</h1>
//         </div>
//       </section>

//       {/* ============ 2️⃣ Form + Description + Counters ============ */}
//       <section className="container py-5">
//         <div className="row align-items-center">
//           {/* Form */}
//           <div className="col-md-5">
//             <h3 className="mb-3 text-primary">Get Your Auspicious Time</h3>
//             <form className="p-4 border rounded-3 bg-light shadow-sm">
//               <div className="row g-3">
//                 <div className="col-md-12">
                  
//                   <input type="text" className="form-control" placeholder="Your Name" />
//                 </div>
//                 <div className="col-md-12">
                  
//                   <input type="text" className="form-control" placeholder="Your Occupation" />
//                 </div>
//                 <div className="col-md-12">
//                   <input type="email" className="form-control" placeholder="example@mail.com" />
//                 </div>
//                 <div className="col-md-12">
//                   <input type="text" className="form-control" placeholder="Your Phone" />
//                 </div>
//                 <div className="col-md-12">
//                   <input type="date" className="form-control" />
//                 </div>
//                 <div className="col-md-12">
//                   <input type="text" className="form-control" placeholder="Your Birthplace" />
//                 </div>
//                 <div className="col-12">
//                   <label className="form-label">Address</label>
//                   <textarea className="form-control" rows="2"></textarea>
//                 </div>
//                 <div className="col-12 text-center mt-3">
//                   <button className="btn btn-primary px-4">Submit</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="col-md-1">

//           </div>

//           {/* Right Description */}
//           <div className="col-md-6 mt-1 mt-lg-0">
//             <h3 className="text-dark">Why Marriage-Matching Matter?</h3>
//             <p>
//               An auspicious muhurta ensures harmony and success by aligning your
//               important moments with planetary favorability. Our experts use
//               authentic Vedic methods to calculate ideal timings for your
//               spiritual and personal milestones.
//             </p>

//             <div className="row text-center mt-4">
//               <div className="col-4">
//                 <h2 className="text-primary">
//                   <CountUp end={100} duration={3} />%
//                 </h2>
//                 <p>Authentic Vedic Calculations</p>
//               </div>
//               <div className="col-4">
//                 <h2 className="text-primary">
//                   <CountUp end={22} duration={3} />
//                 </h2>
//                 <p>Years of Expertise</p>
//               </div>
//               <div className="col-4">
//                 <h2 className="text-primary">
//                   <CountUp end={10} duration={3} />
//                 </h2>
//                 <p>Certified Astrologers</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ 3️⃣ Homas Services ============ */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-4 text-primary">Marriage Services</h2>
//           <p className="text-center mb-5">
//             Our astrologers provide personalized muhurta calculations for a
//             variety of events, ensuring optimal results based on planetary influences.
//           </p>
//           <div className="row">
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                   <strong>Wedding Muhurta</strong> – Find the most auspicious time for marriage.
//                 </li>
//                 <li className="list-group-item">
//                   <strong>Griha Pravesh Muhurta</strong> – Ideal dates for entering a new home.
//                 </li>
//                 <li className="list-group-item">
//                   <strong>Naamkaran Muhurta</strong> – Selecting the best time for naming ceremonies.
//                 </li>
//                 <li className="list-group-item">
//                   <strong>Annaprashan Muhurta</strong> – Determining the right moment for a baby’s first solid food.
//                 </li>
//                 <li className="list-group-item">
//                   <strong>Business & Career Muhurta</strong> – Favorable timings for job changes, business launches, and investments.
//                 </li>
//               </ul>
//             </div>
//             <div className="col-md-6 text-center">
//               <img src="/assets/muhurta-services.jpg" alt="Muhurta Services" className="img-fluid rounded-3 shadow" />
//             </div>
//           </div>
//         </div>
//       </section>

      

//       {/* ============ 4️⃣ Stats Strip ============ */}
//       <section className="py-4 text-white text-center" style={{ background: "#3b1d85" }}>
//         <div className="container d-flex flex-wrap justify-content-around">
//           <div>
//             <h2><CountUp end={3.9} duration={3} decimals={1} />k+</h2>
//             <p>Successfully Trained</p>
//           </div>
//           <div>
//             <h2><CountUp end={15.8} duration={3} decimals={1} />k+</h2>
//             <p>Classes Completed</p>
//           </div>
//           <div>
//             <h2><CountUp end={97.5} duration={3} decimals={1} />k+</h2>
//             <p>Satisfaction Rate</p>
//           </div>
//           <div>
//             <h2><CountUp end={100.2} duration={3} decimals={1} />k+</h2>
//             <p>Students Community</p>
//           </div>
//         </div>
//       </section>

//       {/* ============ 5️⃣ Cards Section ============ */}
// {/* ✅ Beautiful Cards Section */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary mb-4 fw-bold" data-aos="fade-up">
//             Auspicious Muhurtas
//           </h2>

//           <div className="row g-4">
//             {marriageMatchingData.map((item, index) => (
//               <div className="col-lg-4 col-md-6 col-sm-12" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                 <div className="muhurta-card shadow-sm rounded-4 overflow-hidden bg-white border-0">
            
//                   {/* Image */}
//                   <div className="muhurta-card-img-wrapper">
//                     <img src={item.img} alt={item.title} className="muhurta-card-img" />
//                   </div>
            
//                   {/* Body */}
//                   <div className="p-3">
//                     <h5 className="fw-bold text-dark">{item.title}</h5>
//                     <p className="mb-1 text-muted">⭐ {item.rating}</p>
//                     <p className="fw-bold text-primary mb-2">{item.price}</p>
            
//                     <Link
//                       to={`/marriage-matching/${item.slug}`}
//                       className="btn btn-primary w-100 mt-2"
//                       style={{ borderRadius: "10px" }}
//                     >
//                       View Details
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


import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoSection from "../components/InfoSection";

export default function MarriageMatchingPage() {
  const staticCards = [
    { id: 1, title: 'Compatibility Overview', subtitle: 'Summary of planetary matches', text: 'Basic compatibility score and short notes.', img: 'https://i.ibb.co/d6p7D8Y/compatibility.jpg' },
    { id: 2, title: 'Dosha Check', subtitle: 'Manglik / Kuja Dosha', text: 'Quick dosha presence check and short guidance.', img: 'https://i.ibb.co/42KGfBs/dosha.jpg' },
    { id: 3, title: 'Guna Milan', subtitle: 'Ashtakoot matching', text: 'Guna score breakdown in brief.', img: 'https://i.ibb.co/7G4Jx0v/guna.jpg' },
    { id: 4, title: 'Suggested Remedies', subtitle: 'Simple remedies', text: 'Short list of remedial suggestions.', img: 'https://i.ibb.co/1X3BRdg/remedies.jpg' }
  ];

  return (
    <div className="pt-5">

      {/* ============ Banner ============ */}
      <section className="position-relative text-white text-center">
        <img
          src="https://iiag.co.in/media/2262/1740745364.webp"
          alt="Marriage Matching Banner"
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.45)" }}>
          <h1 className="display-4 fw-bold">Marriage Matching</h1>
        </div>
      </section>

      {/* ============ Form Section ============ */}
      <section className="container py-5">
        <div className="row align-items-start">

          {/* New Updated Form */}
          <div className="col-md-6">
            <h3 className="mb-3 text-primary">Enter Details for Marriage Matching</h3>
            <form className="p-4 border rounded-3 bg-light shadow-sm">

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name of Male / Groom</label>
                  <input type="text" className="form-control" placeholder="Male Full Name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Full Name of Female / Bride</label>
                  <input type="text" className="form-control" placeholder="Female Full Name" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">DOB of Male</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">DOB of Female</label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Time of Birth of Male</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Time of Birth of Female</label>
                  <input type="time" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Place of Birth of Male</label>
                  <input type="text" className="form-control" placeholder="City, State" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Place of Birth of Female</label>
                  <input type="text" className="form-control" placeholder="City, State" />
                </div>

                <div className="col-12">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Enter phone number" />
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="example@mail.com" />
                </div>

                <div className="col-12">
                  <label className="form-label">Language</label>
                  <input type="text" className="form-control" placeholder="Preferred language" />
                </div>

                <div className="col-12 text-end mt-3">
                  <button className="btn btn-primary px-4">Pay Now</button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side Text */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h3 className="text-dark">Why Marriage Matching Matters?</h3>
            <p>
              Horoscope matching ensures compatibility between partners using Vedic astrology.
              Our astrologers deeply analyze planetary positions for long-term harmony, stability,
              and understanding in married life.
            </p>

            <div className="row text-center mt-4">
              <div className="col-4">
                <h2 className="text-primary"><CountUp end={100} duration={3} />%</h2>
                <p>Astro Accuracy</p>
              </div>
              <div className="col-4">
                <h2 className="text-primary"><CountUp end={22} duration={3} /></h2>
                <p>Years Experience</p>
              </div>
              <div className="col-4">
                <h2 className="text-primary"><CountUp end={10} duration={3} /></h2>
                <p>Expert Astrologers</p>
              </div>
            </div>
            <br />
          <h2 className="text-center mb-4 text-primary">Marriage Services</h2>
          <p className="text-center mb-5">Our astrologers provide personalized muhurta calculations and marriage matching analyses for a variety of needs, ensuring optimal results based on planetary influences.</p>

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
        </div>
      </section>


<InfoSection
  img="/assets/MarriageMatchingMain.png"
  subtitle="Find Your Ideal Match"
  title="Kundali Matching & Compatibility"
  points={[
    {
      title: "Guna Milan Analysis",
      desc: "Ashtakoota matching based on 36-point system to check compatibility."
    },
    {
      title: "Manglik / Dosha Check",
      desc: "Evaluate planetary doshas affecting marriage stability."
    },
    {
      title: "Marriage Prediction",
      desc: "Insights on timing of marriage and relationship success."
    },
    {
      title: "Remedy Guidance",
      desc: "Solutions to reduce dosha effects and improve compatibility."
    }
  ]}
/>


      {/* ============ STATIC CARDS SECTION ============ */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-4 fw-bold">Marriage Matching Analysis</h2>

          <div className="row g-4">
            {staticCards.map((card) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={card.id}>
                <div className="shadow-sm rounded-4 overflow-hidden bg-white border-0 p-0">

                  <img src={card.img} alt={card.title} className="w-100" style={{ height: "180px", objectFit: "cover" }} />

                  <div className="p-3">
                    <h5 className="fw-bold text-dark">{card.title}</h5>
                    <p className="text-muted mb-1">{card.subtitle}</p>
                    <p className="text-secondary small">{card.text}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============ Homas / Marriage Services ============ */}
      <section className="py-5">
        <div className="container">
          {/* <h2 className="text-center mb-4 text-primary">Marriage Services</h2>
          <p className="text-center mb-5">Our astrologers provide personalized muhurta calculations and marriage matching analyses for a variety of needs, ensuring optimal results based on planetary influences.</p> */}
          <div className="row">
            <div className="col-md-6">
              {/* <ul className="list-group list-group-flush">
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
              </ul> */}
            </div>
            {/* <div className="col-md-6 text-center">
              <img src="/assets/muhurta-services.jpg" alt="Muhurta Services" className="img-fluid rounded-3 shadow" />
            </div> */}
          </div>
        </div>
      </section>

      {/* ============ Stats Strip ============ */}
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

    </div>
  );
}

