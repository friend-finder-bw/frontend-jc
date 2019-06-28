import React, { Component } from "react";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myfriends: []
    };
  }

  // componentDidMount() {
  //   this.fetchFriends();
  // }

  // fetchFriends() {
  //   window.axios.get(FriendList).then(response => {
  //     console.log(response);

  //     let myfriends = response.data.data;

  //     this.setState({
  //       myfriends: myfriends
  //     });
  //   });
  // }

  render() {
    return <div>hey</div>;
  }
}

export default Friends;
