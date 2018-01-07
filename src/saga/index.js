import { takeEvery } from "redux-saga/effects";

import {
  SAVE_OAUTH_REQUESTED,
  GET_CURRENT_CITY_DISTRICT_REQUESTED,
  GET_STATION_RANKING_REQUESTED,
  GET_CITIES_REQUESTED,
  HISTORY_GET_CITIES_LIST_REQUESTED,
  HISTORY_GET_DISTRICTS_LIST_REQUESTED
} from "../actions/actionTypes";
import { sendGoogleData } from "./authSaga";
import {
  currentCityDistrict,
  stationRanking,
  availableCities
} from "./nearbySaga";
import { getCitiesListHistory, getDistrictsByCityHistory } from "./historySaga";

function* rootSaga() {
  yield takeEvery(SAVE_OAUTH_REQUESTED, sendGoogleData);
  yield takeEvery(GET_CURRENT_CITY_DISTRICT_REQUESTED, currentCityDistrict);
  yield takeEvery(GET_STATION_RANKING_REQUESTED, stationRanking);
  yield takeEvery(GET_CITIES_REQUESTED, availableCities);
  yield takeEvery(HISTORY_GET_CITIES_LIST_REQUESTED, getCitiesListHistory);
  yield takeEvery(
    HISTORY_GET_DISTRICTS_LIST_REQUESTED,
    getDistrictsByCityHistory
  );
}

export default rootSaga;
