import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import InfoLink from "./Links";
import "../app.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Banner
          className="bannerText"
          homeBanner="Hi I'm Becky , a Web Developer."
          homeBanner2="Take a look around and see what I'm about."
        />
        {/* <ProfileImage /> */}
        <InfoLink className="about" title="About" />
        <InfoLink className="projects" title="Projects" />
        <InfoLink className="blog" title="Blog" />
        <InfoLink className="contact" title="Contact" />
      </div>
    );
  }
}

export default Home;
