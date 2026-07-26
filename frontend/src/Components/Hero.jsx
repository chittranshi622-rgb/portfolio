import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container hero-container-left">
        <div className="hero-content hero-content-left">
          <h1>Hi, I'm <span className="highlight">Chittranshi Srivastava</span></h1>
          <h2>Full-Stack Developer & Tech Enthusiast</h2>
          <p>
            I'm a computer science college student passionate about building dynamic web applications, 
            learning management systems, and intuitive user experiences using React, Django, and Python.
          </p>
          <div className="hero-buttons">
            <a href="#certificates" className="btn primary-btn">View Certificates</a>
            <a href="#contact" className="btn secondary-btn">Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
