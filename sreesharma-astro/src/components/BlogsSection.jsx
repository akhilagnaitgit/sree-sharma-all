// src/components/BlogsSection.jsx
import React from 'react';
export default function BlogsSection(){
  const blogs = [
    {title:'Significance of Vaastu Directions', image:'/assets/blog1.jpg'},
    {title:'Benefits of Ganapathi Homa', image:'/assets/blog2.jpg'},
    {title:'Choosing the Right Muhurta', image:'/assets/blog3.jpg'}
  ];
  return (
    <section className="section" style={{background:'#fafafa'}}>
      <div className="container">
        <h2 style={{textAlign:'center'}}>Latest Blogs</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))',gap:'1rem',marginTop:'1rem'}}>
          {blogs.map((b,i)=>(
            <div key={i} style={{border:'1px solid #eee', borderRadius:10, overflow:'hidden', background:'#fff'}}>
              <img src={b.image} alt={b.title} style={{width:'100%',height:160,objectFit:'cover'}}/>
              <div style={{padding:'0.75rem'}}>
                <h3 style={{margin:'0 0 0.25rem 0'}}>{b.title}</h3>
                <a href="#" style={{color:'#7b3fe4',textDecoration:'none',fontSize:'0.9rem'}}>Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
