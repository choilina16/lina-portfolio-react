import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-container" id="projects-nav">
      <div className="projects-heading">
        <h1>projects</h1>
      </div>

      <div className="project-card-container">
        <div className="project-card">
          <a href="#about-me-container">
            <h4>COMING SOON!</h4>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/RoadTripApp"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Getaway Road Trip App</h4>
            {/* <p>Road trip planner that calculates real time traveling</p> */}
            <p>HTML, CSS, JavaScript, Server-side API</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/know-your-teacher"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Know Your Teacher App</h4>
            {/* <p>
              Teachers fill out forms so that students are able to get to know
              them better
            </p> */}
            <p>JavaScript, Node, Express, Handlebars, MySQL</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/E-Commerce-Back-End"
            target="_blank"
            rel="noreferrer"
          >
            <h4>E-Commerce Back End</h4>
            {/* <p>
              Back end for an e-commerce site using Sequelize to interact with a
              MySQL database
            </p> */}
            <p>JavaScript, Node, Express, MySQL</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/Social-Network-API-NoSQL"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Social Network API</h4>
            {/* <p>
              API for social network where users can share their thoughts and
              reactions
            </p> */}
            <p>JavaScript, Node, Express, Mongoose</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/Professional-README-Generator"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Professional README Generator</h4>
            {/* <p>
              Helps user create a professional README based on multiple prompts
            </p> */}
            <p>JavaScript, Node, Inquirer</p>
          </a>
        </div>
      </div>
    </div>
  );
}
