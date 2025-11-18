import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({service}){
  return (
    <>
    
    <article className="card">
      <div style={{height:140, overflow:'hidden', borderRadius:8}}>
        <img src={service.image} alt={service.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
      </div>
      <div style={{flex:1}}>
        <h3>{service.title}</h3>
        <p style={{color:'#666'}}>{service.short}</p>
      </div>
      <div style={{marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:600}}>{service.price}</div>
        <Link to={`/services/${service.slug}`} style={{textDecoration:'none'}}>View</Link>
      </div>
    </article>
    </>
  );
}
