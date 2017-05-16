import * as services from '../services/nearbyService'
import * as types from './actionTypes'

export function getCurrentCityDistrictNearbyCurrentDevice(lat, lng) {
    return services.getCurrentCityDistrictAndNearby(lat, lng, getCurrentCityDistrictAndNearbySuccess, getDeviceListOfCurrentLocationSuccess)
}

export function updateShowColorIndex(isShowed) {
    return {
        type: types.UPDATE_SHOW_COLOR_INDEX,
        isShowed: isShowed
    }
}

export function updateNDeviceLatestRecord(id, record) {
    return {
        type: types.UPDATE_NEARBY_DEVICE_LATEST_RECORD,
        id: id,
        record: record
    }
}

function getCurrentCityDistrictAndNearbySuccess(city, district, nearby) {
    return {
        type: types.GET_CURRENT_CITY_DISTRICT_AND_NEARBY_SUCCESS,
        city: city,
        district: district,
        nearby: nearby.nearby
    }
}

function getDeviceListOfCurrentLocationSuccess(data) {
    return {
        type: types.GET_DEVICES_IN_CURRENT_DISTRICT_SUCCESS,
        devices: data
    }
}