'use client';

import Link from 'next/link';

export default function Header() {
  const handleBookNow = () => {
    alert("This is a demo. Booking functionality is not available.");
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          Veloura
        </Link>
        <nav className="nav-links">
          <Link href="/rooms">Rooms & Suites</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/dining">Dining</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/attractions">Attractions</Link>
          <Link href="/about_us">About Us</Link>
          <button onClick={handleBookNow} className="book-btn">
            BOOK NOW
          </button>
        </nav>
      </div>
    </header>
  );
}
