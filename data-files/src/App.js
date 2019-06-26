import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navbar from './components/SmurfNavbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {

    axios.get('http://localhost:3333/smurfs')
    .then( res => {
      console.log(res.data);
      this.setState( {
        smurfs: res.data
      })
    })
    .catch( err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={SmurfForm}/>
        <Route 
        path='/smurfs' 
        render= { props => <Smurfs {...props} smurfs={this.state.smurfs} /> } 
        />
        
      </div>
    );
  }
}

export default App;
