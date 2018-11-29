import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div className="bg body">
        <header className="header2">
          <nav>
            <ul className="nav nav2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="signup" id="messageBox">
          <div className="box span31 span3-center card">
            <h2>Sign Up </h2>
            <form method="post" id="signUp">
              <div className="fullspan">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="fullspan">
                <input type="email" name="email" id="email" placeholder="email" required />
              </div>
              <div className="fullspan">
                <label htmlFor="username">username:</label>
              </div>
              <div className="fullspan">
                <input type="text" name="username" id="username" placeholder="username" required />
              </div>
              <div className="fullspan">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="fullspan">
                <input type="password" name="password" id="password" placeholder="password" required />
              </div>
              <div className="fullspan">
                <label htmlFor="cPassword">Confirm Password:</label>
              </div>
              <div className="fullspan">
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" required />
              </div>
              <p className="signin-prompt">
                Already have an account
                <Link to="/signin">Sign In</Link>
              </p>
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;
08069439862
