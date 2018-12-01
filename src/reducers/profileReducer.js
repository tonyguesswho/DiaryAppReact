import * as types from '../actions/actionTypes';
import initialState from './initialState/index';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
};