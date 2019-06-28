import axios from "axios";
import React, { Component } from "react";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import "./App.css";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Friends from "./pages/Friends";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidUpdate() {
    axios
      .get("https://friendfinderbe.herokuapp.com/profiles/unfiltered/")
      .then(res => this.setState({ data: res.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  }

  addSmurf = data => {
    document.location.reload();
    axios
      .post("https://friendfinderbe.herokuapp.com/profiles/unfiltered/", data)
      .then(res => {
        this.setState({ data: res.data });
        this.props.history.push("/smurf-list");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>
            <Route exact path="/friends" component={Friends} />

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
