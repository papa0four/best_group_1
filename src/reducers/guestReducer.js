import {
  GET_GUESTS,
  SET_LOADING,
  EDIT_GUEST,
  SEARCH_GUEST,
  DELETE_GUEST,
  GUEST_ERROR,
  SET_CURRENT,
  ADD_GUEST,
} from '../actions/types';

const initialState = {
  guests: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GUESTS:
      return {
        ...state,
        guests: action.payload,
        loading: false,
      };
    case ADD_GUEST:
      return {
        ...state,
        guest: [...state, action.payload],
        loading: false,
      };
    case EDIT_GUEST:
      return {
        ...state,
        guests: state.guests.map((guest) => (guest.id === action.payload.id ? action.payload : guest)),
        current: null,
        loading: false,
      };
    case SEARCH_GUEST:
      return {
        ...state,
        guests: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_GUEST:
      return {
        ...state,
        guests: state.guests.filter((guest) => guest.id !== action.payload),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case GUEST_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
