import { takeEvery } from "redux-saga/effects";

import { sendGoogleData } from "./authSaga";
import { SAVE_GOOGLE_USER_REQUESTED } from "../actions/actionTypes";

function* rootSaga() {
  yield takeEvery(SAVE_GOOGLE_USER_REQUESTED, sendGoogleData);
}

export default rootSaga;
