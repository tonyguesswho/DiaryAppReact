import * as types from '../actions/actionTypes';
import initialState from './initialState/index';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ENTRIES:
      return { ...state, entries: action.payload };
    case types.GET_ENTRY:
      return { ...state, entry: action.payload };
    case types.CREATE_ENTRY_ERROR:
      return { ...state, entryError: action.payload };
    default:
      return state;
  }
};