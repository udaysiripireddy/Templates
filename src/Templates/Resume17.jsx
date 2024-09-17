import React from 'react';

const CenteredResume = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      {/* Resume Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 mx-auto" style={{ width: '21cm', height: '29.7cm' }}>
        <div className="flex h-full">
          {/* Left Container */}
          <div className="w-1/2 p-6 bg-gray-100 border-r border-gray-300">
            <div className="text-center">
              <img
                src="path-to-image" // Add the image path here
                alt="profile"
                className="rounded-full mb-4"
                style={{ width: '100px', height: '100px' }}
              />
            </div>
            <header className="mb-6">
              <div className="text-3xl font-bold mb-2">Uday Kumar Siripireddy</div>
              <div className="text-lg text-gray-700 mb-2">Software Developer</div>
              <div className="text-lg text-gray-700 mb-2">HYD, INDIA</div>
              <div className="text-lg text-gray-700">PHONE: 123-456-789</div>
              <div className="text-lg text-gray-700">EMAIL: UDAYREDDY@GMAIL.COM</div>
            </header>

            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">LinkedIn</button>
              <button className="bg-gray-700 text-white py-2 px-4 rounded">GitHub</button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Summary</h3>
              <p className="text-gray-700">
                Motivated, proactive, and hands-on developer with 5+ years' experience developing and managing
                information systems for software development and cloud-based solutions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Skills</h3>
              <ul className="list-disc ml-4 text-gray-700">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>

          {/* Right Container */}
          <div className="w-1/2 p-6 bg-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="text-gray-700">
                <h4 className="font-semibold">Avanthi pg and research academy</h4>
                <p>Master's in B.tech (June 2020)</p>
                <p>JNTUH</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="text-gray-700">
                <h4 className="font-semibold">Software Engineer at Numetry Technology</h4>
                <p>Pune, Maharashtra (July 2024 - Present)</p>
                <ul className="list-disc ml-4">
                  <li>Developed and maintained web applications using React and Node.js.</li>
                  <li>Collaborated with cross-functional teams to design and implement new features.</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <ul className="list-disc ml-4 text-gray-700">
                <li>Certified web developer</li>
                <li>React Developer Certification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Declaration</h3>
              <p className="text-gray-700">
                I hereby declare that the information provided is true to the best of my knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredResume;
