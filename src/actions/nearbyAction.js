import * as services from "../services/nearbyService";
import * as types from "./actionTypes";

// SAGA actions
export function getNearbyMainData(lat, lng) {
  return {
    type: types.GET_CURRENT_CITY_DISTRICT_REQUESTED,
    coordinate: {
      lat,
      lng
    }
  };
}

export function getStationRanking(city, deviceId) {
  return {
    type: types.GET_STATION_RANKING_REQUESTED,
    info: {
      city,
      deviceId
    }
  };
}

export function getCities() {
  return {
    type: types.GET_CITIES_REQUESTED
  };
}
// SAGA actions

export function updateShowColorIndex(isShowed) {
  return {
    type: types.UPDATE_SHOW_COLOR_INDEX,
    isShowed: isShowed
  };
}

export function updateNDeviceLatestRecord(id, record) {
  return {
    type: types.UPDATE_NEARBY_DEVICE_LATEST_RECORD,
    id: id,
    record: record
  };
}

export function updateDeviceDetailShowed(state) {
  return {
    type: types.SHOW_HIDE_DEVICE_DETAIL,
    detailedDeviceShowed: state
  };
}

export function updateNearestDevice(record) {
  return {
    type: types.UPDATE_NEAREST_DEVICE_RECORD,
    record: record
  };
}

export function updateOtherDevice(record, index) {
  return {
    type: types.UPDATE_OTHER_DISTRICT_RECORD,
    record: record,
    index: index
  };
}

export function setSelectedCity(cityId) {
  return {
    type: types.SET_SELECTED_CITY,
    cityId: cityId
  };
}

export function getDistrictOfCity(city) {
  return services.getListOfDistrictOfCity(
    city,
    getListOfDistrictOfCitySuccess,
    getListOfDistrictOfCityError
  );
}

export function setSelectedDistrict(districtId) {
  return {
    type: types.SET_SELECTED_DISTRICT,
    districtId: districtId
  };
}

export function getDistrictDeviceList(city, district) {
  return services.getDistrictDeviceList(
    city,
    district,
    getDeviceSuccess,
    getDeviceError
  );
}

export function addNewDevice(device) {
  return {
    type: types.ADD_NEW_DEVICE,
    device: device
  };
}

export function removeDevice(index) {
  return {
    type: types.REMOVE_DEVICE,
    index: index
  };
}

export function swapDefaultDevice(newDefaultIndex) {
  return {
    type: types.SWAP_DEFAULT_DEVICE,
    newDefaultIndex: newDefaultIndex
  };
}

export function saveMap(map) {
  return {
    type: types.SAVE_MAP,
    map: map
  };
}

export function saveMarker(marker) {
  return {
    type: types.SAVE_MARKER,
    marker: marker
  };
}

function getListOfDistrictOfCitySuccess(data) {
  return {
    type: types.GET_DISTRICT_SUCCESS,
    districts: data
  };
}

function getListOfDistrictOfCityError(data) {
  return {
    type: types.GET_DISTRICT_ERROR,
    message: data
  };
}

function getDeviceSuccess(data) {
  return {
    type: types.GET_DEVICE_LIST_SUCCESS,
    devices: data
  };
}

function getDeviceError(data) {
  return {
    type: types.GET_DEVICE_LIST_ERROR,
    message: data
  };
}
