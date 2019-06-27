import React from "react";
import Home from "./../pages/Home.js";
import OurStory from "./../pages/OurStory";
import OurTeam from "./../pages/OurTeam";

const Footer = props => {
  return (
    <div className="Footer">
      <nav>
        <Route path="/" component={Home}>
          Home
        </Route>
        <Route path="/OurStory" component={OurStory}>
          Our Story
        </Route>
        <Route path="/OurTeam" component={OurTeam}>
          Our Team
        </Route>
        {/* <Route path="/Login" component={Login}>
          Login
        </Route>
        <Route path="/Contact" component={Contact}>
          Contact
        </Route> */}
      </nav>
      <footer>
        <p>Copyright Friend Finder 2019</p>
        <i class="far fa-copyright" />
      </footer>
    </div>
  );
};

export default Footer;
