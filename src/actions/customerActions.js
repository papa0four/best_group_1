import axios from 'axios';
import {
  GET_CUSTOMERS,
  SET_LOADING,
  EDIT_CUSTOMER,
  SEARCH_CUSTOMER,
  DELETE_CUSTOMER,
  CUSTOMER_ERROR,
  SET_CURRENT,
  ADD_CUSTOMER,
} from './types';

export const getCustomers = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('http://localhost:5000/customers');

    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: error,
    });
  }
};

export const addCustomer = (customer) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.post('http://localhost:5000/customers', customer);
    dispatch({
      type: ADD_CUSTOMER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: error,
    });
  }
};

//edit customer
export const editCustomer = (customer) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.put(`http://localhost:5000/customers/${customer.id}`, customer);
    dispatch({
      type: EDIT_CUSTOMER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: error,
    });
  }
};

//search customer
export const searchCustomer = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`http://localhost:5000/customers?q=${text}`);
    dispatch({
      type: SEARCH_CUSTOMER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: error,
    });
  }
};

//delete customer
export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/customers/${id}`);
    dispatch({
      type: DELETE_CUSTOMER,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: error,
    });
  }
};

//select customer
export const setCurrent = (customer) => {
  return {
    type: SET_CURRENT,
    payload: customer,
  };
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
