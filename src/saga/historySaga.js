import { call, put } from "redux-saga/effects";

import { getListOfCities } from "../services/nearbyService";
import { getDistrictsByCity } from "../services/historyService";
import {
  HISTORY_GET_CITIES_LIST_SUCCESS,
  HISTORY_GET_CITIES_LIST_ERROR,
  HISTORY_GET_DISTRICTS_LIST_SUCCESS,
  HISTORY_GET_DISTRICTS_LIST_ERROR
} from "../actions/actionTypes";

export function* getCitiesListHistory() {
  try {
    const data = yield call(getListOfCities);
    yield put({ type: HISTORY_GET_CITIES_LIST_SUCCESS, data });
  } catch (e) {
    yield put({ type: HISTORY_GET_CITIES_LIST_ERROR, message: e.message });
  }
}

export function* getDistrictsByCityHistory(action) {
  try {
    const data = yield call(getDistrictsByCity, action.city);
    yield put({ type: HISTORY_GET_DISTRICTS_LIST_SUCCESS, data });
  } catch (e) {
    yield put({ type: HISTORY_GET_DISTRICTS_LIST_ERROR, message: e.message });
  }
}
