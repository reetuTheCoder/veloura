'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationWidget from '../components/ReservationWidget';
import { useState } from 'react';

export default function AttractionsPage() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'The Getty Center',
      description: 'Perched high above the city, this architectural landmark pairs world-class art with sculpted gardens and panoramic views that stretch to the Pacific on clear days.',
      fullDescription: 'The Getty Center offers a breathtaking combination of architecture, gardens, and art collections. Designed by Richard Meier, the campus features travertine pavilions connected by gardens and stunning views of Los Angeles. The collection includes pre-20th-century European paintings, drawings, illuminated manuscripts, sculpture, and decorative arts. Free admission, parking fee applies.',
      image: '/assets/img/attractions/getty-center.jpg',
      address: '1200 Getty Center Dr, Los Angeles, CA 90049',
      distance: '15 min drive',
      category: 'culture',
      hours: 'Tue-Sun 10am-5:30pm',
      website: 'www.getty.edu',
      tips: 'Visit on clear days for best views. Free guided tours available.'
    },
    {
      name: 'Sunset Strip',
      description: 'A storied stretch of neon, music history, legendary hotels, and late-night energy that has defined generations of Los Angeles nightlife.',
      fullDescription: 'The Sunset Strip is a 1.5-mile stretch of Sunset Boulevard that passes through West Hollywood. Famous for its vibrant nightlife, historic music venues like the Whisky a Go Go and The Roxy Theatre, and iconic landmarks like the Chateau Marmont. Experience the energy that has inspired musicians and artists for decades.',
      image: '/assets/img/attractions/sunset-strip.jpg',
      address: 'Sunset Blvd, West Hollywood, CA 90069',
      distance: '5 min walk',
      category: 'nightlife',
      hours: '24/7',
      website: 'www.visitwesthollywood.com',
      tips: 'Best experienced at night. Many venues have live music.'
    },
    {
      name: 'Melrose Arts District',
      description: 'Independent galleries, design studios, and eclectic boutiques line this creative corridor, offering a curated glimpse into the city\'s evolving aesthetic.',
      fullDescription: 'The Melrose Arts District is a hub of creativity featuring contemporary art galleries, vintage shops, designer boutiques, and innovative restaurants. From the iconic Paul Smith pink wall to emerging artist spaces, this neighborhood represents the cutting edge of LA\'s cultural scene.',
      image: '/assets/img/attractions/melrose-district.jpg',
      address: 'Melrose Ave, Los Angeles, CA 90069',
      distance: '10 min drive',
      category: 'shopping',
      hours: 'Varies by store, typically 11am-7pm',
      website: 'www.melroseavenue.com',
      tips: 'Perfect for Instagram photos. Visit during weekdays for fewer crowds.'
    },
    {
      name: 'Hollywood Bowl',
      description: 'An open-air amphitheater set in the hills, where summer evenings are scored by orchestras, headliners, and the shared hush before the music begins.',
      fullDescription: 'The Hollywood Bowl is one of the largest natural amphitheaters in the world, famous for its iconic band shell and summer concert series. Home to the Hollywood Bowl Orchestra and the Los Angeles Philharmonic, it hosts everything from classical music to jazz, pop, and rock concerts under the stars.',
      image: '/assets/img/attractions/hollywood-bowl.jpg',
      address: '2301 N Highland Ave, Los Angeles, CA 90068',
      distance: '20 min drive',
      category: 'entertainment',
      hours: 'Seasonal (June-September)',
      website: 'www.hollywoodbowl.com',
      tips: 'Bring a picnic and rent a cushion for comfort. Park and ride recommended.'
    },
    {
      name: 'Griffith Observatory',
      description: 'A hilltop icon that blends astronomy and Art Deco elegance, delivering sweeping city views by day and a front-row seat to the stars by night.',
      fullDescription: 'Perched on the southern slope of Mount Hollywood, Griffith Observatory offers spectacular views of the Los Angeles basin and the Hollywood Sign. Visit the state-of-the-art planetarium, view celestial objects through historic telescopes, and explore exhibits on space and science—all free of charge.',
      image: '/assets/img/attractions/griffith-observatory.jpg',
      address: '2800 E Observatory Rd, Los Angeles, CA 90027',
      distance: '25 min drive',
      category: 'attractions',
      hours: 'Tue-Fri 12pm-10pm, Sat-Sun 10am-10pm',
      website: 'www.griffithobservatory.org',
      tips: 'Parking is limited. Visit on weekdays or take the shuttle.'
    },
    {
      name: 'Rodeo Drive',
      description: 'World-renowned luxury shopping destination featuring flagship boutiques of the most prestigious fashion houses.',
      fullDescription: 'Rodeo Drive in Beverly Hills is synonymous with luxury shopping. From Gucci to Cartier, this iconic three-block stretch offers the ultimate retail experience with personalized service and exclusive collections found nowhere else in the world.',
      image: '/assets/img/attractions/rodeo-drive.jpg',
      address: 'Rodeo Dr, Beverly Hills, CA 90210',
      distance: '15 min drive',
      category: 'shopping',
      hours: '10am-7pm daily',
      website: 'www.rodeodrive-shop.com',
      tips: 'Valet parking available. Visit during golden hour for great photos.'
    },
    {
      name: 'Runyon Canyon Park',
      description: 'A favorite hiking destination offering stunning views of the Hollywood Sign, the city, and the ocean.',
      fullDescription: 'Runyon Canyon is a 160-acre park at the eastern end of the Santa Monica Mountains. Popular with locals and celebrities alike, it features challenging hiking trails, off-leash dog areas, and some of the best panoramic views of Los Angeles.',
      image: '/assets/img/attractions/runyon-canyon.jpg',
      address: '2000 N Fuller Ave, Los Angeles, CA 90046',
      distance: '10 min drive',
      category: 'outdoor',
      hours: 'Sunrise to sunset',
      website: 'www.laparks.org/runyon',
      tips: 'Bring water and sunscreen. Early morning hikes are best.'
    },
    {
      name: 'The Beverly Hills Hotel',
      description: 'Iconic "Pink Palace" that has hosted Hollywood royalty since 1912.',
      fullDescription: 'Known as the "Pink Palace," this legendary hotel has been a symbol of Hollywood glamour for over a century. Explore the famous Polo Lounge, walk through lush tropical gardens, and soak in old Hollywood charm at this architectural landmark.',
      image: '/assets/img/attractions/beverly-hills-hotel.jpg',
      address: '9641 Sunset Blvd, Beverly Hills, CA 90210',
      distance: '12 min drive',
      category: 'landmarks',
      hours: 'Open 24/7',
      website: 'www.dorchestercollection.com',
      tips: 'Stop for a famous Polo Lounge martini or afternoon tea.'
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="attractions-hero-new">
          <div className="hero-overlay">
            <div className="container">
              <h1>Local Attractions</h1>
              <p className="hero-subtitle">Explore West Hollywood Like A Local</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="attractions-description-new">
          <div className="container">
            <p className="lead-text">
              From our quiet perch above the city, Los Angeles unfolds at your own pace. In West Hollywood, 
              you are close to everything, yet never overwhelmed by it. Days can be spent immersed in art 
              and architecture, drifting along iconic boulevards, or chasing golden hour views from the hills. 
              Here, exploration feels intentional, never obligatory.
            </p>
          </div>
        </section>

        {/* Reservation Widget */}
        <section className="reservation-section">
          <div className="container">
            <ReservationWidget />
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="attractions-grid-new">
          <div className="container">
            <div className="attractions-list">
              {attractions.map((attraction, index) => (
                <div key={index} className="attraction-item-new">
                  <div className="attraction-image-new">
                    <img src={attraction.image} alt={attraction.name} />
                    <div className="attraction-distance-badge">{attraction.distance}</div>
                  </div>
                  <div className="attraction-content-new">
                    <h2>{attraction.name}</h2>
                    <p>{attraction.description}</p>
                    <div className="attraction-meta">
                      <span className="meta-location">📍 {attraction.address}</span>
                      <span className="meta-hours">🕒 {attraction.hours}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedAttraction(attraction)}
                      className="btn-small"
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Attraction Modal */}
      {selectedAttraction && (
        <div className="attraction-modal-new" onClick={() => setSelectedAttraction(null)}>
          <div className="modal-content-new" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-new" onClick={() => setSelectedAttraction(null)}>×</button>
            <img src={selectedAttraction.image} alt={selectedAttraction.name} />
            <div className="modal-body-new">
              <h2>{selectedAttraction.name}</h2>
              <div className="modal-meta-new">
                <div className="meta-item">📍 {selectedAttraction.address}</div>
                <div className="meta-item">🚗 {selectedAttraction.distance}</div>
                <div className="meta-item">🕒 {selectedAttraction.hours}</div>
              </div>
              <p className="modal-description">{selectedAttraction.fullDescription}</p>
              <div className="modal-tips">
                <strong>💡 Pro Tip:</strong> {selectedAttraction.tips}
              </div>
              <div className="modal-actions">
                <button onClick={() => alert(`Demo: Get directions to ${selectedAttraction.name}`)} className="btn btn-dark">
                  GET DIRECTIONS
                </button>
                <button onClick={() => alert(`Demo: More info about ${selectedAttraction.name}`)} className="btn">
                  VISIT WEBSITE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}
