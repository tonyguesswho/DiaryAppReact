import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

class Navbar extends Component {
  render() {
    return (
        <nav>
        <ul className="nav main-nav" id="authNav">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
