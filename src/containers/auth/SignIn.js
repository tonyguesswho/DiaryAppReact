import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signin, clearError } from '../../actions/authAction';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
      success: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async e => {
    e.preventDefault();

    const user = {
      email: this.state.email.trim(),
      password: this.state.password.trim()
    };
    this.setState({
      loading: true
    });

    await this.props.signin(user, this.props.history);
  };
  componentDidMount = () => {
    const { clearError} = this.props
    clearError();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { errorMessage } = nextProps;
      this.setState({
        error: errorMessage,
        loading: false
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
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="signup" id="messageBox">
          <div className="bigboxy">
            <div className="box span31 span3-center card">
              {error && <div className="msg_output_fail">{error}</div>}
              <h2>Sign In </h2>
              <form onSubmit={this.onSubmit} id="login">
                <div className="fullspan">
                  <label htmlFor="email">Email:</label>
                </div>
                <div className="fullspan">
                  <input type="email" name="email" id="email" placeholder="email" required onChange={this.onChange} />
                </div>
                <div className="fullspan">
                  <label htmlFor="password">Password:</label>
                </div>
                <div className="fullspan">
                  <input type="password" name="password" id="password" placeholder="password" required onChange={this.onChange} />
                </div>
                <p className="signin-prompt">
                  Don't have an account
                  <Link to="/signup">Sign Up</Link>
                </p>
                {!loading ? <input id="signin" type="submit" value="Sign In" /> : <input type="submit" value="Loading  . . ." disabled="disabled" />}
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.authError });

export default connect(
  mapStateToProps,
  { signin, clearError }
)(withRouter(SignIn));
