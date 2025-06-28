import { useState } from 'react'
import './App.css'

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:Fatimamunir7821@gmail.com';
  };

  return (
    <div className="app-wrapper">
      <div className="portfolio-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Fatima Munir</h1>
            <h2>Full Stack Web Developer</h2>
            <p>Specializing in React.js & Node.js Development</p>
            <button className="cta-button" onClick={scrollToProjects}>View My Work</button>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about-grid">
            <div className="about-image">
              <div className="image-overlay"></div>
            </div>
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I'm a passionate web developer with expertise in creating modern, responsive, 
                and user-friendly websites. With a strong foundation in React.js and Node.js, 
                I help businesses and clients bring their digital visions to life through 
                clean, efficient, and scalable web solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills" id="skills">
          <h2>My Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon frontend-icon"></div>
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-card">
              <div className="skill-icon backend-icon"></div>
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Database Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image ecommerce-image"></div>
              <h3>E-commerce Platform</h3>
              <p>A full-stack e-commerce solution built with React and Node.js</p>
            </div>
            <div className="project-card">
              <div className="project-image portfolio-image"></div>
              <h3>Portfolio Website</h3>
              <p>A responsive portfolio website showcasing creative work</p>
            </div>
            <div className="project-card">
              <div className="project-image task-image"></div>
              <h3>Task Management App</h3>
              <p>A real-time task management application with user authentication</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="contact-overlay"></div>
          <div className="contact-container">
            <div className="contact-image">
              <div className="image-overlay"></div>
            </div>
            <div className="contact-content">
              <h2 className="section-title">Get In Touch</h2>
              <p>Let's create something amazing together!</p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon email-icon"></div>
                  <p className="email-text">Fatimamunir7821@gmail.com</p>
                </div>
                <div className="contact-item">
                  <div className="contact-icon location-icon"></div>
                  <p>Pakistan</p>
                </div>
                <div className="contact-item">
                  <div className="contact-icon availability-icon"></div>
                  <p>Available for Freelance</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github-icon"></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon"></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter-icon"></a>
              </div>
              <button className="contact-button" onClick={handleEmailClick}>Contact Me</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
