import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Discover My Expertise and Portfolio</h2>
          <h3>Hello, I'm <span className="highlight">Johnsi Joy S</span> | MERN Stack Developer</h3>
          <p>
            I specialize in creating high-performance, scalable, and visually engaging web applications. With a deep understanding of the latest web technologies, I craft seamless user experiences while ensuring robust back-end functionality. Take a look at my work and let’s discuss how we can create something exceptional together.
          </p>
        </div>
        <div className="hero-visual">
          <div className="rotating-cube">
            <span className="face face1">MongoDB</span>
            <span className="face face2">Express</span>
            <span className="face face3">React</span>
            <span className="face face4">Node.js</span>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="services">
        <h2>What I Do</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>Custom Web Development</h3>
            <p>Tailored web solutions to meet your business needs. I build responsive, fast, and scalable web applications using the latest technologies.</p>
          </div>
          <div className="service-item">
            <h3>UI/UX Design</h3>
            <p>Design intuitive and engaging user interfaces that deliver a seamless experience across devices.</p>
          </div>
          <div className="service-item">
            <h3>Full-Stack Development</h3>
            <p>Expertise in both front-end and back-end technologies, ensuring a cohesive and high-performance web solution.</p>
          </div>
          <div className="service-item">
            <h3>Consultation & Support</h3>
            <p>Offering ongoing support, maintenance, and strategic consultation for your digital projects.</p>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="why-work-with-me">
        <h2>Why Work With Me?</h2>
        <ul>
          <li>Innovative Solutions: I stay at the forefront of technology trends to deliver modern, functional, and visually appealing applications.</li>
          <li>Client-Centric Approach: I believe in strong communication and collaboration, ensuring that your vision is fully realized.</li>
          <li>Responsive & Scalable: I design applications that work perfectly on any device and scale with your business growth.</li>
          <li>Clean & Efficient Code: I prioritize clean, maintainable, and optimized code, ensuring long-term project sustainability.</li>
        </ul>
      </section>

      {/* My Process Section */}
      <section className="my-process">
        <h2>My Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Discovery & Planning</h3>
            <p>We start by understanding your goals and defining the project scope. This ensures that the final product meets your business needs.</p>
          </div>
          <div className="step">
            <h3>Design & Development</h3>
            <p>I design and develop the user interface and experience, ensuring that the application is not only functional but visually stunning.</p>
          </div>
          <div className="step">
            <h3>Testing & Deployment</h3>
            <p>After rigorous testing, I deploy your application, ensuring that it works flawlessly across all devices and platforms.</p>
          </div>
          <div className="step">
            <h3>Ongoing Support</h3>
            <p>I provide continued support, updates, and maintenance to ensure the application’s success in the long term.</p>
          </div>
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Let’s Collaborate</h2>
        <p>I’m always open to new and exciting projects. If you have an idea or need help bringing your vision to life, I’d love to work with you.</p>
        <Link to="/contact" className="btn btn-cta">Contact Me</Link>
      </section>

     

     
    </div>
  );
};

export default Home;
