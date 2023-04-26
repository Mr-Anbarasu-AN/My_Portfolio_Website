import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy.jpg";

function Home() {
  return (
    <div>
      <h1>I'm ANBARASU AN</h1>
      <p>Full stack web developer</p>
      <center>
      <Link to="/About">
      <img src={ProfilePhoto} alt="Profile" style={{ width: '100px', height: '100px' }} />
      </Link>
      
      </center>
      <center>
        <Link to="/Projects" style={{ textDecoration: 'none' }}>
          <button>View My Projects</button>
        </Link>
      </center>
    </div>
  );
}

export default Home;
