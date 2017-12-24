import { call, put } from "redux-saga/effects";

import { loginRegisterWithGoogle } from "../services/authService";
import {
  SAVE_GOOGLE_USER_ERROR,
  SAVE_GOOGLE_USER_SUCCESS
} from "../actions/actionTypes";

export function* sendGoogleData(action) {
  try {
    const user = yield call(loginRegisterWithGoogle, action.user);
    yield put({ type: SAVE_GOOGLE_USER_SUCCESS, user });
  } catch (e) {
    yield put({ type: SAVE_GOOGLE_USER_ERROR, message: e.message });
  }
}
