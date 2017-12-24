import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { loginRegisterWithGoogle } from "../services/authService";
import { SAVE_GOOGLE_USER_ERROR } from "../actions/actionTypes";

export function* sendGoogleData(action) {
  try {
    yield call(loginRegisterWithGoogle, action.user);
  } catch (e) {
    yield put({ type: SAVE_GOOGLE_USER_ERROR, message: e.message });
  }
}
