import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getEntries } from '../actions/entriesActions';
import { signout } from '../actions/authAction';

class Entries extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      loading: true
    };
  }
  logout = () => {
    signout();
  };
  componentDidMount = () => {
    const { getEntries } = this.props;
    getEntries();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        entries: nextProps.entries,
        loading: false
      });
    }
  }
  render() {
    const { entries, loading } = this.state;
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
        {loading ? (
          <div>loading ...</div>
        ) : (
          <section className="entries">
            {Object.values(entries).length === 0 ? (
              <h2 id="ent"><p>No diary entry : <Link to="/create">Write</Link></p></h2>
            ) : (
              <div>
                <div className="bigbox" id="allEntries">
                  {Object.values(entries).map(entry => (
                    <div className="box card span41" id="anEntry" key={entry.id}>
                      <h4>{entry.title}</h4>
                      <Link to={`/entry/${entry.id}`} className="ebtn ebtn-filled">
                        View
                      </Link>
                      <Link to={`/editentry/${entry.id}`} className="ebtn ebtn-transparent">
                        Edit
                      </Link>
                      <div className="entry-date">
                        <p>{moment(`${entry.created_at}`).format('MMMM Do YYYY')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({ entries: state.entries.entries });
export default connect(
  mapStateToProps,
  { getEntries, signout }
)(Entries);
