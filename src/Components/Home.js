
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy.jpg";
import Type from "./Type";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar/>
      .
      <div className="homebody">
        <h1 className="Hi">Hi There!!!</h1>
        <div className="home-container">
          <div className="left-container">
            <br/>
            <h1 className="Name">I'm ANBARASU AN</h1>
            <div>
              <Type />
            </div>
            <Link to="/Projects" style={{ textDecoration: 'none' }}>
              <button>View My Projects</button>
            </Link>
          </div>
          <div className="right-container">
            <div className="circle-container1">
              <div className="circle-container2">
                <Link to="/About">
                  <img src={ProfilePhoto} alt="Profile" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <Footer/>
      </div>
    </>
  );
}

export default Home;


/*

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy.jpg";
import Type from "./Type";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home() {
  return (
    <>
    <Navbar/>
    <div className="homebody">
    <h1 className="Hi" >Hi There!!!</h1>
    <div className="home-container">
      <div className="left-container">
        <br/>
        <h1 className="Hi">I'm ANBARASU AN</h1>
        <div >
          <Type />
        </div>
          <Link to="/Projects" style={{ textDecoration: 'none' }}>
            <button>View My Projects</button>
          </Link>
      </div>
      <div className="right-container">
          <br/>
          <Link to="/About">
            <img src={ProfilePhoto} alt="Profile" />
          </Link>
      </div>
    </div>
    </div>
    <div className="FooterBottom">
    <Footer/>
    </div>
    </>
  );
}

export default Home;




/*

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy.jpg";
import Type from "./Type"

function Home() {
  return (
    <div>
      <h1>I'm ANBARASU AN</h1>
      <div style={{ padding: 50, textAlign: "left" }}>
        <Type />
      </div>
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


/*

*/