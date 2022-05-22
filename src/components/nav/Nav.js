import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav-bar">
      <ul className="nav justify-content-end">
        <li class="nav-item">
          <a className="nav-link disabled">LINA CHOI</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            PROJECTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}
