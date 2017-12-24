import {
  UPDATE_SPIN_STATE,
  SAVE_GOOGLE_USER_ERROR,
  SAVE_GOOGLE_USER_SUCCESS
} from "../actions/actionTypes";
import saveAuthInfo from "../utilities/saveToLocalStorage";

export default function authReducer(
  state = {
    loaded: true,
    googleUrl: null,
    err: null
  },
  action
) {
  switch (action.type) {
    case UPDATE_SPIN_STATE:
      return Object.assign({}, state, { loaded: action.loaded });
    case SAVE_GOOGLE_USER_SUCCESS:
      saveAuthInfo(action.user);
      window.location = "/";
      return state;
    case SAVE_GOOGLE_USER_ERROR:
      return Object.assign({}, state, { err: action.message });
    default:
      return state;
  }
}
