import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Landing = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="all">
      {/* Header */}
      <header>
        {/* Top Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3 px-5">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="#">
              <img src="images/Utopia_Logo_enhanced.png" alt="Utopia Logo" width="120%" height="120%" />
            </a>

            {/* Search Bar */}
            <form className="d-flex mx-auto" style={{ maxWidth: "500px", width: "100%" }}>
              <input
                className="form-control me-2 border-danger rounded-pill"
                type="search"
                placeholder="Type something..."
                aria-label="Search"
              />
              <button className="btn btn-danger rounded-pill d-flex align-items-center" type="submit">
                <svg className="searchIcon me-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30">
                  <path fill="white" d="M 13 3 C 7.5 3 3 7.5 3 13s4.5 10 10 10 10-4.5 10-10S18.5 3 13 3zm0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/>
                </svg>
                Search
              </button>
            </form>

            {/* Navigation Links */}
            <div className="d-flex">
              <Link className="btn btn-link text-decoration-none me-3" to="trade">Sign In</Link>
              <Link className="btn btn-outline-danger rounded-pill me-3" to="trade">Sign Up</Link>
              <a className="btn btn-danger rounded-pill" href="#">Post a free Ad</a>
            </div>
          </div>
        </nav>

        {/* Secondary Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Real Estate</a>
                <a className="nav-link" href="#">Car</a>
                <a className="nav-link" href="#">Gym</a>
                <a className="nav-link" href="lp.html">Fashion</a>
                <a className="nav-link" href="#">Electronics</a>
                <a className="nav-link" href="#">Animals</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src="images/Image landing.jpg" alt="Hero Image" className="img-fluid w-100" />
      </section>

      {/* Main Content */}
      <main>
        {/* Our Universe Section */}
        <section className="OurUniverse d-flex align-items-center px-5 py-4">
          <div style={{ width: '13px', height: '83px', background: 'linear-gradient(0deg, rgba(222,48,33,1) 0%, rgba(120,26,18,1) 100%)' }}></div>
          <div className="ms-4">
            <h1 className="fw-bold display-5">Our universes, for all stages of your life</h1>
            <p className="text-muted">
              Free ads between individuals and professionals, to buy your house,
              sell your vehicle or change your decor... Discover our sections!
            </p>
          </div>
        </section>

        {/* Swipe Indicator */}
        <div className="text-center my-4">
          <p className="text-muted">Swipe for more</p>
        </div>

        {/* Slider Section */}
        <div
          className="d-flex overflow-auto py-3 px-5"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[
            { src: "/images/image-4.png", title: "Vehicles", tags: ["#Utility Vehicles", "#Caravanning", "#Cars"] },
            { src: "images/image-1.png", title: "Electronics", tags: ["#Iphone 15 Pro Max", "#MacBook Pro", "#Samsung S24 Ultra"] },
            { src: "images/image-2.png", title: "Gym", tags: ["#Fitness park", "#Sport", "#dumbbell"] },
            { src: "images/image-3.png", title: "Animals", tags: ["#Animals", "#Cats", "#Sphynx", "#Dogs", "#Malinois"] },
            { src: "images/image.png", title: "Real Estate", tags: ["#New Real Estate", "#Purchase", "#Rental", "#New House"] }
          ].map((card, index) => (
            <div className="card mx-2 border-0 shadow-sm" style={{ minWidth: '310px', transition: 'transform 0.3s, box-shadow 0.3s' }} key={index}>
              <img src={card.src} alt={card.title} className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title bg-danger text-white rounded-pill py-2 mb-3">{card.title}</h3>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="border rounded-pill px-3 py-1 text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container-fluid text-center">
          <p className="text-muted mb-0">© 2023 Utopia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;