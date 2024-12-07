import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className={props.nameOfClass}>
      <div className="projectCard">
        <div className="top">
          <div className="project-name">{props.project}</div>
          <div className="info">{props.info}</div>{" "}
        </div>
        <div className="projectCard-body">
          <img src={props.photo} alt={props.project} />{" "}
        </div>
        <div className="projectCard-footer">
          {props.link && props.link.trim() !== "" && (
            <a href={props.link}>Visit the project website!</a>
          )} 
          {props.codeLink && props.codeLink.trim() !== "" && (
            <a href={props.codeLink}>Project code on Github!</a>
          )}  
          {props.description && props.description.trim() !== "" && (
            <span>{props.description}</span>
          )}                  
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
