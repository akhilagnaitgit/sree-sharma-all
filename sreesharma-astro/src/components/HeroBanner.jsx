import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroBanner(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Sree Sharma Astrology — Vaastu, Homas, Muhurta & Kundali Services</h1>
          <p>Traditional Vedic services for homes, businesses and important life events. Accurate muhurta selection, homa ceremonies, Vaastu remedies and marriage matching.</p>
          <div style={{marginTop:'1rem'}}>
            <Link to="/services" style={{padding:'0.6rem 0.9rem', borderRadius:8, background:'#7b3fe4', color:'#fff', textDecoration:'none'}}>Our Services</Link>
            <Link to="/contact" style={{marginLeft:12, textDecoration:'none'}}>Contact</Link>
          </div>
        </div>
        <div style={{borderRadius:10, overflow:'hidden', boxShadow:'0 6px 18px rgba(0,0,0,0.06)'}}>
          <img src="/assets/hero.jpg" alt="Homa ritual" style={{width:'100%', height: '100%', objectFit:'cover', minHeight:220}}/>
        </div>
      </div>
    </section>
  );
}
