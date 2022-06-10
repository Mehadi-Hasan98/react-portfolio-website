import React from "react";
import "./About.css";
import profilePhoto from "../../assets/Home/profilePhoto.png";

const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-white head-tag">About Me</h1>
      </div>
      <div class="row w-75 mx-auto mt-5">
        <div class="col-sm-6">
          <img src={profilePhoto} className="w-75 rounded" alt="" />
        </div>
        <div class="col-sm-6 mt-5">
          <div class="card-bg rounded">
            <div class="card-body">
              <h5 class="card-title card-detail">About Me</h5>
              <p class="card-text">
              I'm Mehadi Hasan, a multidisciplinary designer & developer. I'm always down for something new and challenging! I'm here to help you create beautifully formatted websites. My projects mostly includes web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
