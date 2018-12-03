import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signout } from '../actions/authAction';

class Navbar extends Component {
  logout = () => {
    signout();
  };
  render() {
    return (
      <nav>
        {!localStorage.token ? (
          <ul className="nav main-nav" id="authNav">
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        ) : (
          <ul className="nav main-nav" id="authNav">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link id="signout" to="/" onClick={this.logout}>Sign out</Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}
export default Navbar;
