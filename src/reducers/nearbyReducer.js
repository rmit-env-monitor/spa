import * as types from "../actions/actionTypes";

export default function nearbyReducer(
  state = {
    city: null,
    district: null,
    districts: [],
    nearestDevice: { record: { aqiValues: {} } },
    devices: [],
    nearby: [],
    detailedDeviceShowed: true,
    map: null,
    marker: null,
    // For add new station //
    citiesList: [],
    selectedCity: null,
    districtsList: [],
    selectedDistrict: null,
    newStationsList: [],
    // For add new station //
    stationRanking: [],
    message: null
  },
  action
) {
  switch (action.type) {
    case types.GET_CURRENT_CITY_DISTRICT_SUCCESS:
      return Object.assign({}, state, {
        city: action.data.city,
        district: action.data.district
      });

    case types.GET_NEARBY_DISTRICT_SUCCESS:
      return Object.assign({}, state, {
        nearby: action.data.nearby
      });

    case types.GET_LOCATION_STATION_SUCCESS:
      const deviceLength = action.devices.length;
      if (deviceLength > 0 && deviceLength < 2) {
        return Object.assign({}, state, {
          nearestDevice: action.devices[0],
          devices: []
        });
      } else if (deviceLength >= 2) {
        const newNearestDevice = action.devices[0];
        const newDevicesaction = action.devices.slice(1, deviceLength);
        const location = {
          lat: newNearestDevice.lat,
          lng: newNearestDevice.lng
        };
        state.marker.setPosition(location);
        state.marker.setLabel({
          text: newNearestDevice.record.aqiValues.aqi.toString()
        });
        state.map.setCenter(location);
        return Object.assign({}, state, {
          nearestDevice: newNearestDevice,
          devices: newDevicesaction,
          map: state.map,
          marker: state.marker
        });
      }

    case types.GET_STATION_RANKING_SUCCESS:
      return Object.assign({}, state, { stationRanking: action.data });

    case types.GET_STATION_RANKING_ERROR:
      return Object.assign({}, state, { message: action.e });

    case types.UPDATE_NEARBY_DEVICE_LATEST_RECORD:
      const newDevices = state.devices;
      newDevices[action.id].record = action.record;
      return Object.assign({}, state, { devices: newDevices });

    case types.SHOW_HIDE_DEVICE_DETAIL:
      return Object.assign({}, state, {
        detailedDeviceShowed: action.detailedDeviceShowed
      });

    case types.UPDATE_NEAREST_DEVICE_RECORD:
      const newNearestRecord = state.nearestDevice;
      newNearestRecord.record = action.record;
      state.marker.setLabel({
        text: newNearestRecord.record.aqiValues.aqi.toString()
      });
      return Object.assign({}, state, {
        nearestDevice: newNearestRecord,
        marker: state.marker
      });

    case types.UPDATE_OTHER_DISTRICT_RECORD:
      const newDistricts = state.districts;
      newDistricts[action.index] = action.record;
      return Object.assign({}, state, { districts: newDistricts });

    case types.GET_CITIES_SUCCESS:
      return Object.assign({}, state, { citiesList: action.cities });

    case types.GET_CITIES_ERROR:
      return Object.assign({}, state, { message: action.message });

    case types.SET_SELECTED_CITY:
      return Object.assign({}, state, { selectedCity: action.cityId });

    case types.GET_DISTRICT_SUCCESS:
      return Object.assign({}, state, { districtsList: action.districts });

    case types.GET_DISTRICT_ERROR:
      return Object.assign({}, state, { message: action.message });

    case types.SET_SELECTED_DISTRICT:
      return Object.assign({}, state, { selectedDistrict: action.districtId });

    case types.GET_DEVICE_LIST_SUCCESS:
      return Object.assign({}, state, { newStationsList: action.devices });

    case types.ADD_NEW_DEVICE:
      state.devices.push(action.device);
      return Object.assign({}, state, { devices: state.devices });

    case types.REMOVE_DEVICE:
      state.devices.splice(action.index, 1);
      return Object.assign({}, state, { devices: state.devices });

    case types.SWAP_DEFAULT_DEVICE:
      let temp = state.devices[action.newDefaultIndex];
      state.devices[action.newDefaultIndex] = state.nearestDevice;
      state.nearestDevice = temp;
      const location = {
        lat: state.nearestDevice.lat,
        lng: state.nearestDevice.lng
      };
      state.marker.setPosition(location);
      state.marker.setLabel({
        text: state.nearestDevice.record.aqiValues.aqi.toString()
      });
      state.map.setCenter(location);
      return Object.assign({}, state, {
        devices: state.devices,
        nearestDevice: state.nearestDevice,
        map: state.map,
        marker: state.marker
      });
    case types.SAVE_MAP:
      return Object.assign({}, state, { map: action.map });

    case types.SAVE_MARKER:
      return Object.assign({}, state, { marker: action.marker });

    default:
      return state;
  }
}
