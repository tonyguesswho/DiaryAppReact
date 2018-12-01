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
      const { profile, history } = this.props;
      if (Object.keys(profile).length === 0 ) {
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
