import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      age: "",
      gender: "",
      hobby: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;

    let name = target.name;
    let value = target.value;
    console.log(name, value);

    let data = {};
    data[name] = value;

    this.setState(data);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log({
      email: this.state.email,
      password: this.state.password,
      name: this.state.username,
      age: this.state.age,
      gender: this.state.gender,
      hobby: this.state.hobby,
      location: this.state.location
    });
    window.axios
      .post("https://friendfinderbe.herokuapp.com/createnewuser", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        hobby: 1,
        location: this.state.location
      })
      .then(response => {
        console.log(response);
        // localStorage.setItem("token", response.data.auth.access_token);
      });
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              name
            </label>
            <input
              type="name"
              id="name"
              className="FormField__Input"
              placeholder="Enter your name"
              name="name"
              value={this.state.name}
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
            <label className="FormField__Label" htmlFor="location">
              Location
            </label>
            <input
              type="location"
              id="location"
              className="FormField__Input"
              placeholder="City, State"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="age">
              Age
            </label>
            <input
              type="age"
              id="age"
              className="FormField__Input"
              placeholder="Enter your age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="gender">
              Gender
            </label>
            <input
              type="gender"
              id="gender"
              className="FormField__Input"
              placeholder="Enter your gender"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="hobby">
              hobby
            </label>
            <input
              type="hobby"
              id="hobby"
              className="FormField__Input"
              placeholder="Enter your hobby"
              name="hobby"
              value={this.state.hobby}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <Link
              to="/friends"
              type="submit"
              value="Submit"
              className="FormField__Button"
            >
              Sign Up
            </Link>
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
