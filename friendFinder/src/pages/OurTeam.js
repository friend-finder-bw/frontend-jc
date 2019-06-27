import React from "react";
//Image Imports
import alex from "../img/alex.gif";
import basil from "../img/basil.gif";
import john from "../img/john.gif";
import josh from "../img/josh.gif";
import karina from "../img/karina.gif";
import marcus from "../img/marcus.gif";
import "./../css/ourTeam.css";
import NavBar from "./../NavBar/NavBar.js";

export default class OurTeam extends React.Component {
  render() {
    return (
      <div className="OurTeam">
        <div class="container">
          <NavBar />
          <section class="staffBios">
            <div class="topBios">
              <div class="firstBio">
                <div class="bioIntro">
                  <h1>TEAM LEAD</h1>
                  <img class="bioImg" src={alex} alt="Alex Carter Headshot" />
                </div>
                <div class="bioText">
                  <div class="nameLocation">
                    <p>
                      Alex Carter <br />
                      San Francisco, CA
                    </p>
                  </div>
                  <div class="bioList">
                    <p>About Alex</p>
                    <ul>
                      <li>Attended NCSU</li>
                      <li>Avid podcast listener</li>
                      <li>Loves going to karaoke with friends</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Key Responsibilities</p>
                    <ul>
                      <li>
                        Leading and serving as a point person for the rest of
                        the development team
                      </li>
                      <li>Organizing and consolidating tasks</li>
                      <li>General front end and back end development</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Skills</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="secondBio">
                <div class="bioIntro">
                  <h1>WEB UI DEVELOPER</h1>
                  <img
                    class="bioImg"
                    src={karina}
                    alt="Karina Kalpaxis Headshot"
                  />
                </div>
                <div class="bioText">
                  <div class="nameLocation">
                    <p>
                      Karina Kalpaxis<br>Queens, NY</br>
                    </p>
                  </div>
                  <div class="bioList">
                    <p>About Karina</p>
                    <ul>
                      <li>Student at McGill University</li>
                      <li>Self-proclaied table tennis champ</li>
                      <li>Huge F1 fan</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Key Responsibilities</p>
                    <ul>
                      <li>Marketing and branding</li>
                      <li>Creating and styling content</li>
                      <li>Corporate relations</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Skills</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="thirdBio">
                <div class="bioIntro">
                  <h1>WEB UI DEVELOPER</h1>
                  <img
                    class="bioImg"
                    src={marcus}
                    alt="Marcus Jones Headshot"
                  />
                </div>
                <div class="bioText">
                  <div class="nameLocation">
                    <p>
                      Marcus Jones<br>Lawton, OK</br>
                    </p>
                  </div>
                  <div class="bioList">
                    <p>About Marcus</p>
                    <ul>
                      <li>Accomplished graphic designer</li>
                      <li>Great sense of humor</li>
                      <li>Patron of the arts (museums, galleries, concerts)</li>
                      <li>Full of competitive spirit</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Key Responsibilities</p>
                    <ul>
                      <li>Marketing and branding</li>
                      <li>Creating and styling content</li>
                      <li>Corporate relations</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Skills</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="bottomBios">
              <div class="firstBio">
                <div class="bioIntro">
                  <h1>FRONT END ARCHITECT</h1>
                  <img class="bioImg" src={josh} alt="Joshua Doan Headshot" />
                </div>
                <div class="bioText">
                  <div class="nameLocation">
                    <p>
                      Joshua Doan<br>Hamilton, MO</br>
                    </p>
                  </div>
                  <div class="bioList">
                    <p>About Joshua</p>
                    <ul>
                      <li>Stands at a mighty 6'4"</li>
                      <li>Hikes with friends in Colorado</li>
                      <li>
                        Has been on many cross-country motorcylce adventures
                      </li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Key Responsibilities</p>
                    <ul>
                      <li>
                        Works with UI Developers to add functionality to the
                        webpage
                      </li>
                      <li>Assists in design aspects</li>
                      <li>
                        Utilizes React skills to elevate the design of the
                        project
                      </li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Skills</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="secondBio">
                <div class="bioIntro">
                  <h1>FRONT END ARCHITECT</h1>
                  <img
                    class="bioImg"
                    src={john}
                    alt="Jonathan Calderaro Headshot"
                  />
                </div>
                <div class="bioText">
                  <div class="nameLocation">
                    <p>
                      Jonathan Calderaro<br>Walnut Creek, CA</br>
                    </p>
                  </div>
                  <div class="bioList">
                    <p>About Jonathan</p>
                    <ul>
                      <li>Went to university on the East Coast in D.C.</li>
                      <li>Big fan of music festivals</li>
                      <li>Treasures the beauty of California through hikes</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Key Responsibilities</p>
                    <ul>
                      <li>
                        Works with UI Developers to add functionality to the
                        webpage
                      </li>
                      <li>Assists in design aspects</li>
                      <li>
                        Utilizes React skills to elevate the design of the
                        project
                      </li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Skills</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="thirdBio">
                <div class="bioIntro">
                  <h1>BACK END ARCHITECT</h1>
                  <img class="bioImg" src={basil} alt="Basil Haven Headshot" />
                </div>
                <div class="bioText">
                  <div class="nameLocation">
                    <p>
                      Basil Havens<br>Seattle, WA</br>
                    </p>
                  </div>
                  <div class="bioList">
                    <p>About Basil</p>
                    <ul>
                      <li>Passionate about life</li>
                      <li>Loves learning new languages</li>
                      <li>Has studied at a number of institutions</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Key Responsibilities</p>
                    <ul>
                      <li>Responsible for endpoint portions of the project</li>
                      <li>
                        Works closely with front end architects to facilitate
                        development
                      </li>
                      <li>Applies knowledge of Node.js to accomplish tasks</li>
                    </ul>
                  </div>
                  <div class="bioList">
                    <p>Skills</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <p>Copyright Friend Finder 2019</p>
            <i class="far fa-copyright" />
          </footer>
        </div>
      </div>
    );
  }
}
// export default OurTeam;
