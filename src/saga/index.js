import { takeEvery } from "redux-saga/effects";

import { sendGoogleData } from "./authSaga";
import { FETCH_GOOGLE_URL_REQUESTED } from "../actions/actionTypes";

function* rootSaga() {
  yield takeEvery(FETCH_GOOGLE_URL_REQUESTED, sendGoogleData);
}

export default rootSaga;
