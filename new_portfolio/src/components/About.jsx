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
        <div className="aboutMe">
        I'm a mom of 3.  Former elementary school teacher.  Now trying this coding thing!
        <br />
        <br />
        I recently received my Full Stack Web Development Certificate from the University of Arizona Coding Boot Camp.  It was an action
        packed roller coaster ride!  
        <br />
        <br />
        This was an intensive 24 week coding boot camp where I demonstrated a working knowledge of 
        Bootstrap, CSS, Express.js, Git, Github, Heroku, HTML (HTML5), JavaScript, 
        JQuery, MongoDB, MySQL, Node.js, React, Responsive Design, API/JSON, 
        RESTful API, State Management, Command Line, Database Theory, 
        Agile Methodologies, and Quality Assurance Testing.
        <br />    
        <br />
        As a student I demonstrated my ability to successfully work as a team to build fully functional web applications
        from start to finish.
        <br />    
        <br />
        Now I am out here trying new things, building new projects, learning new skills, 
        looking for an opportunity to get my foot in the door!  I would love the chance to work
        for a company that embraces continuous learning and is willing to take the chance on someone
        who has jumped all in to a new career!
        </div>
      </div>
    );
  }
}

export default About;
