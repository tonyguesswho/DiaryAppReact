import * as types from '../actions/actionTypes';
import initialState from './initialState/index';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return { ...state, authenticated: action.payload };
    case types.SIGNIN_USER_ERROR:
      return { ...state, authError: action.payload };
    case types.SIGNOUT_USER:
      return { ...state, authenticated: action.payload };
      case types.CLEAR_ERROR:
      return { ...state, authError: '' };
    default:
      return state;
  }
};