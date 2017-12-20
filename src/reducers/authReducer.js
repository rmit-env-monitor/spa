import { UPDATE_SPIN_STATE } from "../actions/actionTypes";

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
    default:
      return state;
  }
}
