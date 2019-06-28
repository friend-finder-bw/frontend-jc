import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (window.token) {
      this.setState({ loggedIn: true });
    }
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    let data = {};
    data[name] = value;

    this.setState(data);
  }

  handleSubmit(e) {
    this.setState({ loggedIn: true });
    e.preventDefault();
    window.axios
      .post("https://friendfinderbe.herokuapp.com/profiles/unfiltered/", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.setState({ loggedIn: true });
        localStorage.setItem("token", response.data.auth.access_token);
      });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button
              type="submit"
              value="Submit"
              className="FormField__Button mr-20"
            >
              Sign In
            </button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
