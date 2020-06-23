import axios from 'axios';
import { GET_ROOMS, SET_LOADING, ROOM_ERROR } from '../actions/types';

export const getRooms = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('http://localhost:5000/rooms');

    dispatch({
      type: GET_ROOMS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ROOM_ERROR,
      payload: error,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
