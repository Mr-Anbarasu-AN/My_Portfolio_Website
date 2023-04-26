import React from "react";
import Github from "./Images/Github.jpg";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul className="project-list">
      
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Fullstack_Project.git">
          <img className="project-image" src={Github} alt="Project 1" />
          </a>
          <p>Fullstack Project</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Whip-Up_Gift_Box.git">
          <img className="project-image" src={Github} alt="Project 2" />
          </a>
          <p>Whip-Up Gift Box</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Weather_Report.git">
          <img className="project-image" src={Github} alt="Project 3" />
          </a>
          <p>Weather Report</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/React_Card_Flip.git">
            <img className="project-image" src={Github} alt="Project 4" />
          </a>
          <p>React Card Flip</p>
        </li>
        <li>
          <a href="https://github.com/Mr-Anbarasu-AN/Number_Guessing_Game.git">
            <img className="project-image" src={Github} alt="Project 5" />
          </a>
          <p>Number Guessing Game</p>
        </li>
      </ul>
    </div>
  );
}


export default Projects;