'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationWidget from '../components/ReservationWidget';
import { useState } from 'react';

export default function RoomsPage() {
  const [filter, setFilter] = useState('all');

  const amenities = [
    'Grown Alchemist Bath Amenities',
    'Petit Ermitage Terry Robes and Slippers',
    '24-hour Private Gym',
    'Same-day Laundry, Dry Cleaning',
    'Gourmet Mini Bar',
    'Very Fast, Complimentary Wi-Fi',
    'Flexible Relationship With Time'
  ];

  const rooms = [
    {
      name: 'Grand Belle Bleue',
      size: '550 sq ft',
      description: 'In the Grand Belle Bleue, time and texture converge. Rare compositions, marble and bronze detailing, and richly layered textiles shape a 550-square-foot environment that feels curated rather than styled. French doors open to reveal a marble bathroom, walk-in closet, and carefully considered views.',
      image: '/assets/img/rooms-and-suites/grand-belle-bleue.jpg',
      features: ['Marble detailing', 'Fireplace', 'Walk-in closet', 'French doors'],
      category: 'luxury'
    },
    {
      name: 'Demi Suite',
      size: '350 sq ft',
      description: 'The 350-square-foot Demi Suite offers a private, art-filled retreat designed for those who prefer to disappear rather than perform. A queen bed, writing desk, and glowing fireplace create a residential rhythm, while curated artwork and rich textiles shape an atmosphere of quiet sophistication.',
      image: '/assets/img/rooms-and-suites/demi-suite.jpg',
      features: ['Queen bed', 'Writing desk', 'Fireplace', 'Original artwork'],
      category: 'standard'
    },
    {
      name: 'Grand Belle Terrace',
      size: '550 sq ft',
      description: 'The 550-square-foot Grand Belle Terrace is a maximalist, art-forward suite conceived by Dana Hollister. French doors open to a private terrace with an outdoor fireplace, extending the interior\'s layered textures and handmade details into the open air.',
      image: '/assets/img/rooms-and-suites/grand-belle-terrace.jpg',
      features: ['Private terrace', 'Outdoor fireplace', 'French doors', 'Art-forward design'],
      category: 'luxury'
    },
    {
      name: 'Demi Double',
      size: '350 sq ft',
      description: 'The Demi Double extends the same cocooned atmosphere with two full-size beds for up to four guests. At 350 square feet, the suite balances privacy with shared experience, anchored by a fireplace and surrounded by original artwork.',
      image: '/assets/img/rooms-and-suites/demi-double.jpg',
      features: ['Two full beds', 'Fireplace', 'Sleeps 4', 'Original artwork'],
      category: 'standard'
    },
    {
      name: 'Belle Suite',
      size: '450 sq ft',
      description: 'Individually designed, the Belle Suite embodies the hotel\'s belief in autonomy and atmosphere. At approximately 450 square feet, it pairs a deluxe king bed with a balcony, marble bathroom, walk-in closet, fireplace, and custom furnishings.',
      image: '/assets/img/rooms-and-suites/belle-suite.jpg',
      features: ['King bed', 'Balcony', 'Marble bathroom', 'Walk-in closet'],
      category: 'premium'
    },
    {
      name: 'Grand Belle Verte',
      size: '550 sq ft',
      description: 'The Grand Belle Verte envelops guests in jewel-toned interiors, vintage fabrics, and surrealist artwork drawn from the hotel\'s evolving collection. At 550 square feet, it offers French doors, a marble bathroom, a walk-in closet, and a fireplace.',
      image: '/assets/img/rooms-and-suites/grand-belle-verte.jpg',
      features: ['Jewel-toned interiors', 'Vintage fabrics', 'Surrealist artwork', 'Fireplace'],
      category: 'luxury'
    },
    {
      name: 'Grand Belle Rouge',
      size: '550 sq ft',
      description: 'The Grand Belle Rouge reads as a living gallery, with handmade Chinoiserie screens, vintage tapestry seating, and art-forward interiors designed by Dana Hollister. A wraparound balcony invites private moments above the city.',
      image: '/assets/img/rooms-and-suites/grand-belle-rouge.jpg',
      features: ['Chinoiserie screens', 'Vintage tapestry', 'Wraparound balcony', 'Gallery-like atmosphere'],
      category: 'luxury'
    },
    {
      name: 'Junior Queen Suite',
      size: '450 sq ft',
      description: 'At 450 square feet, the Junior Queen Suite introduces a sunken living area and private balcony that extend the sense of retreat. A fireplace anchors the space, encouraging longer stays and slower evenings.',
      image: '/assets/img/rooms-and-suites/junior-queen-suite.jpg',
      features: ['Sunken living area', 'Private balcony', 'Fireplace', 'Queen bed'],
      category: 'premium'
    },
    {
      name: 'Junior King Suite',
      size: '450 sq ft',
      description: 'The Junior King Suite pairs a deluxe king bed with a sunken living area and writing desk within approximately 450 square feet. A fireplace and layered interiors reinforce the hotel\'s residential ethos.',
      image: '/assets/img/rooms-and-suites/junior-king-suite.jpg',
      features: ['King bed', 'Sunken living area', 'Writing desk', 'Fireplace'],
      category: 'premium'
    },
    {
      name: 'Executive Suite',
      size: '550 sq ft',
      description: 'Spanning 550 square feet, the Executive Suite deepens the sense of autonomy with generous proportions and a gracious living area. A fireplace and Scandia bedding emphasize rest, while the suite\'s art and detailing reflect the hotel\'s creative spirit.',
      image: '/assets/img/rooms-and-suites/executive-suite.jpg',
      features: ['Living area', 'Fireplace', 'Scandia bedding', 'Curated artwork'],
      category: 'luxury'
    },
    {
      name: 'Executive Suite with Kitchenette',
      size: '550 sq ft',
      description: 'The Executive Suite with Kitchenette offers 550 square feet of self-sufficiency. A sunken living area, fireplace, and fully integrated kitchenette allow for longer, more private stays that unfold at an individual pace.',
      image: '/assets/img/rooms-and-suites/executive-kitchenette-suite.jpg',
      features: ['Full kitchenette', 'Sunken living area', 'Fireplace', 'Extended stay ready'],
      category: 'premium'
    },
    {
      name: 'One Bedroom Suite',
      size: '650 sq ft',
      description: 'At approximately 650 square feet, the One Bedroom Suite offers a distinct separation between living and sleeping spaces. A private bedroom, separate living room, and kitchenette create the feel of a discreet residence above the city.',
      image: '/assets/img/rooms-and-suites/one-bedroom-suite.jpg',
      features: ['Separate living room', 'Private bedroom', 'Kitchenette', '650 sq ft'],
      category: 'luxury'
    }
  ];

  const filteredRooms = filter === 'all' ? rooms : rooms.filter(room => room.category === filter);

  const handleViewDetails = (roomName) => {
    alert(`This is a design demo. Details for ${roomName} would be shown here.`);
  };

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* Hero Section */}
        <section className="rooms-page-hero">
          <div className="hero-overlay">
            <div className="container">
              <h1>Rooms & Suites</h1>
              <p className="hero-subtitle">An Oasis Above the City</p>
              <p className="hero-description">A private world where lovers, friends, and strangers meet.</p>
            </div>
          </div>
        </section>

        {/* Reservation Widget */}
        <section className="reservation-section">
          <div className="container">
            <ReservationWidget />
          </div>
        </section>

        {/* Amenities Section */}
        <section className="amenities-section">
          <div className="container">
            <h2 className="section-title">Provisions for Living Well</h2>
            <div className="amenities-grid">
              {amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <span className="amenity-check">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="filter-section">
          <div className="container">
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Suites
              </button>
              <button 
                className={`filter-btn ${filter === 'standard' ? 'active' : ''}`}
                onClick={() => setFilter('standard')}
              >
                Standard Suites
              </button>
              <button 
                className={`filter-btn ${filter === 'premium' ? 'active' : ''}`}
                onClick={() => setFilter('premium')}
              >
                Premium Suites
              </button>
              <button 
                className={`filter-btn ${filter === 'luxury' ? 'active' : ''}`}
                onClick={() => setFilter('luxury')}
              >
                Luxury Suites
              </button>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="rooms-page-content">
          <div className="container">
            <div className="rooms-grid-page">
              {filteredRooms.map((room, index) => (
                <div key={index} className="room-card-page">
                  <div className="room-image-wrapper">
                    <img src={room.image} alt={room.name} />
                    <div className="room-size-badge">{room.size}</div>
                  </div>
                  <div className="room-info-wrapper">
                    <h3>{room.name}</h3>
                    <div className="room-features">
                      {room.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                    <p>{room.description}</p>
                    <button 
                      onClick={() => handleViewDetails(room.name)} 
                      className="btn btn-dark"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
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
