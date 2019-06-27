import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/SmurfNavbar";
// import "./css/index.css";
// import "./css/ourStory.css";
// import "./css/ourTeam.css";
import Home from "./pages/Home.js";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}>
          <Route component={Home} />
          <Route path="/OurStory" component={OurStory} />
          <Route path="/OurTeam" component={OurTeam} />
        </Route>
        {/* <Route 
        path='/smurfs' 
        render= { props => <Smurfs {...props} smurfs={this.state.smurfs} /> } 
        /> */}
      </div>
    );
  }
}

export default App;
