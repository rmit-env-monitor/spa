import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { getGoogleAuthUrl } from "../services/authService";
import {
  FETCH_GOOGLE_URL_REQUESTED,
  FETCH_GOOGLE_URL,
  FETCH_GOOGLE_URL_ERROR
} from "../actions/actionTypes";

function* rootSaga() {}

export default rootSaga;
