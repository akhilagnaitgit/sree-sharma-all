import React from 'react';
import Slider from 'react-slick';

export default function HomeCarousel() {
  const images = [
    'https://t3.ftcdn.net/jpg/13/52/67/86/360_F_1352678692_LRnNN9vFG9dUVZv9ci28DMECUlTkTuQo.jpg',
    'https://media.istockphoto.com/id/1344523047/photo/zodiac-signs-inside-of-horoscope-circle-astrology-in-the-sky-with-many-stars-and-moons.jpg?s=612x612&w=0&k=20&c=p0JHuPuVfUi-EYB0bMrDYlANtltRREwANyPkE1BOClQ=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIJ7vjXFVPVHkQZSuko2VLk4Y2N2epfgJtYxbSw7kpIZbmSh17FkhqyE&ssel3.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`Slide ${i}`}
              style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
