import baseService from "./baseService";
import { GET_METHOD } from "../utilities/constants";

export function getDistrictsByCity(city) {
  return new Promise((resolve, reject) => {
    baseService(GET_METHOD, `/api/web/devices/districts?city=${city}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
