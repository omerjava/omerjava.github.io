import React from "react";
import "./Project.css";

function Project(props) {

  return (
    <div className="project-container" onClick={props.fetchProjectInfo}>
      <div className="project">
        <div>{props.project}</div>
        <div className="type">{props.type}</div>
      </div>
    </div>
  );
}

export default Project;
