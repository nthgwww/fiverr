import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";


function ProjectCard({ cat,img, username, pp }) {
  return (
    <Link to="/" className="link">
    <div className="projectCard">
      <img src={img} alt="" />
      <div className="info">
        <img src={pp} alt="" />
        <div className="texts">
          <h2 className="cat">{cat}</h2>
          <span className="username">{username}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;