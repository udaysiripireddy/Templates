import React from 'react';
import templateData from './templateData';
import './Resume5.css'
export default function Resume5() {
    return (
        <>
            <div className='Resume5-Home-Section'><div style={{ display: "flex", textAlign: 'center', marginLeft: "26%" }}>
                <img src={templateData.profileImage} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
                <div> <h2>{`${templateData.firstname} ${templateData.lastname}`}</h2>
                    <p>{templateData.profession}</p></div></div>
                <p>{templateData.summary}</p>
            </div>
            <div className='Resume5-Container'>
                <div className='Resume5-RightSide-Container col-lg-6'>
                    <h4 style={{ lineHeight: "5px" }}>Experince:</h4>
                    <hr></hr>
                    
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
                    <hr></hr>


                    <section>
                        <h2>Education</h2>
                        {templateData.education.map((edu, index) => (
                            <div key={index}>
                                <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
                                <p>{`${edu.sclName}, ${edu.sclLocation} | Graduated: ${edu.gradeYear}`}</p>
                            </div>
                        ))}
                    </section>

                    <hr></hr>
                    <h4>disclaimer</h4>
                    <p>{templateData.declaration}</p>
                </div>
                {/* left side part*/}
                <div className='Resume5-LeftSide-Container col-lg-4'>
                    <h4 className='Resume5-Headsings'>Personal Info</h4>
                    <h3>Contact</h3>
                    <p>Email: {templateData.email}</p>
                    <p>Phone: {templateData.phone}</p>
                    <li>Linkedin:{templateData.linkedIn}</li>
                    <h4 className='Resume5-Headsings'>Skills</h4>
                    <ul>
                        {templateData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <h4 className='Resume5-Headsings'>Languages</h4>
                    <ul>
                        {templateData.languages.map((Language, index) => (
                            <li key={index}>{Language}</li>
                        ))}
                    </ul>
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

                </div>
            </div>
        </>
    )
}