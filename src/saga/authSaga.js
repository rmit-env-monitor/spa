import { call, put } from "redux-saga/effects";

import { loginRegisterOAuth } from "../services/authService";
import { SAVE_OAUTH_ERROR, SAVE_OAUTH_SUCCESS } from "../actions/actionTypes";

export function* sendGoogleData(action) {
  try {
    const user = yield call(loginRegisterOAuth, action.user);
    yield put({ type: SAVE_OAUTH_SUCCESS, user });
  } catch (e) {
    yield put({ type: SAVE_OAUTH_ERROR, message: e.message });
  }
}
