import React, { useEffect } from "react";
import "./ProjectsContainer.css";
import { myProjects, mySkills } from "../../config/data";
import Project from "../project/Project";
import Message from "../message/Message";
import { useState } from "react";
import Skill from "../skill/Skill";
import SkillDetails from "../skillDetails/SkillDetails";

function ProjectsContainer(props) {
  const [id, setId] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {}, [index]);

  useEffect(() => {}, [id]);

  return (
    <div className="projects">
      <section className="projects-section">
        <div className="welcome">
          <div className="header">
            {" "}
            <span>My Portfolio!</span> <br></br> Projects & Skills{" "}
          </div>
        </div>

        <div className="project-list">
          {myProjects.map((v, i) => (
            <Project
              key={i}
              project={v.project}
              info={v.info}
              type={v.type}
              description={v.description}
              link={v.link}
              fetchProjectInfo={() => {
                setId(v.id);
              }}
            />
          ))}
        </div>
      </section>
      <section className="messages-section">
        <div className="skill-subsection">
          <div className="skills">
            {mySkills.map((v, i) => (
              <Skill key={i} area={v.area} onClickEvent={() => setIndex(i)} />
            ))}
          </div>
          <div className="skill-details">
            {
              <SkillDetails
                area={
                  index === 4
                    ? `My ${mySkills[index].area}: `
                    : `My ${mySkills[index].area} Skills: `
                }
                detail={mySkills[index].details}
              />
            }
          </div>
        </div>

        <div className="messages">
          <div className="message-list">
            {
              <Message
                key={myProjects[id - 1].id}
                nameofclass={"message-container1"}
                project={myProjects[id - 1].project}
                info={myProjects[id - 1].info}
                description={myProjects[id - 1].description}
                photo={myProjects[id - 1].photo}
                link={myProjects[id - 1].link}
              />
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsContainer;
