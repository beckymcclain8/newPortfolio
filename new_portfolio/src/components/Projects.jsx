import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import InfoLink from "./Links";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <Banner
          className="bannerText"
          homeBanner="My Projects!"
          homeBanner2="Blood, sweat, and tears went into these. "
        />
        {/* <ProfileImage /> */}
        <InfoLink className="about2" title="About" />
        <InfoLink className="projects2" title="Projects" />
        <InfoLink className="blog2" title="Blog" />
        <InfoLink className="contact2" title="Contact" />
        <InfoLink className="home" title="Home" />
        <div className="projectList">Here's a list of projects!</div>
      </div>
    );
  }
}

export default Projects;
