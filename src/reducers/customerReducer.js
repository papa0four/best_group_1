import {
  GET_CUSTOMERS,
  SET_LOADING,
  EDIT_CUSTOMER,
  SEARCH_CUSTOMER,
  DELETE_CUSTOMER,
  CUSTOMER_ERROR,
  SET_CURRENT,
  ADD_CUSTOMER,
} from '../actions/types';

const initialState = {
  customers: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state, action.payload],
        loading: false,
      };
    case EDIT_CUSTOMER:
      return {
        ...state,
        customers: state.customers.map((customer) => (customer.id === action.payload.id ? action.payload : customer)),
        current: null,
        loading: false,
      };
    case SEARCH_CUSTOMER:
      return {
        ...state,
        customers: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer.id !== action.payload),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CUSTOMER_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
