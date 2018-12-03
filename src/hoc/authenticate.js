import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class Authenticate extends Component {
    componentDidMount() {
      this.checkAuthStatus();
    }

    componentDidUpdate() {
      this.checkAuthStatus();
    }

    checkAuthStatus() {
      const { history } = this.props;
      if (!localStorage.token) {
        history.push('/signin');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({ profile: state.profile.userProfile });

  return connect(mapStateToProps)(Authenticate);
};
