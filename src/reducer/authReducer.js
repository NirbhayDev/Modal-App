import * as types from '../action/action-types';

const initialState = {
  userInfo: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state
  }
};

export default authReducer;