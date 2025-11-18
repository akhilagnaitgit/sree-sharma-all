import React from 'react';

export default function SplitSection({ title, content, image, reverse }) {
  return (
    <section className="section" style={{ background: '#fafafa' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: reverse ? 'row-reverse' : 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', borderRadius: 10, objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2>{title}</h2>
          <p style={{ color: '#555' }}>{content}</p>
        </div>
      </div>
    </section>
  );
}
