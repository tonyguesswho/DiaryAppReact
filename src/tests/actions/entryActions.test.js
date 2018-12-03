import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from '../../actions/actionTypes';
import { getEntries, getEntry, createEntry, editEntry } from '../../actions/entriesActions'
import initialState from '../../reducers/initialState/index';

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

const newEntry = { title: 'title', description: 'description'}
const result = []

const error = {
  response: {
    data: {
      data: 'error',
      message:'error'
    }
  }
}

const history = {
  push: jest.fn()
}

it('Get entries is successful', () => {
  mock.onGet("https://mydiary-api.herokuapp.com/api/v1/entries").reply(200, {
    "status": "success",
    "username": "tonyguesswho",
    "data": []
  });

  const mockedActions = [
    {
      type: types.GET_ENTRIES,
      payload: [],
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(getEntries()).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('Get entries is successful', () => {
  mock.onGet("https://mydiary-api.herokuapp.com/api/v1/entries/11").reply(200, {
    "status": "success",
    "username": "tonyguesswho",
    "data": []
  });

  const mockedActions = [
    {
      type: types.GET_ENTRY,
      payload: [],
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(getEntry(11)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('Create an entry successful', () => {
  mock.onPost("https://mydiary-api.herokuapp.com/api/v1/entries", newEntry).reply(200, {
    "status": "success",
    "username": "tonyguesswho",
    result
  });

  const mockedActions = [];

  const store = mockStore({ initialState });
  return store.dispatch(createEntry(newEntry, history)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('Create an entry successful', () => {
  mock.onPost("https://mydiary-api.herokuapp.com/api/v1/entries", newEntry).reply(500, {
    "status": "success",
    "username": "tonyguesswho",
    data: undefined
  });

  const mockedActions = [
    {
      type: types.CREATE_ENTRY_ERROR,
      payload: undefined,
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(createEntry(newEntry)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('edit an entry successfully', () => {
  mock.onPut("https://mydiary-api.herokuapp.com/api/v1/entries/11", newEntry).reply(200, {
    "status": "success",
    "username": "tonyguesswho",
    result
  });

  const mockedActions = [];

  const store = mockStore({ initialState });
  return store.dispatch(editEntry(newEntry, 11, history)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('Edit an entry error', () => {
  mock.onPut("https://mydiary-api.herokuapp.com/api/v1/entries/11", newEntry).reply(500, {
    "status": "failure",
    "username": "tonyguesswho",
    "message": error.response.data.message
  });

  const mockedActions = [
    {
      type: types.CREATE_ENTRY_ERROR,
      payload: error.response.data.message
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(editEntry(newEntry, 11)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});