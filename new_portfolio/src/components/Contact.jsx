import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import InfoLink from "./Links";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Banner
          className="bannerText"
          homeBanner="Contact Me"
          homeBanner2="Let me know that you stopped by."
        />
        {/* <ProfileImage /> */}
        <InfoLink className="about2" title="About" />
        <InfoLink className="projects2" title="Projects" />
        <InfoLink className="blog2" title="Blog" />
        <InfoLink className="contact2" title="Contact" />
        <InfoLink className="home" title="Home" />
        <div className="contactMe">My contact Info</div>
      </div>
    );
  }
}

export default Contact;
