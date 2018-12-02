import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState/index';
import entriesReducer from '../../reducers/entriesReducer';

describe('entries reducer', () => {
  it('should return the initial state', () => {
    expect(entriesReducer(undefined, {})).toEqual(initialState);
  });

  const entries = [];

  it('should get entries', () => {
    expect(
      entriesReducer([], {
        type: types.GET_ENTRIES,
        payload: entries,
      }),
    ).toEqual({
      entries: [...entries],
    });
  });
  it('should get entry', () => {
    expect(
      entriesReducer([], {
        type: types.GET_ENTRY,
        payload: entries,
      }),
    ).toEqual({
      entry: [...entries],
    });
  });
  it('should get entries error', () => {
    expect(
      entriesReducer([], {
        type: types.CREATE_ENTRY_ERROR,
        payload: entries,
      }),
    ).toEqual({
        entryError: [...entries],
    });
  });

});
