import React from 'react';
import { Link } from 'react-router-dom'; 
const homas = [
  { title: 'Ganapathi Homa', image: '/assets/homa1.jpg' },
  { title: 'Navagraha Homa', image: '/assets/homa2.jpg' },
  { title: 'Maha Mrityunjaya Homa', image: '/assets/homa3.jpg' },
  { title: 'Lakshmi Kubera Homa', image: '/assets/homa4.jpg' },
  
];

export default function HomasSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Homas We Offer</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {homas.map((homa, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <img
                src={homa.image}
                alt={homa.title}
                style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }}
              />
              <h3>{homa.title}</h3>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            style={{
              background: '#e39494ff',
              color: '#8e49a1ff',
              border: 0,
              borderRadius: 8,
              padding: '0.6rem 1rem',
            }}
          ><Link to="/homas">View all Homas</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
