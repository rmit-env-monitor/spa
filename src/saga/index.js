import { takeEvery } from "redux-saga/effects";

import { sendGoogleData } from "./authSaga";
import {
  currentCityDistrict,
  stationRanking,
  availableCities,
} from "./nearbySaga";
import {
  SAVE_OAUTH_REQUESTED,
  GET_CURRENT_CITY_DISTRICT_REQUESTED,
  GET_STATION_RANKING_REQUESTED,
  GET_CITIES_REQUESTED
} from "../actions/actionTypes";

function* rootSaga() {
  yield takeEvery(SAVE_OAUTH_REQUESTED, sendGoogleData);
  yield takeEvery(GET_CURRENT_CITY_DISTRICT_REQUESTED, currentCityDistrict);
  yield takeEvery(GET_STATION_RANKING_REQUESTED, stationRanking);
  yield takeEvery(GET_CITIES_REQUESTED, availableCities);
}

export default rootSaga;
