// src/components/FAQs.jsx
import React, { useState } from 'react';
export default function FAQs(){
  const data = [
    {q:'How to book a Homa?', a:'Use the Contact page or call us to schedule any ritual.'},
    {q:'Are services available online?', a:'Yes, consultations can be arranged through phone or video call.'},
    {q:'Do you provide pooja materials?', a:'Yes, all homa materials can be arranged as per need.'},
  ];
  const [open,setOpen]=useState(null);
  return (
    <section className="section">
      <div className="container">
        <h2>FAQs</h2>
        {data.map((f,i)=>(
          <div key={i} style={{borderBottom:'1px solid #eee', padding:'0.5rem 0'}}>
            <div onClick={()=>setOpen(open===i?null:i)} style={{cursor:'pointer', fontWeight:600}}>{f.q}</div>
            {open===i && <p style={{color:'#555', marginTop:'.25rem'}}>{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
