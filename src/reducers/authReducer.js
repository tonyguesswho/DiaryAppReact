import * as types from '../actions/actionTypes';
import initialState from './initialState/index';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return { ...state, authenticated: action.payload };
    case types.SIGNIN_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.SIGNOUT_USER:
      return { ...state, authenticated: '' };
    default:
      return state;
  }
};