import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      age: "",
      gender: "",
      hobby: "",
      location: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
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
            {/* <input
              type="hobby5"
              id="hobby5"
              className="FormField__Input"
              placeholder="Enter your hobby"
              name="hobby5"
              value={this.state.hobby}
              onChange={this.handleChange}
            /> */}
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button">Sign Up</button>{" "}
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
