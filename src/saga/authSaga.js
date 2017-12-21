import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { loginRegisterWithGoogle } from "../services/authService";
import {
  FETCH_GOOGLE_URL,
  FETCH_GOOGLE_URL_ERROR
} from "../actions/actionTypes";

export function* sendGoogleData(action) {
  try {
    const keys = yield call(loginRegisterWithGoogle, action.user);
    yield put({ type: FETCH_GOOGLE_URL, keys });
  } catch (e) {
    yield put({ type: FETCH_GOOGLE_URL_ERROR, message: e.message });
  }
}
