import React from 'react';
import './About.css';
// importing in icons from https://react-icons.github.io/react-icons
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillFileWord } from 'react-icons/ai';
// importing in picture from assets folder.
// it wouldn't work when I would just path it normally
import profile from '../../assets/profile.jpg';

export default function About() {
  // dont forget ()
  return (
    <div className="container about-me-container">
      <div className="container profile-container">
        <img src={profile} alt="me" />
        <h1>
          Hi, my name is <span>Lina</span>!
        </h1>
        <h5>Fullstack Web Developer</h5>
      </div>

      <div className="container about-me-details">
        <div className="color">
          <h1>about me</h1>
          <p>
            I am a 1st generation Korean-American, born and raised in Atlanta,
            Georgia. My husband and I live in Dacula, Georgia with our
            3-year-old, mixed-breed dog named Miller (and yes, he's named after
            Miller Lite #itsmillertime). Outside of coding, I enjoy traveling,
            golfing, and gardening. During the pandemic, I've accumulated a fair
            bit of houseplants. Far more than a normal person should!
          </p>
          <br></br>
          <p>
            I graduated from Georgia State University in 2015 with a bachelors
            in Accounting. I've been working in the accounting field every since
            I graduated, specifically as an Accounting Manager for the past 5
            years. Recently, I decided on a BIG career change into web
            development. I am currently enrolled in a coding bootcamp with
            Georgia Tech and is expected to graduate in early June 2022. Upon
            graduation, I would like to continue my studying into learning more
            about building Android apps and Kotlin.
          </p>
        </div>

        <div className="about-me-socials">
          <a
            href="https://github.com/choilina16"
            target="_blank"
            // for security risk in older browsers
            rel="noreferrer"
          >
            <BsGithub size={42} className="socials-color" />
          </a>
          <a
            href="https://www.linkedin.com/in/lina-choi-0bb7547b/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={42} className="socials-color" />
          </a>
          <a
            href="https://docs.google.com/document/d/1PC_1iTvL3C_jE6gpAVp4rAQBamB57s_Dp6MdYQHnuKw/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFileWord size={42} className="socials-color" />
          </a>
        </div>

        <div className="about-me-button">
          <button
            className="button"
            onclick="window.location.href='https://docs.google.com/document/d/1PC_1iTvL3C_jE6gpAVp4rAQBamB57s_Dp6MdYQHnuKw/edit?usp=sharing';"
          >
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
}
