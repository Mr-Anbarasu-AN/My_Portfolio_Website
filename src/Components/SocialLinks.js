import React from "react";
import "./SocialLinks.css";
import Mail from "./Images/Mail.webp";
import Github from "./Images/Github1.png";
import Instagram from "./Images/Instagram.webp";
import Linkedin from "./Images/Linkedin.png";
import Twitter from "./Images/Twitter.png";

function SocialLinks() {
  return (
    <>
    <br/>
    <div>
      
      
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfmrfTTSlXGZFzXfxJJNXhGCdVdknMMpsDNBTpcKwlpQgJGNnBjDSwRWcbLkqNXwtrztXB">
      <img src={Mail} alt="Profile" style={{ width: '40px', height: '40px' }} />
      </a>
     

      <a href="https://github.com/Mr-Anbarasu-AN">
      <img src={Github} alt="Profile" style={{ width: '40px', height: '40px' }} />
      </a>
     

      <a href="https://www.linkedin.com/in/anbarasu-an-a93500258/">
      <img src={Linkedin} alt="Profile" style={{ width: '40px', height: '40px' }} />
      </a>
     

      <a href="https://www.instagram.com/mr.emperor_of_love/">
      <img src={Instagram} alt="Profile" style={{ width: '40px', height: '40px' }} />
      </a>
      

      <a href="https://twitter.com/MrEmperoroflove/">
      <img src={Twitter} alt="Profile" style={{ width: '40px', height: '40px' }} />
      </a>
    </div></>
  );
}

export default SocialLinks;
