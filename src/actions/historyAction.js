import { SAVE_FROM_DATE_AND_TO_DATE } from "./actionTypes";

export function saveFromAndToDate(date) {
  return {
    type: SAVE_FROM_DATE_AND_TO_DATE,
    from: date.startDate,
    to: date.endDate
  };
}
