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

export function getRecord(city, district) {
    return services.getRecords(city, district, getRecordSuccess, getRecordError)
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

function getRecordSuccess(data) {
    return {
        type: types.GET_RECORDS_SUCCESS,
        records: data
    }
}

function getRecordError(data) {
    return {
        type: types.GET_RECORDS_ERROR,
        message: data
    }
}