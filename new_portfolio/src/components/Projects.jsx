import React, { Component } from "react";
import Banner from "./Banner";
import ProfileImage from "./ProfileImage";
import InfoLink from "./Links";
import IndivProj from "./IndividualProject";

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
        {/* <div className="projectList">Here's a list of projects!</div> */}
        <IndivProj
          className="jarvis2" 
          website="https://shrouded-tor-92911.herokuapp.com/"
          projectName="Jarvis 2.0" 
          image='require("../images/jarvis2.JPG")'
          projectDescription="JARVIS 2.0 was a rebuild and expansion upon the original JARVIS healthcare app listed below.  With JARVIS 2.0 you can now 
          save the results of your search and find them on your personal patient page. We used Google OAuth, so you can login simply
          with your Google account."
          projDesc2="JARVIS 2.0 is built with the MERN stack:  MongoDB, Express, React, and Node.  Like the original, it is an app that takes the 
          guesswork out of finding cost-effective hospital options."
          projDesc3="I was the front-end web developer on this project working primarily with React and CSS Grid, but I did help troubleshoot some back-end issues."
        />
        <IndivProj
          className="jarvis" 
          website="https://javis-app-health.herokuapp.com/signup"
          projectName="Jarvis" 
          projectDescription="JARVIS is a healthcare app that takes the guesswork out of finding cost-effective hospital options. We know
          that the cost of procedures varies based on hospitals, location, etc. With JARVIS you can enter your
          location, procedure, and the distance you're willing to drive. With that information we will find the
          hospitals that perform your procedure at the lowest cost, within your search radius."
          projDesc2="JARVIS was built with HTML, CSS, JavaScript and jQuery."
          projDesc3="I worked primarily on the backend of this project, but did help with some of the frontend formatting."
        />
        
      </div>
    );
  }
}

export default Projects;
