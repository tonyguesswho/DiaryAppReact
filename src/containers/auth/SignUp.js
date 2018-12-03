import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, clearError } from '../../actions/authAction';

const fieldNames = ['username', 'email', 'password', 'confirmPassword'];
export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      error: '',
      success: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username.trim(),
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      confirmPassword: this.state.confirmPassword.trim()
    };
    this.setState({
      loading:true
    })

    this.props.signup(newUser, this.props.history);
  };
  componentDidMount = () => {
    const { clearError } = this.props;
    clearError();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { errorMessage } = nextProps;
      this.setState({
        error: errorMessage,
        loading:false
      });
    }
  }

  render() {
    const { loading, error } = this.state;
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
            {error && <div className="msg_output_fail">{error}</div>}
            <h2>Sign Up </h2>
            <form id="signUp" onSubmit={this.onSubmit}>
              <div className="fullspan">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="fullspan">
                <input type="email" name="email" id="email" placeholder="email" required onChange={this.onChange} />
              </div>
              <div className="fullspan">
                <label htmlFor="username">username:</label>
              </div>
              <div className="fullspan">
                <input type="text" name="username" id="username" placeholder="username" required onChange={this.onChange} />
              </div>
              <div className="fullspan">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="fullspan">
                <input type="password" name="password" id="password" placeholder="password" required onChange={this.onChange} />
              </div>
              <div className="fullspan">
                <label htmlFor="cPassword">Confirm Password:</label>
              </div>
              <div className="fullspan">
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" required onChange={this.onChange} />
              </div>
              <p className="signin-prompt">
                Already have an account
                <Link to="/signin">Sign In</Link>
              </p>
              {!loading ? <input type="submit" value="Sign Up" /> : <input type="submit" value="Loading  . . ." disabled="disabled" />}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.authError });

export default connect(
  mapStateToProps,
  { signup, clearError }
)(withRouter(SignUp));
