import React, { useState } from "react";
import "./Project.css";

function Project(props) {
  const [showMobileCard, setShowMobileCard] = useState(false);


  return (
    <div className="project-container" onClick={props.fetchProjectInfo}>
      <div className="project" onClick={()=>setShowMobileCard(!showMobileCard)}>
        <div>{props.project}</div>
        <div className="type">{props.type}</div>
      </div>
      <div className={showMobileCard ? "mobile-projectCard" : "no-mobile-projectCard"}>
        {props.mobileProjectCard}
      </div>
    </div>
  );
}

export default Project;
