import axios from 'axios'

import baseService from './baseService'
import * as constants from '../utilities/constants'

export function callGoogleAPIForLocation(lat, lng, success, error) {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`

    return dispatch => {
        return axios.get(URL)
            .then(res => {
                dispatch(success(res.data.results[0].formatted_address))
            })
            .catch(err => {
                dispatch(error(err))
            })
    }
}

export function getListOfCities(success, error) {
    return dispatch => {
        return baseService(constants.GET_METHOD, '/api/web/devices/cities')
            .then(res => {
                dispatch(success(res.data))
            })
            .catch(err => {
                dispatch(error(err))
            })
    }
}

export function getListOfDistrictOfCity(city, success, error) {
    return dispatch => {
        return baseService(constants.GET_METHOD, `/api/web/devices/districts?city=${city}`)
            .then(res => {
                dispatch(success(res.data))
            })
            .catch(err => {
                dispatch(error(err))
            })
    }
}

export function getDeviceList(city, district, success, error) {
    return dispatch => {
        return baseService(constants.GET_METHOD, `/api/web/devices?city=${city}&district=${district}`)
            .then(res => {
                dispatch(success(res.data))
            })
            .catch(err => {
                dispatch(error(err))
            })
    }
}

export function getLatestDeviceRecord(deviceID) {
    return baseService(constants.GET_METHOD, `api/web/records/${deviceID}`)
}