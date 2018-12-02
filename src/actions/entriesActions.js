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
      title: 'Good job',
      text: 'Entry Created',
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
export const getEntry = (entryId) => async dispatch => {
  try {
    const response = await axios.get(`https://mydiary-api.herokuapp.com/api/v1/entries/${entryId}`);
    dispatch({
      type: types.GET_ENTRY,
      payload: response.data.data
    });

  } catch (error) {
  }
};
export const editEntry = (entryDetails, id, history) => async dispatch => {
  try {
    const response = await axios.put(`https://mydiary-api.herokuapp.com/api/v1/entries/${id}`, entryDetails);
    swal({
      title: 'Good job',
      text: 'Entry Updated',
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
