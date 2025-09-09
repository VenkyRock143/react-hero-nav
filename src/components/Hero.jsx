import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="animate-fade-in-up">
          We are <span className="highlight">Leo9Studio</span>.
          <br /> A creative agency.
        </h1>
        <p className="animate-fade-in-up-slow">
          We're a small and agile design studio that works on design, development, branding, and everything in between.
        </p>
        <a href="#" className="btn-explore animate-fade-in-up-slower">
          Explore More
        </a>
      </div>

      {/* Background Circles */}
      <div className="hero-bg">
        <div className="circle pink animate-pulse"></div>
        <div className="circle gray animate-pulse-delay-1"></div>
        <div className="circle dark animate-pulse-delay-2"></div>
      </div>
    </section>
  );
};

export default Hero;
