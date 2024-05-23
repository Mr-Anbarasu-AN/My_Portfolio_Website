import React, { useEffect } from 'react';
import './Projects.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Projects = () => {
  useEffect(() => {
    const projectImagesContainer = document.querySelector('.project-images');

    const handleAnimationIteration = () => {
      projectImagesContainer.style.animation = 'none';
      void projectImagesContainer.offsetWidth; // Trigger reflow
      projectImagesContainer.style.animation = 'scrollRightToLeft 5s linear infinite'; // Adjust the duration as needed
    };

    projectImagesContainer.addEventListener('animationiteration', handleAnimationIteration);

    return () => {
      projectImagesContainer.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div className="projects-container">
      <div className="project-images">
        <img src="project1.jpg" alt="Project 1" />
        <img src="project2.jpg" alt="Project 2" />
        <img src="project3.jpg" alt="Project 3" />
        {/* Add more project images as needed */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Projects;








/*

import React from "react";
import Github from "./Images/Github.jpg";
import "./Projects.css";

function Projects() {
  return (
    <div className="body">
      <h1 className="Project" style={{marginTop: 0, padding: 10}}>My Projects</h1>
      <ul className="project-list">
      
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Fullstack_Project.git">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Fullstack Project</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Wish-Up_Gift_Boxes.git">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Whip-Up Gift Box</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Weather_Report.git">
          <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Weather Report</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/React_Card_Flip.git">
            <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>React Card Flip</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Number_Guessing_Game.git">
            <img className="project-image" src={Github} alt="Profile" />
          </a>
          <p>Number Guessing Game</p>
        </li>
      </ul>
    </div>
  );
}


export default Projects;

/*

*/