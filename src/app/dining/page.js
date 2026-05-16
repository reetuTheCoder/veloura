'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationWidget from '../components/ReservationWidget';

export default function DiningPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero dining-hero">
          <div className="hero-overlay">
            <div className="container">
              <h1>Dining</h1>
              <p>Rooftop dining with Mediterranean influences</p>
            </div>
          </div>
        </section>
        <section className="reservation-section">
          <div className="container">
            <ReservationWidget />
          </div>
        </section>
        <section className="page-content">
          <div className="container">
            <div className="dining-content">
              <img src="/assets/img/dining/image-4.jpeg" alt="Rooftop Dining" className="dining-main-image" />
              <div className="dining-text">
                <h2>Rooftop Dining Experience</h2>
                <p>
                  Our rooftop dining unfolds within a secluded, garden-like setting where Mediterranean influences 
                  meet seasonal ingredients and shared plates. We create an atmosphere that feels intimate and 
                  immersive, offering elevated views without ever feeling exposed.
                </p>
                <button onClick={() => alert('Demo: Menu')} className="btn btn-dark">
                  EXPLORE MENU
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
