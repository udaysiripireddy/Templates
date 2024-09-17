import React from 'react';
import './Resume13.css'; // Updated CSS for enhanced styling
import templateData from './templateData'; // Import JSON data

const ResumeLayout = () => {
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
        <div className="Resume13-container">
            <div className="Resume13-content">
                {/* Left Sidebar */}
                <div className="Resume13-left">
                    <div className="profile13-section">
                        <div> 
                            <img className="profile-image" src={profileImage} alt={`${firstname} ${lastname}`} />
                            <h1 className="profile-name">{`${firstname} ${lastname}`}</h1>
                            <p className="profession">{profession}</p>
                        </div>

                        <div> 
                            <p className="location">{`${city}, ${country}`}</p>
                            <p className="contact-info">Phone: {phone}</p>
                            <p className="contact-info">Email: {email}</p>
                            <div className="social-links">
                                <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href={GitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                
                    </div>
            
                    <div className="summary-section">
                        <h2>Summary</h2>
                        <p>{summary}</p>
                    </div>

                    <div className="skills-section">
                        <h2>Skills</h2>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="certifications-section">
                        <h2>Certifications</h2>
                        <ul>
                            {certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="languages-section">
                        <h2>Languages</h2>
                        <ul>
                            {languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="resume-right">
                    <div className="education-section">
                        <h2>Education</h2>
                        {education.map((edu) => (
                            <div key={edu.EducationID} className="education-item">
                                <h3>{edu.sclName}</h3>
                                <p>{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                                <p>{edu.sclLocation}</p>
                            </div>
                        ))}
                    </div>

                    <div className="experience-section card">
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
                    </div>

                    <div className="projects-section card">
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
                    </div>

                    <div className="declaration-section card">
                        <h2>Declaration</h2>
                        <p>{declaration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeLayout;
