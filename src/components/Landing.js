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
        <div className="home-text">
          <h1>Personalized Digital Diary</h1>
          <Link to="/create" className="btn btn-filled">
            Write
          </Link>
          <Link to="/entries" className="btn btn-transparent" id="myDiary">
            my Diary
          </Link>
        </div>
      </header>
    );
  }
}

export default Landing;
