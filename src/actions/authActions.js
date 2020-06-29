import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from './types';
import setAuthToken from '../utils/setAuthToken';

const api = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

//load user
// const loadUser = () => async (dispatch) => {
//     setAuthToken(localStorage.token);
//     try {

//     }
// }

//register user
export const registerUser = (newUser) => async (dispatch) => {
    try {
        const res = await api.post('http://localhost:5000/user', newUser);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data
        });
    }
}

