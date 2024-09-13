import React from 'react';
import './Resume6.css';
import templateData from './templateData'; // Import the data

const ModernResume = () => {
  return (
    <div style={{ display: 'flex', maxWidth: '1000px', margin: 'auto' }}>
      <aside style={{ width: '30%', padding: '20px', }}>
        <div style={{ textAlign: 'center' }}>
          <img src={templateData.profileImage} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
          <h2>{`${templateData.firstname} ${templateData.lastname}`}</h2>
          <p>{templateData.profession}</p>
        </div>
        <section>
          <h3>Contact</h3>
          <p>Email: {templateData.email}</p>
          <p>Phone: {templateData.phone}</p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul>
            {templateData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <h4>Languages</h4>
        <ul>
          {templateData.languages.map((Language, index) => (
            <li key={index}>{Language}</li>
          ))}
        </ul>
        <h4>disclaimer</h4>
        <p>{templateData.declaration}</p>
      </aside>

      <main style={{ width: '70%', padding: '20px' }}>
        <section>
          <h2>Summary</h2>
          <p>{templateData.summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {templateData.experience.map((job, index) => (
            <div key={index}>
              <h3>{job.title}</h3>
              <p>{`${job.company} | ${job.location} | ${job.dateRange}`}</p>
              <ul>
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {templateData.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
              <p>{`${edu.sclName}, ${edu.sclLocation} | Graduated: ${edu.gradeYear}`}</p>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          {templateData.projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section className="internships">
          <h2>certifications</h2>
          {templateData.certifications ? (
            templateData.certifications.map((certification, index) => (
              <p key={index}>{certification}</p>
            ))
          ) : (
            <p>No internships listed</p>
          )}
        </section>

      </main>
    </div>
  );
};

export default ModernResume;
