import "./ProjectCardStyles.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";


const Projects = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, index) => {
            return (
                <ProjectCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Projects;
