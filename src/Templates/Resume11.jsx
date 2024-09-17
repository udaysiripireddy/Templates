// src/Resume.jsx
import React from 'react';
import './Resume11.css';
import templateData from './templateData';
const Resume = () => {
  const {
    profileImage,
    firstname,
    lastname,
    profession,
    city,
    country,
    phone,
    email,
    linkedIn,
    GitHub,
    education,
    experience,
    skills,
    certifications,
    languages,
    summary,
    projects,
    declaration,
  } = templateData;

  return (
    <div className="resume-wrapper">
      <div className="left-container">
        <header className="resume-header">
          <img className="profile-image" src={profileImage} alt={`${firstname} ${lastname}`} />
          <h1 className="profile-name">{`${firstname} ${lastname}`}</h1>
          <p className="profession">{profession}</p>
          <p className="location">{`${city}, ${country}`}</p>
          <p className="contact-info">Phone: {phone}</p>
          <p className="contact-info">Email: {email}</p>
          <div className="social-links">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={GitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </header>

        <section className="skills-section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </section>

        {/* New Languages Section */}
        <div className="languages-section card">
          <h2>Languages</h2>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
        <div className="declaration-section card">
          <h2>Declaration</h2>
          <p>{declaration}</p>
        </div>
      </div>

      <div className="right-container">
        <section className="resume-section">
          <h2>Summary</h2>
          <p>
            {templateData.summary}
          </p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title} at {exp.company}</h3>
              <p>{exp.location} ({exp.dateRange})</p>
              <ul>
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}

        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <p>Bachelor's Degree in Computer Science</p>
          <p><em>University of Technology - 2015 to 2019</em></p>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>

          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Project Link</a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Resume;
