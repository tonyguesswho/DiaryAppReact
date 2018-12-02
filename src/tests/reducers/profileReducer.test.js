import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState/index';
import profileReducer from '../../reducers/profileReducer';

describe('entries reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  const entries = [];

  it('should get entries', () => {
    expect(
      profileReducer([], {
        type: types.SET_USER_PROFILE,
        payload: entries,
      }),
    ).toEqual({
        userProfile: [...entries],
    });
  });

});
