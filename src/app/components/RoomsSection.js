'use client';

import { useState } from 'react';

const rooms = [
  {
    name: 'Grand Belle Bleue',
    description:
      'In the Grand Belle Bleue, time and texture converge. Rare compositions, marble and bronze detailing, and richly layered textiles shape a 550-square-foot environment that feels curated rather than styled. French doors, a mar…',
    image: '/assets/img/rooms-and-suites/image-2.jpeg',
  },
  {
    name: 'Demi Suite',
    description:
      'The 350-square-foot Demi Suite offers a private, art-filled retreat designed for those who prefer to disappear rather than perform. A queen bed, writing desk, and glowing fireplace create a residential rhythm, while curated…',
    image: '/assets/img/rooms-and-suites/image-3.jpeg',
  },
  {
    name: 'Grand Belle Terrace',
    description:
      'The 550-square-foot Grand Belle Terrace is a maximalist, art-forward suite conceived by Dana Hollister. French doors open to a private terrace with an outdoor fireplace, extending the interior’s layered textures and handmad…',
    image: '/assets/img/rooms-and-suites/image-4.jpeg',
  },
];

export default function RoomsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeRoom = rooms[activeTab];

  const handleViewDetails = (roomName) => {
    alert(`This is a design demo. Details for ${roomName} would be shown here.`);
  };

  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className="section-subtitle">Featured</div>

        <h2 className="section-title">Rooms & Suites</h2>

        <p className="section-description">
          Our 80 suites are each composed with a certain disregard for
          uniformity—layered with original artwork, fireplaces, rich textiles,
          and the comforts of a life well-lived.
          <br />
          <br />
          They feel like private residences suspended just far enough above West
          Hollywood to forget what you came from.
        </p>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '30px',
            flexWrap: 'wrap',
          }}
        >
          {rooms.map((room, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`btn ${
                activeTab === index ? 'btn-dark' : 'btn-light'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="room-card">
          <div className="room-image">
            <img src={activeRoom.image} alt={activeRoom.name} />
          </div>

          <div className="room-info">
            <h3>{activeRoom.name}</h3>

            <p>{activeRoom.description}</p>

            <button
              className="btn btn-dark"
              style={{ marginTop: '15px' }}
              onClick={() => handleViewDetails(activeRoom.name)}
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}