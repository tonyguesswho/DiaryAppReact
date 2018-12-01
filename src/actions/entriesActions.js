import axios from 'axios';
import * as types from './actionTypes';

export const getEntries = () => async dispatch => {
  try {
    const response = await axios.get('https://mydiary-api.herokuapp.com/api/v1/entries');
    dispatch({
      type: types.GET_ENTRIES,
      payload: response.data.data
    });
  } catch (error) {
  }
};
