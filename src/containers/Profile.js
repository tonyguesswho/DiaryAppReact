import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout }from '../actions/authAction';


 class Profile extends Component {
    logout = () => {
        signout()

      }
  render() {
    return <div>profile
        <button onClick={this.logout}>Logout</button>
    </div>;
  }
}
export default connect(
    null,
    { signout }
  )(Profile);
