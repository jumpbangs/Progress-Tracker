import {
  AUTH_LOGIN_ERR,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGOUT_ERR,
  AUTH_LOGOUT_SUCCESS
} from "../actions/auth.Actions";

const defaultState = {
  data: [],
  err: null,
  success: null
};

export default function authReducer(state = defaultState, action) {
  console.log(action.type);
  switch (action.type) {
    case AUTH_LOGIN_ERR:
      return {
        ...state,
        err: action.payload.error
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        err: null,
        success: action.payload.success
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        err: null,
        success: action.payload.success
      };
    case AUTH_REGISTER_FAIL:
      return {
        ...state,
        err: action.payload.error
      };

    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        err: null,
        success: action.payload.success
      };

    case AUTH_LOGOUT_ERR:
      return {
        ...state,
        err: action.payload.error
      };
    default:
      return state;
  }
}
