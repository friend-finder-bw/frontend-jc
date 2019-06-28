import React from "react";
import { Route } from "react-router-dom";
//Image Imports
import coding from "../img/coding.jpg";
import infographic from "../img/infographic.png";
import friends from "../img/our-story-friends.jpg";
import team from "../img/team.jpg";
import "./../css/ourStory.css";
import NavBar from "./../NavBar/NavBar.js";

export default class OurStory extends React.Component {
  render() {
    return (
      <div className="OurStory">
        <div className="container">
          <NavBar />
          <section className="mainContent">
            <img
              className="topImg"
              src={friends}
              alt="Group of Friends Hiking"
            />

            <div className="topContent">
              <div className="textContent">
                <h4>The Beginning </h4>
              </div>
              <img
                className="mainImg"
                src={coding}
                alt="Code snippets on a laptop"
              />
            </div>

            <div className="middleContent">
              <img className="mainImg" src={team} alt="Team meeting" />
              <div className="textContent">
                <h4>Finding a Team</h4>
                <p>
                  Aliquam elementum magna eros, ac posuere evit tempus et.
                  Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
                  ornare nisl. Nullam convallis augue justo, at imperdiet metus
                  scelerisque quis.Aliquam elementum magna eros, ac posuere
                  elvit tempus et. Suspendisse vel tempus odio, in interdutm
                  nisi. Suspendisse eu ornare nisl. Nullam convallis augue
                  justo, at imperdiet metus scelerisque quis.Aliquam elementum
                  magna eros, ac posuere elvit tempus et. Suspendisse vel tempus
                  odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam
                  convallis augue justo.
                </p>
                <Route path="/OurTeam">Our Team</Route>
              </div>
            </div>

            <div className="bottomContent">
              <div className="textContent">
                <h4>Brainstorming </h4>
                <p>
                  Aliquam elementum magna eros, ac posuere elvit tempus et.
                  Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
                  ornare nisl. Nullam convallis augue justo, at imperdiet metus
                  scelerisque quis. Aliquam elementum magna eros, ac posuere
                  elvit tempus et. Suspendisse vel tempus odio, in interdutm
                  nisi. Suspendisse eu ornare nisl. Nullam convallis augue
                  justo, at imperdiet metus scelerisque quis.
                </p>
              </div>

              <div className="textContent">
                <h4>Prototypes </h4>
                <p>
                  Aliquam elementum magna eros, ac posuere elvit tempus et.
                  Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
                  ornare nisl. Nullam convallis augue justo, at imperdiet metus
                  scelerisque quis. Aliquam elementum magna eros, ac posuere
                  elvit tempus et. Suspendisse vel tempus odio, in interdutm
                  nisi. Suspendisse eu ornare nisl. Nullam convallis augue
                  justo, at imperdiet metus scelerisque quis.
                </p>
              </div>
            </div>

            <div className="infographic">
              <div className="textContent">
                <h4>Our Final Product</h4>
                <p>
                  Aliquam elementum magna eros, ac posuere elvit tempus et.
                  Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu
                  ornare nisl. Nullam convallis augue justo, at imperdiet metus
                  scelerisque quis.Aliquam elementum magna eros, ac posuere
                  elvit tempus et. Suspendisse vel tempus odio, in interdutm
                  nisi. Suspendisse eu ornare nisl. Nullam convallis augue
                  justo, at imperdiet metus scelerisque quis.
                </p>
              </div>
              <img
                className="infographicImg"
                src={infographic}
                alt="Friend Finder values"
              />
            </div>
          </section>

          <footer>
            <p>Copyright Friend Finder 2019</p>
            <i className="far fa-copyright" />
          </footer>
        </div>
      </div>
    );
  }
}
// export default OurStory;
