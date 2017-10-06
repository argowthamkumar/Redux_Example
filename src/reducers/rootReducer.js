import {combineReducers} from 'redux';
import userReducer from './usersReducer';

const rootReducer = combineReducers({
  // short hand property names
  userReducer
})

export default rootReducer;