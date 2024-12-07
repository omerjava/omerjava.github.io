import bugFinders from "../assets/bug-finders.png";
import globalChallenges from "../assets/global-challenges.png";
import googleClone from "../assets/google-clone.png";
import netflixClone from "../assets/netflix-clone.png";
import hackYourFilm from "../assets/hack-your-film.png";
import antwerpPizza from "../assets/antwerp-pizza.png";
import chatO from "../assets/chat-o.png";
import myPortfolio from "../assets/portfolio-website.png";
import askYourQuestion from "../assets/Ask-Your-Question.jpg";
import employeeManagementSystem from "../assets/Employee-Management-System.jpg";
import wig from "../assets/wig.png";
import mapeo from "../assets/mapeo.png";
import terrascope from "../assets/terrascope.png";


export const myProjects = [
  {
    id: 1,
    type: "work experience",
    project: "WatchItGrow",
    link: "http://www.watchitgrow.be",
    codeLink:"", 
    photo: wig,
    info: "Angular-Spring-ElasticSearch-Python(Flask-FastApi)-Apache Nifi-Cypress",
    description: "Contributed to WatchItGrow project between Mar 2023-Mar 2025, completed tasks on Angular FE, Java and Python RestApi services and database, wrote tests with Cypress at FE.",
  },
  {
    id: 2,
    type: "work experience",
    project: "Mapeo",
    link: "http://mapeo.be",
    codeLink:"", 
    photo: mapeo,
    info: "Angular-Node.js Serverless(AWS)-PostgreSQL-Cypress",
    description: "Took part in FE and BE development and testing between Feb 2024 and Feb 2025",
  },
  {
    id: 3,
    type: "work experience",
    project: "Terrascope Viewer",
    link: "http://viewer.terrascope.be",
    codeLink:"", 
    photo: terrascope,
    info: "Angular-Nest.js-ElasticSearch",
    description: "Helped to maintenance works and fixing bugs at FE between Jan 2024-Nov 2024",
  },
  {
    id: 4,
    type: "fullstack",
    project: "Ask Your Question",
    link: "",
    codeLink: "https://github.com/omerjava/askYourQuestionSpringApp", 
    photo: askYourQuestion,
    info: "React-Spring-MySQL",
    description: "",
  },
  {
    id: 5,
    type: "fullstack",
    project: "Employee Management System",
    link: "",
    codeLink: "https://github.com/omerjava/employeeManagerAppBackend", 
    photo: employeeManagementSystem,
    info: "Angular-Spring-MySQL",
    description: "",
  },
  {
    id: 6,
    type: "fullstack",
    project: "Awesome Chat App",
    link: "",
    codeLink: "https://github.com/omerjava/chat-o-react/tree/main", 
    photo: chatO,
    info: "React-Strapi",
    description: "",
  },
  {
    id: 7,
    type: "fullstack",
    project: "BugFinders",
    link: "",
    codeLink:"https://github.com/omerjava/bug-finders-backend", 
    photo: bugFinders,
    info: "React-NodeJs-Express-PostgreSQL",
    description: "",
  },
  {
    id: 8,
    type: "fullstack",
    project: "Hack Your Film",
    link: "",
    codeLink:"https://github.com/omerjava/HackYourFilm-React-Project", 
    photo: hackYourFilm,
    info: "React-Java Spring-PostgreSQL",
    description: "",
  },
  {
    id: 9,
    type: "frontend",
    project: "Antwerp Pizza",
    link: "https://omerjava.github.io/antwerp-pizza/",
    codeLink:"", 
    photo: antwerpPizza,
    info: "React, Frontend",
    description: "",
  },
  {
    id: 10,
    type: "frontend",
    project: "My Portfolio Website",
    link: "https://omerjava.github.io",
    codeLink:"", 
    photo: myPortfolio,
    info: "React, Frontend",
    description: "",
  },
  {
    id: 11,
    type: "frontend",
    project: "Global Challenges",
    link: "https://global-challenges-website.glitch.me",
    codeLink:"", 
    photo: globalChallenges,
    info: "HTML-CSS, Static Website",
    description: "",
  },
  {
    id: 12,
    type: "frontend",
    project: "React Google Clone",
    link: "https://omerjava.github.io/react-google-clone/",
    codeLink:"", 
    photo: googleClone,
    info: "UI-React-Frontend",
    description: "",
  },
  {
    id: 13,
    type: "frontend",
    project: "React Netflix Clone",
    link: "https://omerjava.github.io/react-netflix-clone/",
    codeLink:"", 
    photo: netflixClone,
    info: "UI-React-Frontend",
    description: "",
  },
];

export const mySkills = [
  {
    area: "Frontend",
    details: "Angular, React, NgRx, RxJs, JavaScript, TypeScript, Cypress",
  },
  {
    area: "Backend",
    details: "Java Spring, Hibernate, Spring JPA, JDBC, Apache Nifi, RestAPI, Node.js, Express.js, Flask, FastAPI",
  },
  {
    area: "Database",
    details: "MySQL, PostgreSQL, ElasticSearch",
  },
  {
    area: "Prog.Language",
    details: "Java, JavaScript, Python, TypeScript",
  },
  {
    area: "Education",
    details:
      "Bachelor of Science (Economics), Singapore Management University, 2003-2007; Hack Your Future Frontend Development Program, Oct 2021- June 2022; Java EE Opleiding, Multimedi-VDAB, June 2022-Feb 2023",
  },
  {
    area: "Language",
    details: "English: advanced, Dutch: good, Turkish: native",
  },
];
