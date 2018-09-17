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
          homeBanner2="Let me know you stopped by!"
        />
        {/* <ProfileImage /> */}
        <InfoLink className="about2" title="About" />
        <InfoLink className="projects2" title="Projects" />
        <InfoLink className="blog2" title="Blog" />
        <InfoLink className="contact2" title="Contact" />
        <InfoLink className="home" title="Home" />
        {/* <div className="resume">
        Check out my <a href="../images/resume.pdf">resume</a>
        </div> */}
        <div className="gitHub">
        <strong>Check out my</strong> <a href="http://github.com/beckymcclain8">Github Page</a>
        </div>
        <div className="email">
        <strong>Email Me: </strong> beckymcclain8@gmail.com 
        </div>
        <div className="phone">
        <strong>Contact Me: </strong>480-254-3081
        </div>
      </div>
    );
  }
}

export default Contact;
