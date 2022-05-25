import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <h1>projects</h1>
      </div>

      <div className="project-card-container">
        <div className="project-card">
          <a href="#" target="_blank" rel="noreferrer">
            <h3>COMING SOON!</h3>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/RoadTripApp"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Getaway | Road Trip App</h3>
            <p>Road trip planner that calculates real time traveling</p>
            <p>HTML, CSS, JavaScript, Server-side API</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://knowyourteacher.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Know Your Teacher App</h3>
            <p>
              Teachers fill out forms so that students are able to get to know
              them better
            </p>
            <p>JavaScript, Node, Express, Handlebars, MySQL</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/E-Commerce-Back-End"
            target="_blank"
            rel="noreferrer"
          >
            <h3>E-Commerce Back End</h3>
            <p>
              Back end for an e-commerce site using Sequelize to interact with a
              MySQL database
            </p>
            <p>JavaScript, Node, Express, MySQL</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/Social-Network-API-NoSQL"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Social Network API</h3>
            <p>
              API for social network where users can share their thoughts and
              reactions
            </p>
            <p>JavaScript, Node, Express, Mongoose</p>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/choilina16/Professional-README-Generator"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Professional README Generator</h3>
            <p>
              Helps user create a professional README based on multiple prompts
            </p>
            <p>JavaScript, Node, Inquirer</p>
          </a>
        </div>
      </div>
    </div>
  );
}
