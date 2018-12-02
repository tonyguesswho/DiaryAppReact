import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/authAction';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {}
    };
  }
  logout = () => {
    signout();
  };
  componentDidMount = () => {
    const { profile } = this.props;
    this.setState({
      profile
    });
  };
  render() {
    const { profile } = this.state;
    return (
      <div className="bg body">
        <header className="header2">
          <nav>
            <ul className="nav nav2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" id="logout" onClick={this.logout}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="profile">
          <div className="bigbox">
            <div className="box card span21 span2-center">
              <h2 id="username">Welcome {profile.username}</h2>

              <Link to="/create" className="ebtn ebtn-filled">
                Add Entry
              </Link>
              <Link to="/entries" className="ebtn ebtn-transparent">
                My Diary
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => ({ profile: state.profile.userProfile });
export default connect(
  mapStateToProps,
  { signout }
)(Profile);
