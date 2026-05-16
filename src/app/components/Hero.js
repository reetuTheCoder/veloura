'use client';

import { useState, useEffect } from 'react';
import ReservationWidget from './ReservationWidget';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Images from your public/assets/img/home directory
  const slides = [
    '/assets/img/home/image-10.jpeg',
    '/assets/img/home/image-11.jpeg',
    '/assets/img/home/image-12.jpeg',
    '/assets/img/home/image-13.jpeg',
    '/assets/img/home/image-14.jpeg',
    '/assets/img/home/image-15.jpeg',
    '/assets/img/home/image-16.jpeg',
  ];

  // Auto Slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          It's A Pleasure Doing<br />Pleasure With You
        </h1>

        {/* Make a Reservation Button that scrolls to widget */}
        <button 
          onClick={() => {
            document.querySelector('.reservation-widget')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }} 
          className="btn hero-reservation-btn"
        >
          MAKE A RESERVATION
        </button>

        {/* Reusable Reservation Widget */}
        <ReservationWidget />
      </div>

      {/* Slider Controls */}
      <div className="slide-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
