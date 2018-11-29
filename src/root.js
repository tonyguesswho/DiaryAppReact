import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = composeWithDevTools({});
const state = { auth: { authenticated: localStorage.getItem('token') } };

export default ({ children, initialState = { ...state } }) => {
  const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(thunk)));
  return <Provider store={store}>{children}</Provider>;
};
