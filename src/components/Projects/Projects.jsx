import React from "react";
import Card from "../Card/Card";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      link: "https://dashing-chimera-c833f2.netlify.app/",
      description: "Sitio web SPA para buscar paises y crear actividades relacionadas con paises.",
      title: "Countries",
      technologies : 'NodeJS React Redux Javascript'
    },
    {
      link: "https://github.com/EzequielArias/Knight-Shovel",
      description : "Sitio web SPA con React, HTML y CSS, para un clan de videojuegos.",
      title : 'Knight-Shovel',
      technologies : "Javascript React"
    },
  ];

  return (
    <div className="project-container">
      <h2 id="projects">- Proyectos</h2>
      <div className="projects-box">
        {projectList.map(p => {
            return (<Card link={p.link} title={p.title} description={p.description} technologies={p.technologies}/>)
        })}
      </div>
    </div>
  );
};

export default Projects;
