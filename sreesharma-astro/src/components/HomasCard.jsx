import React from 'react';
import { Link } from 'react-router-dom';

export default function HomasCard({homas}){
  return (
    <>
    
    <article className="card">
      <div style={{height:140, overflow:'hidden', borderRadius:8}}>
        <img src={homas.image} alt={homas.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
      </div>
      <div style={{flex:1}}>
        <h3>{homas.title}</h3>
        <p style={{color:'#666'}}>{homas.short}</p>
      </div>
      <div style={{marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:600}}>{homas.price}</div>
        <Link to={`/homas/${homas.slug}`} style={{textDecoration:'none'}}>View</Link>
      </div>
    </article>
    </>
  );
}
