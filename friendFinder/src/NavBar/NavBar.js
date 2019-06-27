import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
// import "./../css/index.css";
import Home from "./../pages/Home.js";
import OurStory from "./../pages/OurStory";
import OurTeam from "./../pages/OurTeam";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <img class="FF" src={logo} alt="Friend Finder Logo" />

        <header>
          <nav>
            {this.props.children}
            <Link to="/" component={Home}>
              Home
            </Link>
            <Link to="/OurStory" component={OurStory}>
              Our Story
            </Link>
            <Link to="/OurTeam" component={OurTeam}>
              Our Team
            </Link>
            {/* <Link to="/Login" component={Login}>
            Login
          </Link>
          <Link to="/Contact" component={Contact}>
            Contact
          </Link> */}
          </nav>
        </header>
      </div>
    );
  }
}
// export default Navbar;
