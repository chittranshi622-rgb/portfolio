import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certificates from './components/Certificates';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';

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
