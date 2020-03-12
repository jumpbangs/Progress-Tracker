import {
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL
} from "../actions/user.Actions";

const defaultState = {
  data: [],
  err: null,
  success: null
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        err: null,
        success: action.payload.success
      };

    case FETCH_PROFILE_FAIL:
      return {
        ...state,
        err: action.payload.error
      };

    default:
      return state;
  }
}
