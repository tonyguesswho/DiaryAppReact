import axios from 'axios';
import * as types from './actionTypes';
import swal from 'sweetalert';


export const signup = (userDetails, history) => async dispatch => {
  try {
    const response = await axios.post('https://mydiary-api.herokuapp.com/auth/signup', userDetails);
    dispatch({
      type: types.SIGNIN_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    swal({
      title: "Welcome",
      text: "Signup Successful",
      icon: "success",
    });
    history.push('/profile')
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message
    });
  }
};

export const signin = (userDetails, history) => async dispatch => {
  try {
    const response = await axios.post('https://mydiary-api.herokuapp.com/auth/login',userDetails);
    console.log(response.data.token)
    dispatch({ type: types.SIGNIN_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    history.push('/profile')
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return { type: types.SIGNOUT_USER };
};
