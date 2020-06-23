import { combineReducers } from 'redux';
import customerReducer from './customerReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  customer: customerReducer,
  room: roomReducer,
});
