import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.cats, action) {
   // debugger;
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action;
    default:
      return state;
  }
}