import * as types from './actionTypes'
import * as services from '../services/measurementService'

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