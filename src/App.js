import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './containers/auth/SignUp';
import Signin from './containers/auth/Signin';
import Profile from './containers/Profile';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/profile" component={Profile}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
