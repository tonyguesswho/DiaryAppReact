import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import entriesReducer from './entriesReducer';

export default combineReducers({
  auth: authReducer,
  profile:profileReducer,
  entries: entriesReducer
});
