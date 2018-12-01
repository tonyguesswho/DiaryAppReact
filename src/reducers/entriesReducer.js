import * as types from '../actions/actionTypes';
import initialState from './initialState/index';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ENTRIES:
      return { ...state, entries: action.payload };
    default:
      return state;
  }
};