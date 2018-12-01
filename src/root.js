import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import decode from 'jwt-decode';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as types from './actions/actionTypes';
import setToken from './util/setToken';


const enhancers = composeWithDevTools({});

export default ({ children, initialState  }) => {
  const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(thunk)));
  if(localStorage.token){
    setToken(localStorage.token);
    store.dispatch({
      type:types.SET_USER_PROFILE, payload:decode(localStorage.token)
    })
  }
  return <Provider store={store}>{children}</Provider>;
};
