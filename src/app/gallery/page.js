'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationWidget from '../components/ReservationWidget';
import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // All images from your public/assets/img/gallery directory
  const galleryImages = [
    { src: '/assets/img/gallery/image-50.jpeg', category: 'rooms', title: 'Luxury Suite', description: 'Elegant bedroom with city views' },
    { src: '/assets/img/gallery/image-51.jpeg', category: 'rooms', title: 'Grand Suite', description: 'Spacious living area with fireplace' },
    { src: '/assets/img/gallery/image-52.jpeg', category: 'dining', title: 'Rooftop Dining', description: 'Al fresco dining experience' },
    { src: '/assets/img/gallery/image-53.jpeg', category: 'amenities', title: 'Infinity Pool', description: 'Pool with panoramic views' },
    { src: '/assets/img/gallery/image-54.jpeg', category: 'rooms', title: 'Executive Suite', description: 'Modern comfort meets luxury' },
    { src: '/assets/img/gallery/image-55.jpeg', category: 'dining', title: 'Gourmet Restaurant', description: 'Fine dining experience' },
    { src: '/assets/img/gallery/image-56.jpeg', category: 'amenities', title: 'Spa & Wellness', description: 'Relaxation and rejuvenation' },
    { src: '/assets/img/gallery/image-57.jpeg', category: 'rooms', title: 'Deluxe King', description: 'Premium bedding and amenities' },
    { src: '/assets/img/gallery/image-58.jpeg', category: 'dining', title: 'Wine Cellar', description: 'Extensive wine collection' },
    { src: '/assets/img/gallery/image-59.jpeg', category: 'amenities', title: 'Fitness Center', description: 'State-of-the-art equipment' },
    { src: '/assets/img/gallery/image-60.jpeg', category: 'rooms', title: 'Penthouse View', description: 'Spectacular city views' },
    { src: '/assets/img/gallery/image-61.jpeg', category: 'dining', title: 'Private Dining', description: 'Intimate dining setting' },
    { src: '/assets/img/gallery/image-62.jpeg', category: 'amenities', title: 'Rooftop Terrace', description: 'Outdoor lounge area' },
    { src: '/assets/img/gallery/image-63.jpeg', category: 'rooms', title: 'Junior Suite', description: 'Cozy and elegant' },
    { src: '/assets/img/gallery/image-64.jpeg', category: 'dining', title: 'Breakfast Buffet', description: 'Morning delights' },
    { src: '/assets/img/gallery/image-65.jpeg', category: 'amenities', title: 'Concierge Lounge', description: 'Premium services' },
    { src: '/assets/img/gallery/image-66.jpeg', category: 'rooms', title: 'Family Suite', description: 'Perfect for families' },
    { src: '/assets/img/gallery/image-67.jpeg', category: 'dining', title: 'Chef\'s Table', description: 'Culinary experience' },
    { src: '/assets/img/gallery/image-68.jpeg', category: 'amenities', title: 'Business Center', description: 'Work in comfort' },
    { src: '/assets/img/gallery/image-69.jpeg', category: 'rooms', title: 'Corner Suite', description: 'Panoramic windows' },
    { src: '/assets/img/gallery/image-70.jpeg', category: 'dining', title: 'Cocktail Bar', description: 'Signature cocktails' },
    { src: '/assets/img/gallery/image-71.jpeg', category: 'amenities', title: 'Garden Terrace', description: 'Peaceful garden oasis' },
    { src: '/assets/img/gallery/image-72.jpeg', category: 'rooms', title: 'Presidential Suite', description: 'Ultimate luxury' },
    { src: '/assets/img/gallery/image-73.jpeg', category: 'dining', title: 'Afternoon Tea', description: 'Traditional tea service' }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'dining', name: 'Dining' },
    { id: 'amenities', name: 'Amenities' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    // Simulate loading images
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* Hero Section */}
        <section className="gallery-page-hero">
          <div className="hero-overlay">
            <div className="container">
              <h1>Photo Gallery</h1>
              <p className="hero-subtitle">View Our Modern Spaces</p>
              <p className="hero-description">
                Step into our world and out of your own head. Each photo gallery image offers a glimpse of the textures, 
                light, and hidden corners that shape life at Petit Ermitage, inviting you to imagine yourself within 
                this West Hollywood hideaway.
              </p>
            </div>
          </div>
        </section>

        {/* Reservation Widget */}
        <section className="reservation-section">
          <div className="container">
            <ReservationWidget />
          </div>
        </section>

        {/* Category Filters */}
        <section className="gallery-filters-section">
          <div className="container">
            <div className="gallery-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`gallery-filter ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-grid-section">
          <div className="container">
            {loading ? (
              <div className="gallery-loading">
                <div className="spinner"></div>
                <p>Loading gallery...</p>
              </div>
            ) : (
              <>
                <div className="gallery-grid-full">
                  {filteredImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="gallery-item-full"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="gallery-image-wrapper">
                        <img src={image.src} alt={image.title} loading="lazy" />
                        <div className="gallery-overlay">
                          <div className="gallery-overlay-content">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                            <span className="view-btn">VIEW</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Image Counter */}
                <div className="gallery-counter">
                  Showing {filteredImages.length} of {galleryImages.length} images
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-container">
            <button className="lightbox-close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button 
              className="lightbox-prev" 
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                setSelectedImage(filteredImages[prevIndex]);
              }}
            >
              ‹
            </button>
            <button 
              className="lightbox-next" 
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
                const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage(filteredImages[nextIndex]);
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
      
      {/* <Footer /> */}
    </>
  );
}
