import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import services from '../data/services';

export default function ServiceDetail(){
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  if(!service){
    return (
      <section className="section">
        <div className="container">
          <h2>Service not found</h2>
          <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container" style={{display:'grid', gap:'1rem'}}>
        <div style={{display:'flex', gap:'1rem', alignItems:'flex-start', flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:280}}>
            <img src={service.image} alt={service.title} style={{width:'100%', borderRadius:8}}/>
          </div>
          <div style={{flex:2, minWidth:260}}>
            <h1>{service.title}</h1>
            <p style={{color:'#666'}}>{service.long}</p>
            <p style={{marginTop:10}}><strong>Price:</strong> {service.price}</p>
            <div style={{marginTop:12}}>
              <button style={{padding:'0.6rem 0.9rem', background:'#7b3fe4', color:'#fff', border:0, borderRadius:8}}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
