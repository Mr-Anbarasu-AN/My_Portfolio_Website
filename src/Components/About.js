import React from "react";
import "./About.css"; // Import the CSS file for styling
import Skill from "./Skills";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy1.png";
import Tools from "./Tools";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Navbar/>
    <div className="body">
      <div className="aboutcontainer">
        <div className="leftcontainer">
          <h1>About Me</h1>
          <p>I'm Anbarasu AN!!!</p>
          <p>I am a full stack web developer based in Coimbatore.</p>
          <p>I have a diploma in computer engineering from Sakthi Polytechnic College in Erode.</p>
          <p>I have been studying B.Tech-IT at Sri Krishna College of Engineering and Technology in Coimbatore.</p>
          <p>My hobbies include photo editing, logo designing, and programming.</p>
        </div>
        <div className="rightcontainer">
          <center>
            <Link to="/About">
              <img src={ProfilePhoto} alt="Profile1" style={{ width: '350px', height: '350px' }} />
            </Link>
          </center>
        </div>
      </div>
    
      <div>
        <Skill />
        <Tools />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;