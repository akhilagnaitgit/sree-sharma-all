// src/components/Testimonials.jsx
import React from 'react';
export default function Testimonials(){
  const data = [
    {name:'Ravi', msg:'Excellent homa service and guidance!'},
    {name:'Sowmya', msg:'Vaastu remedies really helped us.'},
    {name:'Harish', msg:'Accurate Muhurta selection and detailed report.'}
  ];
  return (
    <section className="section" style={{background:'#fafafa'}}>
      <div className="container" style={{textAlign:'center'}}>
        <h2>Testimonials</h2>
        <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))', marginTop:'1rem'}}>
          {data.map((t,i)=>(
            <div key={i} style={{padding:'1rem', background:'#fff', borderRadius:10, border:'1px solid #eee'}}>
              <p style={{fontStyle:'italic', color:'#555'}}>"{t.msg}"</p>
              <h4 style={{marginTop:'.5rem'}}>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
