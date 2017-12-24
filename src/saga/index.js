import { takeEvery } from "redux-saga/effects";

import { sendGoogleData } from "./authSaga";
import { SAVE_OAUTH_REQUESTED } from "../actions/actionTypes";

function* rootSaga() {
  yield takeEvery(SAVE_OAUTH_REQUESTED, sendGoogleData);
}

export default rootSaga;
