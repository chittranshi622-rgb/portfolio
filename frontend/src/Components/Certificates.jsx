import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  // ADD OR EDIT YOUR CERTIFICATES HERE
  const certificatesList = [
    {
      id: 1,
      title: "Generative AI Essentials",
      issuer: "MPIT – CoE & TCS Foundation (TCS iON)",
      issueDate: "June 2026",
      credentialUrl: "https://www.linkedin.com/posts/chittranshi-srivastava-547963300_generativeai-aiforall-tcsion-activity-7468897892435632128-xnL8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD6eq3IBBRTUWJ-_xKnuCPqLOO5gKfDqBnQ",
      description: "Completed Generative AI Essentials under the 'AI for All' program. Gained foundational understanding of Generative AI principles and its practical applications.",
      skills: ["Generative AI", "TCS iON", "AI for All", "Computer Science"]
    },
    {
      id: 2,
      title: "Foundations of Prompt Engineering",
      issuer: "AWS Training & Certification",
      issueDate: "June 2026",
      credentialUrl: "https://www.linkedin.com/posts/chittranshi-srivastava-547963300_promptengineering-aws-machinelearning-activity-7469047745551679489-1J0O?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD6eq3IBBRTUWJ-_xKnuCPqLOO5gKfDqBnQ",
      description: "Earned AWS certification in Foundations of Prompt Engineering, mastering techniques to communicate effectively with Large Language Models (LLMs).",
      skills: ["Prompt Engineering", "AWS", "Machine Learning", "AI"]
    },
    {
      id: 3,
      title: "AI and Cybersecurity Awareness",
      issuer: "MPIT – CoE & TCS Foundation (TCS iON)",
      issueDate: "May 2026",
      credentialUrl: "https://www.linkedin.com/posts/chittranshi-srivastava-547963300_aiforall-cybersecurity-artificialintelligence-activity-7469257674610880512-v9RT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD6eq3IBBRTUWJ-_xKnuCPqLOO5gKfDqBnQ",
      description: "Completed training in AI and Cybersecurity awareness as part of the 'AI for All' Guinness World Records initiative delivered via TCS iON.",
      skills: ["Artificial Intelligence", "Cybersecurity", "TCS iON", "AI for All"]
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2>Certificates</h2>
        <p className="certificates-subtext">Professional certifications and specialized training courses I have completed.</p>
        
        <div className="certificates-grid">
          {certificatesList.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-header">
                <div className="certificate-badge">
                  <Award size={26} color="#C27803" />
                </div>
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="certificate-link" aria-label="View Credential">
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <span className="certificate-date">{cert.issueDate}</span>
              <p className="certificate-description">{cert.description}</p>

              <div className="certificate-skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="cert-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
