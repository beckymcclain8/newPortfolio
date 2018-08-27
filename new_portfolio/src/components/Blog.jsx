import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import InfoLink from './Links';

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <Banner
          className="bannerText"
          homeBanner="Every day is a new adventure..."
          homeBanner2="Here's what I've been up to."
        />
        {/* <ProfileImage /> */}
        <InfoLink className="about2" title="About" />
        <InfoLink className="projects2" title="Projects" />
        <InfoLink className="blog2" title="Blog" />
        <InfoLink className="contact2" title="Contact" />
        <InfoLink className="home" title="Home" />
        <div className="blogNews">Yadda Yadda Yadda</div>
      </div>
    );
  }
}

export default Blog;
