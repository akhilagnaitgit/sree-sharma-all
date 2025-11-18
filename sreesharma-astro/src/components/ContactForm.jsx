// src/components/ContactForm.jsx
import React, { useState } from 'react';

export default function ContactForm(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''});
  function onChange(e){ setForm({...form, [e.target.name]: e.target.value}); }
  function onSubmit(e){
    e.preventDefault();
    // For now we just log — later connect to backend
    console.log('contact:', form);
    alert('Thanks! Your inquiry has been recorded (mock).');
    setForm({name:'',email:'',phone:'',message:''});
  }
  return (
    <form onSubmit={onSubmit} style={{display:'grid', gap:10, maxWidth:700}}>
      <input required name="name" placeholder="Name" value={form.name} onChange={onChange} />
      <input required name="email" placeholder="Email" value={form.email} onChange={onChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
      <textarea name="message" placeholder="Message" value={form.message} onChange={onChange} rows={6} />
      <button type="submit" style={{padding:'0.6rem 0.9rem', background:'#7b3fe4', color:'#fff', border:0, borderRadius:8}}>Send</button>
    </form>
  );
}
