import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Certificates from './Components/Certificates';
import Education from './Components/Education';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        <Hero />
        <Certificates />
        <Education />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
