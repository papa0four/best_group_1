import { GET_ROOMS, SELECTED_ROOM, SET_LOADING, ROOM_ERROR } from '../actions/types';

const initialState = {
  rooms: [],
  selectedRoom: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ROOM_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
