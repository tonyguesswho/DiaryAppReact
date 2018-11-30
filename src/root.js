import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = composeWithDevTools({});

export default ({ children, initialState  }) => {
  const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(thunk)));
  return <Provider store={store}>{children}</Provider>;
};
