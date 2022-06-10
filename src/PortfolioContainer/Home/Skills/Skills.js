import React from "react";

const Skills = () => {
  return (
    <div>
      <h1 className="text-white text-center p-5 mt-5">Skills</h1>
      <div className="w-50 mx-auto">
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped"
          role="progressbar"
          style={{"width": "90%"}}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>HTML</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{"width": "85%"}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>CSS</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-info"
          role="progressbar"
          style={{"width": "75%"}}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>JavaScript</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-warning"
          role="progressbar"
          style={{"width": "80%"}}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>React Js</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          style={{"width": "85%"}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>Bootstrap</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped"
          role="progressbar"
          style={{"width": "80%"}}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>Tailwind CSS</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{"width": "65%"}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>Node Js</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-info"
          role="progressbar"
          style={{"width": "60%"}}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>MongoDB</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-warning"
          role="progressbar"
          style={{"width": "80%"}}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>Firebase Auth</h6>
      </div>
      <div class="progress m-2" style={{"height": "25px"}}>
        <div
          class="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          style={{"width": "80%"}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <h6>Rest API</h6>
      </div>
      </div>
    </div>
  );
};

export default Skills;
