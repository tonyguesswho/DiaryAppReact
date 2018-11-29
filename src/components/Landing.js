import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import Navbar from '../components/Navbar';


class Landing extends Component {
  render() {
    return (
      <header id="main-header">
        <img src={logo} alt={'logo'} className="logo" />
        <Navbar />
        <div class="home-text">
          <h1>Personalized Digital Diary</h1>
          <Link to="/addentry" class="btn btn-filled">
            Write
          </Link>
          <Link to="/entries" class="btn btn-transparent" id="myDiary">
            my Diary
          </Link>
        </div>
      </header>
    );
  }
}

export default Landing;
