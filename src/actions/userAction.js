import UsersApi from '../api/usersApi';
import * as types from './actionTypes';

export function loadCats() {
   // debugger;
  return function(dispatch) {
    return UsersApi.getAllCats().then(cats => {
      dispatch(loadUsersSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}


export function loadUsersSuccess(cats) {
   // debugger;
    //ES6 -- cats = cats:cats
  return {type: types.LOAD_CATS_SUCCESS, cats};
}