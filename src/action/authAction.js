import * as types from "./action-types";

//Save user info 
export function saveUserInfo(userData) {
  return (dispatch) => {
      dispatch({
        type: types.USER_INFO,
        payload: userData
      })
    }
  }