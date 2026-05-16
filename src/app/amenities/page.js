"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationWidget from "../components/ReservationWidget";

export default function AmenitiesPage() {
  // --- Hero Slides Data ---
  const heroSlides = [
    {
      id: "3c278622b48b69c74a2c1fdf0d936159",
      imageDesktop:
        "https://image-tc.galaxy.tf/wijpeg-9e4rxhrn7izhmc19lcck45f5y/ng-pe-gymphotos-8a.jpg?width=1920",
      imageMobile:
        "https://image-tc.galaxy.tf/wijpeg-9e4rxhrn7izhmc19lcck45f5y/ng-pe-gymphotos-8a.jpg?width=768",
      alt: "Pilates reformers with dumbbells under a wood ceiling at the gym",
    },
    {
      id: "pool-slide-1",
      imageDesktop:
        "https://image-tc.galaxy.tf/wijpeg-4wz5pwoz8caotun2de04qv7ui/pool-deck.jpg?width=1920",
      imageMobile:
        "https://image-tc.galaxy.tf/wijpeg-4wz5pwoz8caotun2de04qv7ui/pool-deck.jpg?width=767",
      alt: "Striped daybeds by a Pool Deck under a sky",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  const startSlideTimer = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideIntervalRef.current);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  // --- Slider State for Text-Media Section ---
  const [mediaSliderIndex, setMediaSliderIndex] = useState(0);
  const mediaSlides = [
    {
      imageDesktop:
        "https://image-tc.galaxy.tf/wijpeg-4wz5pwoz8caotun2de04qv7ui/pool-deck.jpg?width=1920",
      imageTablet:
        "https://image-tc.galaxy.tf/wijpeg-4wz5pwoz8caotun2de04qv7ui/pool-deck.jpg?width=800",
      imageMobile:
        "https://image-tc.galaxy.tf/wijpeg-4wz5pwoz8caotun2de04qv7ui/pool-deck.jpg?width=767",
      alt: "Striped daybeds by a Pool Deck under a sky",
    },
    {
      imageDesktop:
        "https://image-tc.galaxy.tf/wijpeg-89rssw88nq1opktyf1qr1grsf/05300028.jpg?width=1920",
      imageTablet:
        "https://image-tc.galaxy.tf/wijpeg-89rssw88nq1opktyf1qr1grsf/05300028.jpg?width=800",
      imageMobile:
        "https://image-tc.galaxy.tf/wijpeg-89rssw88nq1opktyf1qr1grsf/05300028.jpg?width=767",
      alt: "Guest smiling by pool rails under the sun",
    },
    {
      imageDesktop:
        "https://image-tc.galaxy.tf/wijpeg-9v7f2h2nlpj0l3p7mlpehgev8/casa-di-niente-x-petit-ermitage-32.jpg?width=1920",
      imageTablet:
        "https://image-tc.galaxy.tf/wijpeg-9v7f2h2nlpj0l3p7mlpehgev8/casa-di-niente-x-petit-ermitage-32.jpg?width=800",
      imageMobile:
        "https://image-tc.galaxy.tf/wijpeg-9v7f2h2nlpj0l3p7mlpehgev8/casa-di-niente-x-petit-ermitage-32.jpg?width=767",
      alt: "Striped beds by a pool under white umbrellas",
    },
    {
      imageDesktop:
        "https://image-tc.galaxy.tf/wijpeg-18im2otulrzx5f7g2gzk2umi9/05610006.jpg?width=1920",
      imageTablet:
        "https://image-tc.galaxy.tf/wijpeg-18im2otulrzx5f7g2gzk2umi9/05610006.jpg?width=800",
      imageMobile:
        "https://image-tc.galaxy.tf/wijpeg-18im2otulrzx5f7g2gzk2umi9/05610006.jpg?width=767",
      alt: "Guest by a pool under the sun",
    },
  ];

  const totalSlides = mediaSlides.length;

  const prevSlide = () => {
    setMediaSliderIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setMediaSliderIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Slider Section */}
        <div className="m-hero--slide hero-slider-wrapper">
          <div className="hero-slider-container">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-slider-item ${index === currentSlide ? "active" : ""}`}
                style={{
                  width: "100%",
                  display: index === currentSlide ? "inline-block" : "none",
                }}
              >
                <div className="m-hero__media">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={slide.imageMobile}
                    />
                    <img src={slide.imageDesktop} alt={slide.alt} />
                  </picture>
                </div>
                <div className="m-hero--content">
                  <div className="container">
                    <div className="m-hero--content__wrapper image-only" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-slide-controls">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`hero-slide-dot ${idx === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Introduction Section */}
        <div
          className="cms-background m-introduction introduction-vue-content scroll-animation in-view"
          style={{
            "--video-position": "center",
            "--text-alignment": "center",
            "--button-alignment": "center",
            "--padding-top-desktop": "40px",
            "--padding-bottom-desktop": "40px",
            "--padding-top-tablet": "40px",
            "--padding-bottom-tablet": "40px",
            "--padding-top-mobile": "40px",
            "--padding-bottom-mobile": "40px",
          }}
        >
          <div className="container m-introduction__container">
            <div className="video-bottom m-introduction__row">
              <div className="m-introduction__content">
                <h1 className="m-introduction--title">
                  Private Resident Amenities
                </h1>
                <h2 className="m-introduction--subtitle">
                  Exclusive Comforts for a Private Lifestyle
                </h2>
                <div className="m-introduction--content cms-content">
                  <p style={{ textAlign: "left" }}>
                    At Petit Ermitage, you stay within a private residence
                    disguised as a hotel, where every suite is designed for
                    comfort, discretion, and return visits that feel familiar
                    rather than formal. Here, amenities are not a checklist but
                    a way of life, designed around how you actually rest,
                    commune, think, or simply just be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation Widget */}
        <section className="reservation-section">
          <div className="container">
            <ReservationWidget />
          </div>
        </section>

        {/* Text-Media Section - REPLACED with your exact HTML structure */}
        <div
          className="text-media text-image stripe-default-padding id-7a6bda38bc1126801fbaa2e2bc728774 center-text-media cms-custom-color"
          style={{ backgroundColor: "#182421" }}
        >
          <div className="container-fluid">
            <div className="row row-flex">
              <div className="col-sm-8 text-media__media-container">
                <div
                  className="js-slider__wrapper slider-wrapper media-radius-container"
                  style={{}}
                >
                  <div
                    className="ratio-16-9-slider js-slider cms-radius"
                    data-pagination="true"
                  >
                    <div className="slick-list">
                      <div className="slick-track" style={{ opacity: 1 }}>
                        {mediaSlides.map((slide, idx) => (
                          <div
                            key={idx}
                            className={`slick-slide ${idx === mediaSliderIndex ? "slick-current slick-active" : ""}`}
                            style={{
                              width: "100%",
                              display:
                                idx === mediaSliderIndex ? "block" : "none",
                            }}
                          >
                            <div>
                              <div
                                className="ratio-16-9"
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="ratio-content">
                                  <picture>
                                    <source
                                      media="(max-width: 767px)"
                                      srcSet={slide.imageMobile}
                                    />
                                    <source
                                      media="(max-width: 1199px)"
                                      srcSet={slide.imageTablet}
                                    />
                                    <img
                                      src={slide.imageDesktop}
                                      alt={slide.alt}
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-media__toolbar clearfix img-pagination">
                    <div
                      className="text-media__toolbar-slider-actions"
                      style={{ paddingBottom: "7px" }}
                    >
                      <div className="js-slider__insert-grouped-actions">
                        <div className="slider__actions slider__actions--flat">
                          <span className="sr-only">
                            Slideshow control buttons
                          </span>
                          <span className="sr-only">
                            Clicking on the following links will update the
                            content above
                          </span>
                          <div className="slider__action js-slider-prev-container">
                            <button
                              className="slick-prev slick-arrow"
                              aria-label="Go to previous slideshow element"
                              type="button"
                              onClick={prevSlide}
                            >
                              <svg
                                aria-hidden="true"
                                className="icon icon-arrow-left"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                              >
                                <path
                                  d="M15 18l-6-6 6-6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="sr-only">Previous</span>
                            </button>
                          </div>
                          <div className="slider__action js-slider-pagination-container">
                            <div className="slick-custom-pagination">
                              <span className="slick-current-slide">
                                {mediaSliderIndex + 1}
                              </span>{" "}
                              /{" "}
                              <span className="slick-total-slide">
                                {totalSlides}
                              </span>
                            </div>
                          </div>
                          <div className="slider__action js-slider-next-container">
                            <button
                              className="slick-next slick-arrow"
                              aria-label="Go to next slideshow element"
                              type="button"
                              onClick={nextSlide}
                            >
                              <svg
                                aria-hidden="true"
                                className="icon icon-arrow-right"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                              >
                                <path
                                  d="M9 18l6-6-6-6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="sr-only">Next</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 text-media__text-container block-with-paginated-slider__side-column text-image__padding"
                data-text-alignment="left"
              >
                <div
                  className="text-media__text-container-wrapper scroll-animation in-view"
                  style={{ color: "#FFFFF5" }}
                >
                  <div className="stripe__text cms-html-var">
                    We move at the rhythm of longer stays, creating an
                    atmosphere where privacy is instinctive and service is
                    personal without being performative. Throughout the
                    property, you live among an integrated art collection that
                    shapes the mood of each corridor and suite, surrounding you
                    with pieces that feel collected, not curated. Our rooftop
                    becomes an extension of your living room, offering garden
                    dining, quiet lounging, and the option to retreat to
                    in-suite dining whenever you prefer to remain within your
                    own sanctuary.
                  </div>
                  <div className="stripe__actions" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Grid Section - REPLACED with your exact HTML structure */}
        <div
          className="masonry-grid masonry-grid-loaded"
          data-colcade="columns: .grid-col, items: .grid-item"
        >
          <div className="masonry-grid-col-wrapper">
            <div className="grid-col grid-col--1">
              <div
                id="id-bd89846b6769b49de8d084c10a37764a"
                className="grid-item scroll-animation in-view"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="overlay" />
                <img
                  src="https://image-tc.galaxy.tf/wijpeg-ef173p392sgc694vglgpv4rbv/ng-pe-gymphotos-vert-2a.jpg?width=960"
                  alt="Pilates reformers by a dumbbell rack under a slatted wood ceiling"
                />
                <div className="content-container">
                  <div className="item-content">
                    <p>Free Wi-Fi, if you absolutely must be connected</p>
                    <p>24-hour Private Gym, for movement at your own rhythm</p>
                    <p>Pool, a quiet oasis above the city</p>
                    <p>Gourmet Mini Bar, curated indulgence at arm's reach</p>
                    <p>
                      Valet Parking, so your arrival and departure feel
                      effortless
                    </p>
                    <p>
                      Pet-friendly, because some travel companions are
                      non-negotiable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-col grid-col--2">
              <div
                id="id-90fd3f0aa62660f03bd40835c2076887"
                className="grid-item scroll-animation in-view"
                style={{ transitionDelay: "100ms" }}
              >
                <img
                  src="https://image-tc.galaxy.tf/wijpeg-72t75wrbmb890qi96jcdvbk5n/05300014.jpg?width=960"
                  alt="Black and white photo of a woman in a pool by striped sofas"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="grid-col grid-col--3">
              <div
                id="id-64237ff348fc2272155aeab340716b8c"
                className="grid-item scroll-animation in-view"
                style={{ transitionDelay: "200ms" }}
              >
                <img
                  src="https://image-tc.galaxy.tf/wijpeg-2jvm7apbok90l01wiq7z8umgu/ng-pe-gymphotos-vert-5a.jpg?width=960"
                  alt="Advanced fitness machine with a weight bench by a large window"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="amenities-cta">
          <div className="container">
            <h2>Experience the Residence</h2>
            <p>Your sanctuary in the heart of West Hollywood awaits.</p>
            <a href="/reservations" className="btn">
              Book Your Stay
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
