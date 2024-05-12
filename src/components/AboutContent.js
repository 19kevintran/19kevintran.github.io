import "./AboutContent.css";
import React from "react";
import React1 from "../assets/backgroundimg.jpg";
import CageApp from "../assets/CageApp.png";

import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm am a full stack developer creating a react Portfolio</p>
        <Link to="/contact">
          <button className="contact-btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={CageApp} className="img" alt="true" />
          </div>
          <div className="image-stack bottom">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
