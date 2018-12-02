import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editEntry, getEntry } from '../actions/entriesActions';
import { clearError } from '../actions/authAction';

class EditEntry extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      textarea: '',
      error: '',
      loading: false,
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
    const { id } = this.props.match.params;
    this.props.editEntry(newEntry,id, this.props.history);
  };
  componentDidMount = async () => {
    const { clearError, getEntry } = this.props;
    clearError();
    const { id } = this.props.match.params;
    await getEntry(id);
  };

  logout = () => {
    signout();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { errorMessage, entry } = nextProps;
      this.setState({
        error: errorMessage,
        loading: false,
        title: entry.title,
        textarea: entry.description
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
            <h2>Edit Diary Entry </h2>
            <form onSubmit={this.onSubmit} id="addEntry">
              <div className="fullspan">
                <label htmlFor="title">Title:</label>
              </div>
              <div className="fullspan">
                <input type="text" name="title" id="title" placeholder="Entry title"  required onChange={this.onChange} value={this.state.title} />
              </div>
              <div className="fullspan">
                <label htmlFor="textarea">Express Yourself:</label>
              </div>
              <div className="fullspan">
                <textarea name="textarea" id="textarea" rows="10" required onChange={this.onChange} value={this.state.textarea} />
              </div>

              {!loading ? <input type="submit" value="Edit Entry" /> : <input type="submit" value="Loading  . . ." disabled="disabled" />}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ entry: state.entries.entry, errorMessage:state.entries.entryError });

export default connect(
  mapStateToProps,
  { editEntry,getEntry, clearError }
)(withRouter(EditEntry));
