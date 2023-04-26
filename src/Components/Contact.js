import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
