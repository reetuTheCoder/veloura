import React from "react";

export default function Page() {
  return (
    <section
      className="about-us"
      style={{ paddingTop: "100x", minHeight: "65vh" }}
    >
      <div className="container">
        <h1>About Us</h1>

        <p>
          Welcome to our luxury hotel experience, where elegance, comfort, and
          personalized hospitality come together in the heart of West Hollywood.
        </p>

        <div className="info-card">
          <h2>Owner</h2>
          <p>Peter Niel</p>
        </div>

        <div className="info-card">
          <h2>Headquarters</h2>
          <p>350 5th Avenue, New York, NY 10118</p>
        </div>

        <div className="info-card">
          <h2>Hotel Address</h2>
          <p>8822 Cynthia Street, West Hollywood, CA 90069</p>
        </div>
      </div>
    </section>
  );
}
