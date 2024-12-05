import React, { useState } from 'react';
import './About.css';
import myImage from '../assets/images/myImage.png'; // Ensure this path is correct

const About = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div className="about-container">
      <div className="about-image">
        <img src={myImage} alt="My Image" />
      </div>
      <div className="about-text">
        <h1><b>ABOUT ME</b></h1>
        <h3>Frontend Developer | MERN Stack Enthusiast</h3>
        <p>
          I am a passionate and dedicated frontend developer with a strong focus on building dynamic, responsive, and user-friendly web applications. With experience in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js), I love turning ideas into interactive, high-quality products. I am always looking to improve my skills, contribute to creative projects, and optimize the user experience through clean, scalable code.
        </p>

        <div className="connect-section">
          {/* Skills Section */}
          <div
            className={`connect-box ${showSkills ? 'open' : ''}`}
            onClick={() => setShowSkills(!showSkills)}
          >
            <h4>Skills & Expertise</h4>
            {showSkills && (
              <ul>
                <li>Frontend Development: HTML, CSS, JavaScript, React.js</li>
                <li>Backend Development: Node.js, Express.js</li>
                <li>Databases: MongoDB, MySQL</li>
               
                <li>Responsive Design & UX/UI</li>
               
              </ul>
            )}
          </div>

          {/* Experience Section */}
          <div
            className={`connect-box ${showExperience ? 'open' : ''}`}
            onClick={() => setShowExperience(!showExperience)}
          >
            <h4>Experience</h4>
            {showExperience && (
              <p>
                I have worked on a variety of projects, both personal and professional, focusing on responsive web applications, interactive user interfaces, and full-stack development. My hands-on experience with the <strong>MERN stack</strong> has allowed me to build scalable solutions that meet the specific needs of clients.
              </p>
            )}
          </div>

          {/* Education Section */}
          <div
            className={`connect-box ${showEducation ? 'open' : ''}`}
            onClick={() => setShowEducation(!showEducation)} // Fixed toggle for Education
          >
            <h4>Education</h4>
            {showEducation && (
              <p>
                I hold a degree in <strong>Computer Science and Engineering</strong>{' '}
                from <strong>Vivekanandha College of Engineering for Women</strong>, where I gained a strong foundation in software development, algorithms, and data structures.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
