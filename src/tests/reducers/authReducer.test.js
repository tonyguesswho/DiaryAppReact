import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState/index';
import authReducer from '../../reducers/authReducer';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  const entries = [];

  it('should sigin user', () => {
    expect(
      authReducer([], {
        type: types.SIGNIN_USER,
        payload: entries,
      }),
    ).toEqual({
        authenticated: [...entries],
    });
  });
  it('throw sigin error', () => {
    expect(
      authReducer([], {
        type: types.SIGNIN_USER_ERROR,
        payload: entries,
      }),
    ).toEqual({
        authError: [...entries],
    });
  });
  it('signout users', () => {
    expect(
      authReducer([], {
        type: types.SIGNOUT_USER,
        payload: entries,
      }),
    ).toEqual({
        authenticated: [...entries],
    });
  });
  it('clear error', () => {
    expect(
      authReducer([], {
        type: types.CLEAR_ERROR,
        payload: entries,
      }),
    ).toEqual({
        authError: '',
    });
  });


});
