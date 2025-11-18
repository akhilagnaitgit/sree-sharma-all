import React from 'react';
import services from '../data/services';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage(){
  return (
    <section className="section">
      <div className="container">
        <h1>Services</h1>
        <p style={{color:'#666'}}>Choose a service to know more.</p>
        <div className="cards-grid" style={{marginTop:12}}>
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
      </div>
    </section>
  );
}
