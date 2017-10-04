import {combineReducers} from 'redux';
import catReducer from './usersReducer';

const rootReducer = combineReducers({
  // short hand property names
  catReducer
})

export default rootReducer;