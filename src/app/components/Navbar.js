"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = ({
  isDarkMode,
  toggleTheme,
  scrollToSection,
  featuresRef,
  philosophyRef,
  roadmapRef,
  integrationsRef,
  hotelsRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };


  return (
    <nav
      className={`${styles.navbar} ${!isDarkMode ? styles.lightNavbar : ""}`}
    >
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/getHoltelAiLogo.svg"
          alt="Luxary Logo"
          width={80}
          height={60}
          priority
        />
        <h3>Veloura</h3>
      </div>

      {/* Desktop Nav */}
      <ul className={styles.navItems}>
        <li
          className={styles.navItem}
          onClick={() => handleNavClick(featuresRef)}
        >
          Features
        </li>

        <li
          className={styles.navItem}
          onClick={() => handleNavClick(philosophyRef)}
        >
          Philosophy
        </li>

        <li
          className={styles.navItem}
          onClick={() => handleNavClick(roadmapRef)}
        >
          Roadmap
        </li>

        <li
          className={styles.navItem}
          onClick={() => handleNavClick(integrationsRef)}
        >
          Integrations
        </li>

        <li
          className={styles.navItem}
          onClick={() => handleNavClick(hotelsRef)}
        >
          For Hotels
        </li>
      </ul>

      {/* Right Side */}
      <div className={styles.navIcons}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <button className={styles.btnDark}>Coming Soon →</button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ""}`}
      >
        <li onClick={() => handleNavClick(featuresRef)}>Features</li>

        <li onClick={() => handleNavClick(philosophyRef)}>Philosophy</li>

        <li onClick={() => handleNavClick(roadmapRef)}>Roadmap</li>

        <li onClick={() => handleNavClick(integrationsRef)}>Integrations</li>

        <li onClick={() => handleNavClick(hotelsRef)}>For Hotels</li>

        <button className={styles.mobileBtn}>Coming Soon →</button>
      </div>
    </nav>
  );
};

export default Navbar;
