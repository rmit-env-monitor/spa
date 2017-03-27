import * as types from './actionTypes'
import * as services from '../services/measurementService'

/** Flux actions */
export function getAirData(data) {
    return {
        type: types.GET_AIR_DATA_SUCCESS,
        air: data
    }
}

export function getCurrentLocationDetail(data) {
    return services.callGoogleAPIForLocation(
        data.latitude, data.longitude,
        getCurrentLocationDetailSuccess, getCurrentLocationDetailError
    )
}

export function getCities() {
    return services.getListOfCities(getListOfCitiesSuccess, getListOfCitiesError)
}

export function getDistrictOfCity(city) {
    return services.getListOfDistrictOfCity(city, getListOfDistrictOfCitySuccess, getListOfDistrictOfCityError)
}

export function setSelectedCity(cityId) {
    return {
        type: types.SET_SELECTED_CITY,
        cityId: cityId
    }
}

export function setSelectedDistrict(districtId) {
    return {
        type: types.SET_SELECTED_DISTRICT,
        districtId: districtId
    }
}

export function getDeviceList(city, district) {
    return services.getDeviceList(city, district, getDeviceSuccess, getDeviceError)
}

export function getLatestDeviceRecord(deviceID) {
    return services.getLatestDeviceRecord(deviceID, getLatestDeviceRecordSuccess, getLatestDeviceRecordError)
}
/** Flux actions */

function getCurrentLocationDetailSuccess(data) {
    return {
        type: types.GET_LOCATION_DETAIL_SUCCESS,
        address: data
    }
}

function getCurrentLocationDetailError(data) {
    return {
        type: types.GET_LOCATION_DETAIL_ERROR,
        message: data
    }
}

function getListOfCitiesSuccess(data) {
    return {
        type: types.GET_CITIES_SUCCESS,
        cities: data
    }
}

function getListOfCitiesError(data) {
    return {
        type: types.GET_CITIES_ERROR,
        message: data
    }
}

function getListOfDistrictOfCitySuccess(data) {
    return {
        type: types.GET_DISTRICT_SUCCESS,
        districts: data
    }
}

function getListOfDistrictOfCityError(data) {
    return {
        type: types.GET_DISTRICT_ERROR,
        message: data
    }
}

function getDeviceSuccess(data) {
    return {
        type: types.GET_DEVICE_LIST_SUCCESS,
        devices: data
    }
}

function getDeviceError(data) {
    return {
        type: types.GET_DEVICE_LIST_ERROR,
        message: data
    }
}

function getLatestDeviceRecordSuccess(data) {
    return {
        type: types.GET_LATEST_DEVICE_RECORD_SUCCESS,
        record: data
    }
}

function getLatestDeviceRecordError(data) {
    return {
        type: types.GET_LATEST_DEVICE_RECORD_ERROR,
        message: data
    }
}