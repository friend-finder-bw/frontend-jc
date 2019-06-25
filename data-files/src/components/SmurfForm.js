
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
      city: '',
      state: '',
      hobby: '',
      newSmurf: null
    };
  }
  
  addSmurf = event => {
    event.preventDefault();

    this.setState({
      name: event.target.name.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
      city: event.target.city.value,
      state: event.target.state.value,
      hobby: event.target.hobby.value
    });

    axios.post('http://localhost:3333/smurfs', this.state )
    .then(res => {
      console.log(res.data);
      this.setState( {
        newSmurf : res.data[res.data.length-1]
      })
    })
    .catch(err => {
      console.log(err);
    })
    this.props.history.push('/smurfs')
    window.location.reload();
    return;
  }

  handleInputChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="SmurfForm">
        <h1>Friend Finder</h1>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="What is your first name?"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="What is your age?"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="What is your gender?"
            value={this.state.gender}
            name="gender"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="What state are you in?"
            value={this.state.state}
            name="state"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="What city are you in?"
            value={this.state.city}
            name="city"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="What is your favorite hobby?"
            value={this.state.hobby}
            name="hobby"
          />
          <button className='submit' type="submit">- | - Sign Up - | - </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;