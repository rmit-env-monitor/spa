import axios from "axios";

import baseService from "./baseService";
import { GET_METHOD } from "../utilities/constants";

export function getDeviceList(city, district) {
  return baseService(
    GET_METHOD,
    `/api/web/devices?city=${city}&district=${district}`
  );
}

export function getOneDevice(city, district) {
  return baseService(
    GET_METHOD,
    `/api/web/device?city=${city}&district=${district}`
  );
}

export function getListOfCities(success, error) {
  return dispatch => {
    return baseService(GET_METHOD, "/api/web/devices/cities")
      .then(res => {
        dispatch(success(res.data));
      })
      .catch(err => {
        dispatch(error(err));
      });
  };
}

export function getListOfDistrictOfCity(city, success, error) {
  return dispatch => {
    return baseService(GET_METHOD, `/api/web/devices/districts?city=${city}`)
      .then(res => {
        dispatch(success(res.data));
      })
      .catch(err => {
        dispatch(error(err));
      });
  };
}

export function getDistrictDeviceList(city, district, success, error) {
  return dispatch => {
    return baseService(
      GET_METHOD,
      `/api/web/devices?city=${city}&district=${district}`
    )
      .then(res => {
        dispatch(success(res.data));
      })
      .catch(err => {
        dispatch(error(err));
      });
  };
}

// NEW SAGA CODE
export function getCurrentCityDistrict(coordinate) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
          coordinate.lat
        },${coordinate.lng}&sensor=true`
      )
      .then(res => {
        resolve(getCityAndDistrict(res.data));
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

export function getNearby(location) {
  return new Promise((resolve, reject) => {
    baseService(
      GET_METHOD,
      `/api/web/nearby?city=${location.city}&district=${location.district}`
    )
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

export function getLocationStations(location) {
  return new Promise((resolve, reject) => {
    baseService(
      GET_METHOD,
      `/api/web/devices?city=${location.city}&district=${location.district}`
    )
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

export function getStationRanking(info) {
  return new Promise((resolve, reject) => {
    return baseService(
      GET_METHOD,
      `/api/web/station-ranking?city=${info.city}&deviceId=${info.deviceId}`
    )
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

// NEW SAGA CODE

function getCityAndDistrict(data) {
  const finalValue = {
    city: "",
    district: ""
  };

  for (let value of data.results[0].address_components) {
    if (value.types[0] === "administrative_area_level_2") {
      finalValue.district = value.short_name;
    } else if (value.types[0] === "administrative_area_level_1") {
      finalValue.city = value.short_name;
      break;
    }
  }

  return finalValue;
}
