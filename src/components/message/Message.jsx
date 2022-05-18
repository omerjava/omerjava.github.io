import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className={props.nameofclass}>
      <div className="message">
        <div className="top">
          <div className="project-name">{props.project}</div> 
          <div className="info">{props.info}</div>{" "}
        </div>
        <div className="message-body"><img src={props.photo} alt={props.project} /> </div>
        <div className="message-footer">
        <a href={props.link}>Visit the project website!</a>
        <span>{props.description}</span>
        </div>
        
      </div>
    </div>
  );
}

export default Message;
