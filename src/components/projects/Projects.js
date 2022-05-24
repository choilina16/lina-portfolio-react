import React from 'react';
import './Projects.css';


export default function Projects() {
  // dont forget ()
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <h1>projects</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 my-projects">
        <div className="col">
          <div className="card">
            <a
              href="https://choilina16.github.io/01-Code-Refactor-Homework/"
              target="_blank"
              rel="noreferrer"
              className="projects-image-1"
            >
              <h3>Code-Refactor</h3>
              <p>HTML, CSS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
