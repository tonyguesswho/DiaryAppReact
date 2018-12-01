import axios from 'axios';
import * as types from './actionTypes';
import swal from 'sweetalert';

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
export const createEntry = (entryDetails, history) => async dispatch => {
  try {
    const response = await axios.post('https://mydiary-api.herokuapp.com/api/v1/entries', entryDetails);
    swal({
      title: 'Welcome',
      text: 'Signup Successful',
      icon: 'success'
    });
    history.push('/entries')
  } catch (error) {
    dispatch({
      type: types.CREATE_ENTRY_ERROR,
      payload: error.response.data.message
    });
  }
};
