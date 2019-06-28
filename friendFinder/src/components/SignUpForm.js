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
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    let data = {};
    data[name] = value;

    this.setState(data);
  }

  handleSubmit(e) {
    e.preventDefault();
    window.axios
      .post(
        "https://friendfinderbe.herokuapp.com/profiles/unfiltered/friends",
        {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          age: this.state.age,
          gender: this.state.gender,
          hobby: this.state.hobby,
          location: this.state.location
        }
      )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.auth.access_token);
      });
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
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
              hobbies
            </label>
            <select className="FormField__Input">
              <option
                type="hobby1"
                id="hobby1"
                className="FormField__Dropdown"
                placeholder="Enter your hobby"
                name="hobby1"
              />
              <option
                type="hobby1"
                id="hobby1"
                className="FormField__Dropdown"
                placeholder="Enter your hobby"
                name="hobby1"
                value={this.state.hobby}
                onChange={this.handleChange}
              >
                hobby1
              </option>
              <option
                type="hobby2"
                id="hobby2"
                className="FormField__Dropdown"
                name="hobby2"
                value={this.state.hobby}
                onChange={this.handleChange}
              >
                hobby2
              </option>
              <option
                type="hobby3"
                id="hobby3"
                className="FormField__Dropdown"
                name="hobby3"
                value={this.state.hobby}
                onChange={this.handleChange}
              >
                hobby3
              </option>
              <option
                type="hobby4"
                id="hobby4"
                className="FormField__Dropdown"
                name="hobby4"
                value={this.state.hobby}
                onChange={this.handleChange}
              >
                hobby4
              </option>
            </select>
            <input
              type="hobby5"
              id="hobby5"
              className="FormField__Input"
              placeholder="Enter your hobby"
              name="hobby5"
              value={this.state.hobby}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button type="submit" value="Submit" className="FormField__Button">
              Sign Up
            </button>
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
