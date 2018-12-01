import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEntry } from '../actions/entriesActions';
import { clearError } from '../actions/authAction';

class NewEntry extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      textarea: '',
      error: '',
      loading: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const newEntry = {
      title: this.state.title.trim(),
      description: this.state.textarea.trim()
    };
    this.setState({
      loading: true
    });

    this.props.createEntry(newEntry, this.props.history);
  };
  componentDidMount = () => {
    const { clearError } = this.props;
    clearError();
  };

  logout = () => {
    signout();
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
        <section className="signup" id="messageBox">
          <div className="box span31 span3-center card">
            {error && <div className="msg_output_fail">{error}</div>}
            <h2>Add Diary Entry </h2>
            <form onSubmit={this.onSubmit} id="addEntry">
              <div className="fullspan">
                <label htmlFor="title">Title:</label>
              </div>
              <div className="fullspan">
                <input type="text" name="title" id="title" placeholder="Entry title" required onChange={this.onChange} />
              </div>
              <div className="fullspan">
                <label htmlFor="textarea">Express Yourself:</label>
              </div>
              <div className="fullspan">
                <textarea name="textarea" id="textarea" rows="10" required onChange={this.onChange} />
              </div>

              {!loading ? <input type="submit" value="Add Entry" /> : <input type="submit" value="Loading  . . ." disabled="disabled" />}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.entries.entryError });

export default connect(
  mapStateToProps,
  { createEntry, clearError }
)(withRouter(NewEntry));
