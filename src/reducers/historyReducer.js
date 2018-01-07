import {
  HISTORY_SAVE_FROM_DATE_AND_TO_DATE,
  HISTORY_GET_CITIES_LIST_SUCCESS,
  HISTORY_GET_DISTRICTS_LIST_SUCCESS,
  HISTORY_SAVE_SELECTED_CITY,
  HISTORY_SAVE_SELECTED_DISTRICT
} from "../actions/actionTypes";

export default function historyReducer(
  state = {
    chosenFromDate: null,
    chosenToDate: null,
    cities: [],
    chosenCity: null,
    districts: [],
    chosenDistrict: null
  },
  action
) {
  switch (action.type) {
    case HISTORY_SAVE_FROM_DATE_AND_TO_DATE:
      return Object.assign({}, state, {
        chosenFromDate: action.from ? action.from : state.chosenFromDate,
        chosenToDate: action.to ? action.to : state.chosenToDate
      });

    case HISTORY_GET_CITIES_LIST_SUCCESS:
      return Object.assign({}, state, { cities: action.data });

    case HISTORY_SAVE_SELECTED_CITY:
      return Object.assign({}, state, { chosenCity: action.city });

    case HISTORY_GET_DISTRICTS_LIST_SUCCESS:
      return Object.assign({}, state, { districts: action.data });

    case HISTORY_SAVE_SELECTED_DISTRICT:
      return Object.assign({}, state, { chosenDistrict: action.district });

    default:
      return state;
  }
}
