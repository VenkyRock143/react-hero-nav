import React from "react";
import "../styles/extra.css";

const Extra = () => {
  return (
    <>
      {/* Services */}
      <section className="services">
        <h2 className="animate-fade-in-up">Our Services</h2>
        <div className="services-grid">
          <div className="service-card animate-fadeIn">
            <h3>UI/UX Design</h3>
            <p>Crafting intuitive and engaging user experiences from wireframes to final design.</p>
          </div>
          <div className="service-card animate-fadeIn">
            <h3>Web Development</h3>
            <p>Bringing designs to life with clean, scalable, and high-performance code.</p>
          </div>
          <div className="service-card animate-fadeIn">
            <h3>Branding & Identity</h3>
            <p>Building a strong, memorable brand that resonates with your audience.</p>
          </div>
          <div className="service-card animate-fadeIn">
            <h3>Digital Marketing</h3>
            <p>Strategic marketing to help your brand reach its full potential online.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2 className="animate-fade-in-up">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-item animate-fadeIn">
            <img src="https://placehold.co/1200x800/262626/888888?text=Project+One" alt="Project One" />
            <div className="overlay">
              <div>
                <h3>Branding & App UI</h3>
                <p>A comprehensive design system for a modern mobile application.</p>
              </div>
            </div>
          </div>
          <div className="project-item animate-fadeIn">
            <img src="https://placehold.co/1200x800/262626/888888?text=Project+Two" alt="Project Two" />
            <div className="overlay">
              <div>
                <h3>E-commerce Website</h3>
                <p>A clean and responsive e-commerce platform with fast load times.</p>
              </div>
            </div>
          </div>
          <div className="project-item animate-fadeIn">
            <img src="https://placehold.co/1200x800/262626/888888?text=Project+Three" alt="Project Three" />
            <div className="overlay">
              <div>
                <h3>SaaS Product Landing Page</h3>
                <p>A high-converting landing page designed to capture new users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extra;
