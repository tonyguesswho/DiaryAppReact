import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Signup from './containers/SignUp';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/signup" component={Signup}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
