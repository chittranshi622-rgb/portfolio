import React from 'react';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "SRMCEM (Shri Ramswaroop Memorial College of Engineering and Management)",
      duration: "2025 - Present",
      description: "Pursuing engineering studies with a strong focus on software engineering, full-stack development, and computer science fundamentals."
    },
    {
      degree: "12th Grade (Higher Secondary)",
      institution: "St. Antony's Inter College",
      duration: "Completed 2024",
      description: "Completed higher secondary education with a strong academic foundation."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2>Education</h2>
        <p className="education-subtext">My academic background and milestones.</p>

        <div className="table-responsive">
          <table className="education-table">
            <thead>
              <tr>
                <th>Degree / Qualification</th>
                <th>Institution</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {educationList.map((item, index) => (
                <tr key={index}>
                  <td className="table-degree">{item.degree}</td>
                  <td>{item.institution}</td>
                  <td className="table-duration">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
