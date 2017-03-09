import * as types from './actionTypes'
import * as services from '../services/mapService'

export function getLocationRecords(updateMap) {
    return services.getAllLocationRecords(getLocationRecordsSuccess, getLocationRecordsError, updateMap)
}

export function storeMapData(map) {
    return {
        type: types.STORE_MAP_DATA,
        map: map
    }
}

function getLocationRecordsSuccess(data) {
    return {
        type: types.GET_LOCATION_RECORDS_SUCCESS,
        records: data
    }
}

function getLocationRecordsError(data) {
    return {
        type: types.GET_LOCATION_RECORDS_ERROR,
        message: data
    }
}