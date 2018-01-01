import { call, put, all } from "redux-saga/effects";

import {
  getCurrentCityDistrict,
  getNearby,
  getLocationStations,
  getStationRanking
} from "../services/nearbyService";
import {
  GET_CURRENT_CITY_DISTRICT_SUCCESS,
  GET_CURRENT_CITY_DISTRICT_ERROR,
  GET_NEARBY_DISTRICT_SUCCESS,
  GET_LOCATION_STATION_SUCCESS,
  GET_STATION_RANKING_SUCCESS,
  GET_STATION_RANKING_ERROR
} from "../actions/actionTypes";

export function* currentCityDistrict(action) {
  try {
    // Get current city and district.
    const data = yield call(getCurrentCityDistrict, action.coordinate);
    yield put({ type: GET_CURRENT_CITY_DISTRICT_SUCCESS, data });

    // Get nearby districts and stations within current district.
    const [nearbyDistrict, devices] = yield all([
      call(getNearby, data),
      call(getLocationStations, data)
    ]);
    yield put({ type: GET_NEARBY_DISTRICT_SUCCESS, data: nearbyDistrict });
    yield put({ type: GET_LOCATION_STATION_SUCCESS, devices });
  } catch (e) {
    yield put({ type: GET_CURRENT_CITY_DISTRICT_ERROR, e });
  }
}

export function* stationRanking(action) {
  try {
    const data = yield call(getStationRanking, action.info);
    yield put({ type: GET_STATION_RANKING_SUCCESS, data });
  } catch (e) {
    yield put({ type: GET_STATION_RANKING_ERROR, e });
  }
}
