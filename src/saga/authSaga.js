import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { loginRegisterWithGoogle } from "../services/authService";
import {
  SAVE_GOOGLE_USER_ERROR,
  SAVE_GOOGLE_USER_SUCCESS
} from "../actions/actionTypes";

export function* sendGoogleData(action) {
  try {
    const result = yield call(loginRegisterWithGoogle, action.user);
    yield put({ type: SAVE_GOOGLE_USER_SUCCESS, username: result.username });
  } catch (e) {
    yield put({ type: SAVE_GOOGLE_USER_ERROR, message: e.message });
  }
}
