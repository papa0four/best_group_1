import { combineReducers } from 'redux';
import guestReducer from './guestReducer';
import roomReducer from './roomReducer';
import authReducer from './authReducer';

export default combineReducers({
  guest: guestReducer,
  room: roomReducer,
  auth: authReducer
});
