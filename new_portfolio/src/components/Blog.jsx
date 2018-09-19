import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import BlogInfo from './BlogInfo';
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
        <BlogInfo 
          date="9.19.18"
          blogTitle="New Blogger!"
          blogWords="I've never done this blogging thing, but I thought I'd give it a try!  Check back
          here to see what I've been up to.  Get updates on my current projects, see articles I've been reading, etc."
        />
      </div>
    );
  }
}

export default Blog;
