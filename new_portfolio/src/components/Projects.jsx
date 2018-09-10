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
          homeBanner2="Blood, sweat, and tears went into these... enjoy!"
          // homeBanner3="I hope you enjoy them."
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
          projectName="jarvis2.0" 
          // image='require("../images/jarvis2.JPG")'
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
          projectName="jarvis" 
          projectDescription="JARVIS is a healthcare app that takes the guesswork out of finding cost-effective hospital options. We know
          that the cost of procedures varies based on hospitals, location, etc. With JARVIS you can enter your
          location, procedure, and the distance you're willing to drive. With that information we will find the
          hospitals that perform your procedure at the lowest cost, within your search radius."
          projDesc2="JARVIS was built with HTML, CSS, JavaScript and jQuery."
          projDesc3="I worked primarily on the backend of this project, but did help with some of the frontend formatting."
        />
        <IndivProj
          className="roadTrip" 
          website="https://ztpence.github.io/Road-Trip/"
          projectName="roadTrip" 
          projectDescription="Road Trip is a fun app that helps the adventurous (or lazy!) traveler plan their days. You just enter the
          city in which you're traveling to and we find 5 hotels, restaurants, and things to do. You can choose
          from our list of options OR click the SURPRISE ME button if you want us to choose for you. Save your
          results and check out your itinerary."
          projDesc2="Road Trip was created with HTML, CSS, JavaScript, jQuery, and AJAX to make API calls."
          projDesc3="I lead a team of four people throughout the project and worked primarily on the JavaScript."
        />
        <IndivProj
          className="clickyGame" 
          website="https://vast-sierra-57358.herokuapp.com/"
          projectName="clickyGame" 
          projectDescription="This Avengers Clicky Game is my first app created using React.js. It's just a fun little game to test your
          memory."
          projDesc2="I was the sole programmer of this game."
        />
        <IndivProj
          className="newsScraper" 
          website="https://beckys-news-scraper.herokuapp.com/"
          projectName="newsScraper" 
          projectDescription="This is a news scraping app that I built using Express, MongoDB, Handlebars, JavaScript and jQuery. You can
          save scraped articles to a database and leave comments on specific articles."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="eatDaBurger" 
          website="https://eat-da-burgers123.herokuapp.com/"
          projectName="eatDaBurger" 
          projectDescription="Eat-da-Burger is a fun little app that lets you add new burgers and then click a button to 'devour' them.
          This app was my first attempt at using Handlebars."
          projDesc2="I was the sole programmer on ths project."
        />
        <IndivProj
          className="bamazon" 
          website="https://github.com/beckymcclain8/bamazon"
          projectName="bamazon" 
          projectDescription="I have created a mock store called Bamazon which is a CLI node application. The user can choose to be either
          a customer or a manager. They will be prompted with menus for different options such as to search the
          store or replenish the inventory. Check out the README for more information on how to run Bamazon."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="friendFinder" 
          website="https://github.com/beckymcclain8/bamazon"
          projectName="friendFinder" 
          projectDescription="Friend Finder is just that! It's a fun little survey you fill out and then find out who your closest 'friend'
          is! It was created with HTML, JavaScript, Express, and Node. It utilizes an API to hold and send back 'friend' information."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="liri" 
          website="https://github.com/beckymcclain8/liri-node-app"
          projectName="liri" 
          projectDescription="LIRI is a command line node app that takes in parameters and gives back data. LIRI can take in one of three
          commands: `my-tweets`- which will display your latest tweets, `spotify-this-song`- which will give back information about the song you search for,
          and `movie-this`- which will give you back information about the movie you search for."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="trainScheduler" 
          website="https://beckymcclain8.github.io/Train-Scheduler/"
          projectName="trainScheduler" 
          projectDescription="The train scheduler was built with JavaScript. The user can add the information on the website and it stores
          it in Firebase."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="gifTastic" 
          website="https://beckymcclain8.github.io/GifTastic/"
          projectName="gifTastic" 
          projectDescription="This is a fun little Giphy app. You click on the tv show and it will give you 10 GIFs that relate to that
          show. You can click on each GIF to animate it. You can also add your own tv shows to the list to get
          even more GIFs. This app was created with JavaScriptt and jQuery and made a call to the Giphy API."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="harryPotterTrivia" 
          website="https://beckymcclain8.github.io/TriviaGame/"
          projectName="harryPotterTrivia" 
          projectDescription="Test your Harry Potter knowledge with this trivia game created with HTML, CSS, JavaScript, and jQuery. You must be faster than the
          timer or you'll lose the game!"
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="crystalCollector" 
          website="https://beckymcclain8.github.io/week-4-game/"
          projectName="crystalCollector" 
          projectDescription="This was one of my earliest games! You have to try to click the gems and add up to a specific number. At
          the beginning of the game you don't know how much each gem is worth, so you have to pay attention and
          do a little guessing. This was created with HTML, Bootstrap, and JavaScript."
          projDesc2="I was the sole programmer on this project."
        />
        <IndivProj
          className="psychicGame" 
          website="https://beckymcclain8.github.io/week-4-game/"
          projectName="psychicGame" 
          projectDescription="My very first game! It seemed so difficult at the time... This was created with HTML, CSS, and JavaScript."
          projDesc2="I was the sole programmer on this project."
        />
      </div>
    );
  }
}

export default Projects;
