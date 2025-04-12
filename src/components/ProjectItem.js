import React from "react";
import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{user.name}</h3>
      <p>{user.about}</p>
      <div className="technologies">
        {technologies && technologies.map((technology)=>(
          <span key={technology} className="technology">{user.projects.technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
