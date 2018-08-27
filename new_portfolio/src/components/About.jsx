import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import InfoLink from "./Links";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Banner
          className="bannerText"
          homeBanner="Hi I'm Becky , a Web Developer."
          homeBanner2="Here are a few fun facts to help you get to know me..."
        />
        {/* <ProfileImage /> */}
        <InfoLink className="about2" title="About" />
        <InfoLink className="projects2" title="Projects" />
        <InfoLink className="blog2" title="Blog" />
        <InfoLink className="contact2" title="Contact" />
        <InfoLink className="home" title="Home" />
        <div className="aboutMe">Stuff About Me</div>
      </div>
    );
  }
}

export default About;
