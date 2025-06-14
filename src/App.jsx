import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <div className="portfolio-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Fatima Munir</h1>
            <h2>Full Stack Web Developer</h2>
            <p>Specializing in React.js & Node.js Development</p>
            <button className="cta-button">View My Work</button>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate web developer with expertise in creating modern, responsive, 
              and user-friendly websites. With a strong foundation in React.js and Node.js, 
              I help businesses and clients bring their digital visions to life through 
              clean, efficient, and scalable web solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills" id="skills">
          <h2>My Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-card">
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
              <h3>E-commerce Platform</h3>
              <p>A full-stack e-commerce solution built with React and Node.js</p>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>A responsive portfolio website showcasing creative work</p>
            </div>
            <div className="project-card">
              <h3>Task Management App</h3>
              <p>A real-time task management application with user authentication</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>Interested in working together? Let's connect!</p>
            <button className="contact-button">Contact Me</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
