// GalleryPage.jsx
import React from 'react';
import services from '../data/services';

export default function GalleryPage(){
  return (
    <section className="section">
      <div className="container">
        <h1>Gallery</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:10}}>
          {services.map(s => (
            <div key={s.id} style={{borderRadius:8, overflow:'hidden'}}>
              <img src={s.image} alt={s.title} style={{width:'100%', height:160, objectFit:'cover'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
