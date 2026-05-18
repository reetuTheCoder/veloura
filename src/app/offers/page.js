'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationWidget from '../components/ReservationWidget';

export default function OffersPage() {
  const offers = [
    {
      title: 'Extend Your Pleasure',
      description: 'Created for guests who choose to stay a little longer, Extend Your Pleasure offers preferred rates on stays of three nights or more. The offer invites a slower rhythm, encouraging time to settle into the suite, the rooftop, and the quiet rituals of being here.',
      image: '/assets/img/offers/extend-pleasure.jpg'
    },
    {
      title: 'Early Bird',
      description: 'For those certain of their plans, the Early Bird offer rewards intention. Guests who reserve five or more nights in advance enjoy preferred rates of up to 20% on non-refundable reservations.',
      image: '/assets/img/offers/plan-ahead.jpg'
    }
  ];

  return (
    <>
      {/* <Header /> */}
      <main>
        <section className="page-hero offers-hero">
          <div className="hero-overlay">
            <div className="container">
              <h1>Special Offers</h1>
              <p>Exclusive rates and packages for your perfect stay</p>
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
            <div className="offers-grid-page">
              {offers.map((offer, index) => (
                <div key={index} className="offer-card-page">
                  <img src={offer.image} alt={offer.title} />
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <button onClick={() => alert('Demo: Offer details')} className="btn btn-dark">
                    LEARN MORE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
