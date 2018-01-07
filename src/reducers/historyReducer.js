import { SAVE_FROM_DATE_AND_TO_DATE } from "../actions/actionTypes";

export default function historyReducer(
  state = { chosenFromDate: null, chosenToDate: null },
  action
) {
  switch (action.type) {
    case SAVE_FROM_DATE_AND_TO_DATE:
      return Object.assign({}, state, {
        chosenFromDate: action.from ? action.from : state.chosenFromDate,
        chosenToDate: action.to ? action.to : state.chosenToDate
      });

    default:
      return state;
  }
}
