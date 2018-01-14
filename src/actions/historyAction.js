import {
  HISTORY_SAVE_FROM_DATE_AND_TO_DATE,
  HISTORY_GET_CITIES_LIST_REQUESTED,
  HISTORY_GET_DISTRICTS_LIST_REQUESTED,
  HISTORY_SAVE_SELECTED_CITY,
  HISTORY_SAVE_SELECTED_DISTRICT,
  HISTORY_GET_AQI_GRAPH_INFO_REQUESTED
} from "./actionTypes";

export function saveFromAndToDate(date) {
  return {
    type: HISTORY_SAVE_FROM_DATE_AND_TO_DATE,
    from: date.startDate,
    to: date.endDate
  };
}

export function getCitiesList() {
  return {
    type: HISTORY_GET_CITIES_LIST_REQUESTED
  };
}

export function getDistrictsList(city) {
  return {
    type: HISTORY_GET_DISTRICTS_LIST_REQUESTED,
    city
  };
}

export function saveSelectedCity(city) {
  return {
    type: HISTORY_SAVE_SELECTED_CITY,
    city
  };
}

export function saveSelectedDistrict(district) {
  return {
    type: HISTORY_SAVE_SELECTED_DISTRICT,
    district
  };
}

export function getHistoryAQI(start, end) {
  return {
    type: HISTORY_GET_AQI_GRAPH_INFO_REQUESTED,
    start,
    end
  };
}
