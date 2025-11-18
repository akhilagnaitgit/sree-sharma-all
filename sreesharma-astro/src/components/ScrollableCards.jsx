import React from 'react';
import Slider from 'react-slick';

export default function ScrollableCards({ title, items, reverse }) {
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   rtl: reverse,
  //   arrows: false,
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: 2 } },
  //     { breakpoint: 600, settings: { slidesToShow: 1 } },
  //   ],
  // };
  const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1000,
  cssEase: "linear",
  rtl: reverse,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};


  return (
    <section className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{title}</h2>
        <Slider {...settings}>
          {items.map((item, i) => (
            <div key={i} style={{ padding: '0 8px', width: '100%' }}>
              <div
                style={{
                  border: '1px solid #eee',
                  borderRadius: 10,
                  overflow: 'hidden',
                  background: '#fff',
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h3>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '.9rem' }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
