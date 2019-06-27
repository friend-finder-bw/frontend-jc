import React from "react";
import { Link } from "react-router-dom";
// import "./../css/index.css";
import homeLogo from "./../img/logo2.png";
import Home from "./../pages/Home.js";
import OurStory from "./../pages/OurStory";
import OurTeam from "./../pages/OurTeam";

const NavHome = props => {
  return (
    <div className="NavHome">
      <nav class="menubar">
        <img class="logo-image" src={homeLogo} />

        <Link to="/" component={Home}>
          What is Friend Finder
        </Link>
        <Link to="/OurStory" component={OurStory}>
          Our Story
        </Link>
        <Link to="/OurTeam" component={OurTeam}>
          Our Team
        </Link>
        {/* <Link to="/Contact" component={Contact}>
          Contact
        </Link> */}

        <div>
          <Link to="/Login" component={Login}>
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavHome;
