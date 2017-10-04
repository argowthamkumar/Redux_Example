import UsersApi from '../api/usersApi';
import * as types from './actionTypes';

export function loadCats() {
  return function(dispatch) {
    return UsersApi.getAllCats().then(cats => {
      dispatch(loadUsersSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}


export function loadUsersSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}