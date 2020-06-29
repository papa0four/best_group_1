import axios from 'axios';
import {
  GET_GUESTS,
  SET_LOADING,
  EDIT_GUEST,
  SEARCH_GUEST,
  DELETE_GUEST,
  GUEST_ERROR,
  SET_CURRENT,
  ADD_GUEST,
} from './types';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getGuests = () => async (dispatch) => {
  try {
    setLoading();
    const res = await api.get('http://localhost:5000/guest');
    console.log(res.data);

    dispatch({
      type: GET_GUESTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GUEST_ERROR,
      payload: error,
    });
  }
};

export const addGuest = (guest) => async (dispatch) => {
  try {
    setLoading();
    const res = await api.post('http://localhost:5000/guest', guest);
    dispatch({
      type: ADD_GUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GUEST_ERROR,
      payload: error,
    });
  }
};

//edit guest
export const editGuest = (guest) => async (dispatch) => {
  try {
    setLoading();
    const res = await api.put(`http://localhost:5000/guest/${guest.id}`, guest);
    dispatch({
      type: EDIT_GUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GUEST_ERROR,
      payload: error,
    });
  }
};

//search guest
export const searchGuest = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await api.get(`http://localhost:5000/guest?q=${text}`);
   
    dispatch({
      type: SEARCH_GUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GUEST_ERROR,
      payload: error,
    });
  }
};

//delete guest
export const deleteGuest = (id) => async (dispatch) => {
  try {
    await api.delete(`http://localhost:5000/guest/${id}`);
    dispatch({
      type: DELETE_GUEST,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GUEST_ERROR,
      payload: error,
    });
  }
};

//select guest
export const setCurrent = (guest) => {
  return {
    type: SET_CURRENT,
    payload: guest,
  };
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
