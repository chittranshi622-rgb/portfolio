import React from 'react';
import profileImage from '../assets/chittranshi.jpeg';

const About = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js",
    "Node.js", "Express.js","Java",
    "SQL", "Bootstrap", "Git & GitHub"
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>

        <div className="about-grid">
          <div className="about-image-container">
            <img src={profileImage} alt="Chittranshi Srivastava" className="about-image" />
          </div>

          <div className="about-text-content">
            <p className="about-text">
              Hello! I'm <span className="highlight">Chittranshi Srivastava</span>, a passionate Full-Stack Web Developer and college student. I love building web applications that are scalable, responsive, and user-friendly. With a strong foundation in both frontend and backend technologies, I enjoy turning complex ideas into clean, elegant digital solutions.
            </p>

            <div className="skills-container">
              <h3>My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
