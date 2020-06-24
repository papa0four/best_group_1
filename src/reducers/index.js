import { combineReducers } from 'redux';
import guestReducer from './guestReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  guest: guestReducer,
  room: roomReducer,
});
