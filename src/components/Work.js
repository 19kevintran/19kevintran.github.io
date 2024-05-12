import "./ProjectCardStyles.css";
import React from "react";
import project1 from "../assets/backgroundimg.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={project1} alt="image" />
          <h2 className="project-title">Projects title</h2>
          <div className="project-details">
            <p>PROJECT DETAILS</p>
            <div className="project-buttons">
              <NavLink to="url.com" className="view-button">
                View BUTTON
              </NavLink>
              <NavLink to="url.com" className="view-button">
                View BUTTON
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
