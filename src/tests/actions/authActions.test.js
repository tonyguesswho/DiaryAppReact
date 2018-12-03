import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from '../../actions/actionTypes';
import { signup, signin, signout, clearError } from '../../actions/authAction';
import initialState from '../../reducers/initialState/index';

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);
const userDetails = { username: 'tony', email: 'tony566@gmail.com', password: '123456', confirmPassword: '123456' };

const error = {
  response: {
    data: {
      message: 'message'
    }
  }
}
const localStorage = {
  token: 'tokennn',
  setItem: jest.fn()
}

const decode = jest.fn((localStorage) => {
  return localStorage
});



const result = {
  data: {
    token: 'token'
  }
}

const history = {
  push: jest.fn()
}

it('signout successfully', () => {
  const mockedActions = [
    {
      type: types.SIGNOUT_USER,
      payload: ''
    },
  ];

  const store = mockStore({ initialState });
  store.dispatch(signout());
  return expect(store.getActions()).toEqual(mockedActions);
});

it('signup successful', () => {
  mock.onPost("https://mydiary-api.herokuapp.com/auth/signup", userDetails).reply(200, {
    "status": "success",
    "username": "tonyguesswho",
    "token": 'token'
  });

  const mockedActions = [
    {
      type: types.SIGNIN_USER,
      payload: result.data.token
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(signup(userDetails, history)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('fails to signup', () => {
  mock.onPost("https://mydiary-api.herokuapp.com/auth/signup", userDetails).reply(500, {
    "status": "success",
    "username": "tonyguesswho",
    "message": error.response.data.message
  });

  const mockedActions = [
    {
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(signup(userDetails)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});

it('fails to signin', () => {
  mock.onPost("https://mydiary-api.herokuapp.com/auth/login", userDetails).reply(500, {
    "status": "success",
    "username": "tonyguesswho",
    "message": error.response.data.message
  });

  const mockedActions = [
    {
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message
    },
  ];

  const store = mockStore({ initialState });
  return store.dispatch(signin(userDetails)).then(() => {
    expect(store.getActions()).toEqual(mockedActions);
  });
});