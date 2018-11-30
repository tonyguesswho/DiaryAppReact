import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signin } from '../../actions/authAction';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.signin(user, this.props.history);
  }

  render() {
    console.log(this.state, this.props);
    return (
        <div className="bg body">
        <header className="header2">
            <nav>
                <ul className="nav nav2">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <section className="signup" id="messageBox">
            <div className="bigboxy">
                <div className="box span31 span3-center card">
                    <h2>Sign In </h2>
                    <form onSubmit={this.onSubmit} id="login">
                        <div className="fullspan">
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className="fullspan">
                            <input type="email" name="email" id="email" placeholder="email" required onChange={this.onChange}></input>
                        </div>
                        <div className="fullspan">
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div className="fullspan">
                            <input type="password" name="password" id="password" placeholder="password" required onChange={this.onChange}></input>
                        </div>
                        <p className="signin-prompt">
                            Don't have an account
                            <Link to="/signup">Sign Up</Link>
                        </p>
                        <input type="submit" value="Sign In"></input>
                    </form>
                </div>
            </div>
        </section>
    </div>
    );
  }
}

const mapStateToProps = state => ({ message: state });

export default connect(
  mapStateToProps,
  { signin }
)(withRouter(SignIn));
