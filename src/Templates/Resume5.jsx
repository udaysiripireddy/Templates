import React from 'react';
import templateData from './templateData';

export default function Resume5() {
  return (
    <>
      <div className='a4-resume-container bg-white shadow-lg rounded-lg p-8 border-2 border-gray-200 mx-auto my-8'>
        {/* Header Section */}
        <div className='a4-header flex items-center justify-center mb-8'>
          <div className='ml-6'>
            <h2 className='text-4xl font-extrabold text-gray-800'>{`${templateData.firstname} ${templateData.lastname}`}</h2>
            <p className='text-xl text-gray-600 font-medium'>{templateData.profession}</p>
          </div>
        </div>

        {/* Summary Section */}
        <p className='mb-10 text-justify text-gray-700 leading-relaxed'>
          {templateData.summary}
        </p>

        {/* Flex Container for Left and Right Sections */}
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Right Side Section */}
          <div className='a4-right bg-gray-50 p-6 rounded-lg flex-1'>
            <div className='mb-8'>
              <h4 className='text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2'>Experience</h4>
              {/* Experience Section */}
              <section>
                <h2 className='text-xl font-bold mb-3 text-gray-800'>Projects</h2>
                {templateData.projects.map((project, index) => (
                  <div key={index} className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-700'>{project.title}</h3>
                    <p className='text-gray-600 leading-relaxed'>{project.description}</p>
                    <p className='mt-2'>
                      <strong className='font-semibold'>Technologies:</strong> {project.technologies.join(', ')}
                    </p>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-indigo-600 hover:underline mt-2 inline-block'
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </section>
            </div>

            {/* Education Section */}
            <div className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2'>Education</h2>
              {templateData.education.map((edu, index) => (
                <div key={index} className='mb-4'>
                  <h3 className='font-semibold text-gray-700'>{edu.degree} in {edu.fieldOfStudy}</h3>
                  <p className='text-gray-600'>
                    {edu.sclName}, {edu.sclLocation} | Graduated: {edu.gradeYear}
                  </p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className='mt-4'>
              <h4 className='font-semibold text-gray-800'>Disclaimer</h4>
              <p className='text-gray-600'>{templateData.declaration}</p>
            </div>
          </div>

          {/* Left Side Section */}
          <div className='a4-left bg-gray-100 p-6 rounded-lg flex-1'>
            {/* Personal Info */}
            <div className='mb-8'>
              <h4 className='text-xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300 pb-2'>Personal Info</h4>
              <h3 className='text-lg font-bold text-gray-700'>Contact</h3>
              <p className='text-gray-600'>Email: {templateData.email}</p>
              <p className='text-gray-600'>Phone: {templateData.phone}</p>
              <p className='text-gray-600'>LinkedIn: {templateData.linkedIn}</p>
            </div>

            {/* Skills Section */}
            <div className='mb-8'>
              <h4 className='text-xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300 pb-2'>Skills</h4>
              <ul className='list-disc list-inside text-gray-600'>
                {templateData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Languages Section */}
            <div className='mb-8'>
              <h4 className='text-xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300 pb-2'>Languages</h4>
              <ul className='list-disc list-inside text-gray-600'>
                {templateData.languages.map((Language, index) => (
                  <li key={index}>{Language}</li>
                ))}
              </ul>
            </div>

            {/* Certifications Section */}
            <section>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>Certifications</h2>
              {templateData.certifications ? (
                templateData.certifications.map((certification, index) => (
                  <p key={index} className='text-gray-600'>{certification}</p>
                ))
              ) : (
                <p className='text-gray-600'>No certifications listed</p>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Add this CSS to ensure A4 size with proper padding and margin */}
      <style jsx>{`
        .a4-resume-container {
          width: 210mm;
          height: 297mm;
          padding: 20mm;
          margin: auto;
          background-color: white;
        }
        @media print {
          .a4-resume-container {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 10mm;
          }
        }
      `}</style>
    </>
  );
}
