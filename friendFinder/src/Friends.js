import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));

  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/form">New</NavLink>
          </nav>

          <Route
            path="/form"
            render={props => <SmurfForm {...props} getSmurfs={this.getSmurfs} />}
          />
          <Route
            path="/"
            render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          />


        </div>
      </BrowserRouter>

    );
  }
}

export default App;
