import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './containers/auth/SignUp';
import Signin from './containers/auth/SignIn';
import Profile from './containers/Profile';
import authenticate from './hoc/authenticate';
import Entries from './containers/Entries';
import NewEntry from './containers/NewEntry';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/entries" component={authenticate(Entries)}/>
          <Route exact path="/profile" component={authenticate(Profile)}/>
          <Route exact path="/create" component={authenticate(NewEntry)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;