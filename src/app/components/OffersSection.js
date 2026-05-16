'use client';
import { useState } from 'react';

export default function OffersSection() {
  const [currentOffer, setCurrentOffer] = useState(0);
  
  const offers = [
    {
      title: 'Extend Your Pleasure',
      description: 'Created for guests who choose to stay a little longer, Extend Your Pleasure offers preferred rates on stays of three nights or more. The offer invites a slower rhythm, encouraging time to settle into the suite, the rooftop, and the quiet rituals of being here. It reflects the hotel’s ethos of autonomy and immersion rather than fleeting visits.',
      image: '/assets/img/offers/image-3.jpeg'
    },
    {
      title: 'Early Bird',
      description: 'For those certain of their plans, the Early Bird offer rewards intention. Guests who reserve five or more nights in advance enjoy preferred rates of up to 20% on non-refundable reservations. It is designed for travelers who move deliberately and value continuity, reflecting the hotel’s long-stay sensibility and commitment to an unhurried experience.',
      image: '/assets/img/offers/image-2.jpeg'
    }
  ];

  const handleLearnMore = (offerTitle) => {
    alert(`This is a design demo. More details about ${offerTitle} would be shown here.`);
  };

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <section id="offers" className="section offers-section">
      <div className="container">
        <div className="section-subtitle">Featured</div>
        <h2 className="section-title">Offers</h2>
        <p className="section-description">
          Our preferred rates reward guests who choose to extend their pleasure or plan ahead. 
          We shape our offers as invitations to settle in and experience the house at its intended pace.
        </p>
        
        <div className="offers-slider">
          <button className="slider-nav prev" onClick={prevOffer}>‹</button>
          <div className="offer-card">
            <div className="offer-image">
              <img src={offers[currentOffer].image} alt={offers[currentOffer].title} />
            </div>
            <div className="offer-info">
              <h3>{offers[currentOffer].title}</h3>
              <p>{offers[currentOffer].description}</p>
              <button onClick={() => handleLearnMore(offers[currentOffer].title)} className="btn btn-dark">LEARN MORE</button>
            </div>
          </div>
          <button className="slider-nav next" onClick={nextOffer}>›</button>
        </div>
        
        <div className="slider-dots">
          {offers.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentOffer ? 'active' : ''}`}
              onClick={() => setCurrentOffer(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
