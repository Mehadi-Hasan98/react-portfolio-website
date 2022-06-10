import React from "react";
import './Projects.css';
import project1 from '../../../assets/Home/project1.png';
import project2 from '../../../assets/Home/project2.png';
import project3 from '../../../assets/Home/project3.png';
import project4 from '../../../assets/Home/project4.png';

const Projects = () => {
  return (
    <div>
      <h1 className="text-white text-center p-5 mt-5">Projects</h1>
      <div class="card" style={{ width: "24rem" }}>
        <img src={project1} class="card-img-top" style={{height: "14rem"}} alt="..." />
      </div>
      <div class="card" style={{ width: "24rem"}}>
        <img src={project2} class="card-img-top" style={{height: "14rem"}} alt="..." />
      </div>
      <div class="card" style={{ width: "24rem" }}>
        <img src={project3} class="card-img-top" style={{height: "14rem"}} alt="..." />
      </div>
      <div class="card" style={{ width: "24rem" }}>
        <img src={project4} class="card-img-top" style={{height: "14rem"}} alt="..." />
      </div>
    </div>
  );
};

export default Projects;
