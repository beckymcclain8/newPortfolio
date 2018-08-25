import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <ProfileImage />
        <div className="projectList">Here's a list of projects!</div>
      </div>
    );
  }
}

export default Projects;
