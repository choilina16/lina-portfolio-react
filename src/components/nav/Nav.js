import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav-bar">
      <ul className="nav justify-content-end">
        <li class="nav-item">
          <a className="nav-link nav-name" href="#">
            LINA CHOI
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me-nav">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects-nav">
            PROJECTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-nav">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}
