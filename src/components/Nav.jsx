import React, { useState, useEffect } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="highlight">Leo</span>9
          <span className="highlight">Studio</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#" className="btn-contact">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#" className="btn-contact">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
