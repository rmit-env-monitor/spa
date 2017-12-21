import { UPDATE_SPIN_STATE, FETCH_GOOGLE_URL } from "../actions/actionTypes";

export default function authReducer(
  state = {
    loaded: true,
    googleUrl: null
  },
  action
) {
  switch (action.type) {
    case UPDATE_SPIN_STATE:
      return Object.assign({}, state, { loaded: action.loaded });
    case FETCH_GOOGLE_URL:
      localStorage.setItem("google_access_token", action.keys.accessToken);
      localStorage.setItem("google_refresh_token", action.keys.refreshToken);
      localStorage.setItem("google_expires_at", action.keys.expiresAt);
      return state;
    default:
      return state;
  }
}
