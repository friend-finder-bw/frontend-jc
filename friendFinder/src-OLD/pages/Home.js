import React from "react";
import green from "../img/green.jpg";
import vundla from "../img/vundla.jpg";
import "./../css/index.css";
import NavBar from "./../NavBar/NavBar.js";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="homepageContainer">
          <NavBar />
          <div className="imageDiv">
            <h1 className="missionSttmnt">
              "Bringing People Together Through Common Interests"
            </h1>
            <img className="mainImage" src={vundla} />
            <h1 className="title">What is Friend Finder</h1>
            <button>Sign Up</button>
            <img className="secondImage" src={green} />

            <p className="homepageParagraph">
              You lives get busy. Sometimes so busy, we tend for forget to work
              on certain aspects of our lives until into comes focus and that
              fact becomes realized. Early school years and college is the place
              where you will forge some of the more precious relationships with
              people that you may know for a lifetime. It takes time to
              genuinely get to know people, their interests and hobbies find a
              good fit that can be nurtured into something that can become a
              true friendship. Unfortunately that time seems to be hard to find.
              So many factors come into play. This is what friend finder is here
              for. You can find friends for all the occasions you wish to engage
              in. Looking for a friend, group, or couple to enjoy activities
              with based shared interests. Enjoy and find some new friends!!{" "}
            </p>
          </div>
          <footer>
            <a href="">Contact Us</a>
          </footer>
        </div>
      </div>
    );
  }
}
// export default Home;
