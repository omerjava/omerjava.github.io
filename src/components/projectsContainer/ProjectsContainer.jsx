import React from "react";
import "./ProjectsContainer.css";
import { myProjects, mySkills } from "../../config/data";
import Project from "../project/Project";
import { useState } from "react";
import Skill from "../skill/Skill";
import SkillDetails from "../skillDetails/SkillDetails";
import ProjectCard from "../projectCard/ProjectCard";

function ProjectsContainer() {
  const [id, setId] = useState(1);
  const [index, setIndex] = useState(0);

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

        <div className="mobile-project-list">
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
              mobileProjectCard={
                <ProjectCard
                  key={myProjects[v.id - 1].id}
                  nameOfClass={"projectCard-container2"}
                  project={myProjects[v.id - 1].project}
                  info={myProjects[v.id - 1].info}
                  description={myProjects[v.id - 1].description}
                  photo={myProjects[v.id - 1].photo}
                  link={myProjects[v.id - 1].link}
                />
              }
            />
          ))}
          <div className="mobileSkillsSection">
            <div className="skills">
              {mySkills.map((v, i) => (
                <Skill
                  key={i}
                  area={v.area}
                  mobileSkills={
                    <SkillDetails
                      area={
                        i === 4
                          ? `My ${mySkills[i].area}: `
                          : `My ${mySkills[i].area} Skills: `
                      }
                      detail={mySkills[i].details}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="projectCard-section">
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

        <div className="projectCards">
          <div className="projectCard-list">
            {
              <ProjectCard
                key={myProjects[id - 1].id}
                nameOfClass={"projectCard-container1"}
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
