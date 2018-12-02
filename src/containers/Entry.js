import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getEntry } from '../actions/entriesActions';
import { signout } from '../actions/authAction';

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      entry: {},
      loading: true
    };
  }
  logout = () => {
    signout();
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const { getEntry } = this.props;
    await getEntry(id);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        entry: nextProps.entry,
        loading: false
      });
    }
  }
  render() {
    const { entry, loading } = this.state;
    return (
      <div className="bg body">
        <header className="header2">
          <nav>
            <ul className="nav nav2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/" id="logout" onClick={this.logout}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="entries">
          {loading ? (
            <div>Loading ...</div>
          ) : (
            <div className="bigbox" id="viewEntry">
              <div className="box card span21 span2-center">
                <h4>{entry.title}</h4>
                <p>{entry.description}</p>
                <div className="entry-date">
                  <p>{moment(`${entry.created_at}`).format('MMMM Do YYYY')}</p>
                </div>

                <Link to={`/editentry/${entry.id}`} className="ebtn ebtn-transparent">
                  Edit
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => ({ entry: state.entries.entry });
export default connect(
  mapStateToProps,
  { getEntry, signout }
)(Entry);
