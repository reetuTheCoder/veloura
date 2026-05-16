'use client';

import { useState } from 'react';

export default function ReservationWidget({ showTitle = true, className = '' }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [showRoomGuestPicker, setShowRoomGuestPicker] = useState(false);

  const handleBookNow = () => {
    alert(`This is a design demo. Booking functionality is not active.\n\n📅 Check-in: ${checkIn || 'Not selected'}\n📅 Check-out: ${checkOut || 'Not selected'}\n🛏️ Rooms: ${rooms}\n👥 Guests: ${guests}\n🎫 Promo Code: ${promoCode || 'None'}\n\nThis is a demo website. No actual booking will be processed.`);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];
  
  // Get tomorrow's date for min check-out
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  return (
    <div className={`reservation-widget ${className}`}>
      {showTitle && (
        <div className="widget-top-bar">
          <span className="widget-title">Make a Reservation</span>
        </div>
      )}
      
      <div className="widget-details">
        {/* Check-in Date */}
        <div className="date-wrapper">
          <div className="date-input-wrapper">
            <div className="calendar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="date-info">
              <label>Check In</label>
              <input 
                type="date" 
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="date-input"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>

        {/* Check-out Date */}
        <div className="date-wrapper">
          <div className="date-input-wrapper">
            <div className="calendar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="date-info">
              <label>Check Out</label>
              <input 
                type="date" 
                value={checkOut}
                min={checkIn || tomorrowStr}
                onChange={(e) => setCheckOut(e.target.value)}
                className="date-input"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>

        {/* Rooms & Guests Selector */}
        <div className="rooms-guests-wrapper">
          <div 
            className="rooms-guests-trigger"
            onClick={() => setShowRoomGuestPicker(!showRoomGuestPicker)}
          >
            <div className="guest-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="rooms-guests-info">
              <span className="rooms-count">{rooms} Room{rooms !== 1 ? 's' : ''}</span>
              <span className="guests-count">{guests} Guest{guests !== 1 ? 's' : ''}</span>
            </div>
          </div>
          
          {showRoomGuestPicker && (
            <div className="room-guest-picker">
              <div className="picker-item">
                <label>Rooms</label>
                <div className="picker-controls">
                  <button onClick={() => setRooms(Math.max(1, rooms - 1))}>-</button>
                  <span>{rooms}</span>
                  <button onClick={() => setRooms(Math.min(5, rooms + 1))}>+</button>
                </div>
              </div>
              <div className="picker-item">
                <label>Guests</label>
                <div className="picker-controls">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                  <span>{guests}</span>
                  <button onClick={() => setGuests(Math.min(10, guests + 1))}>+</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Promo Code & Book Button */}
      <div className="widget-submit">
        <input 
          type="text" 
          placeholder="Promo Code" 
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="promo-input"
        />
        <button onClick={handleBookNow} className="book-now-btn">
          Book Now
        </button>
      </div>
    </div>
  );
}
