import axios from 'axios'

import baseService from './baseService'
import { GET_METHOD } from '../utilities/constants'

export function getCurrentCityDistrictAndNearby(lat, lng, success, deviceListSuccess) {
    return dispatch => {
        // Get current district and city from lat and lng.
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true')
            .then(res => {
                const currentCityDistrict = getCityAndDistrict(res.data)
                // Get list of nearby districts.
                return getNearbyDistricts(currentCityDistrict.city, currentCityDistrict.district, dispatch, success, deviceListSuccess)
            })
    }
}

export function getDeviceList(city, district) {
    return baseService(GET_METHOD, '/api/web/devices?city=' + city + '&district=' + district)
}

function getNearbyDistricts(city, district, dispatch, success, deviceListSuccess) {    
    return baseService(GET_METHOD, '/api/web/nearby?city=' + city + '&district=' + district)
        .then(res => {
            dispatch(success(city, district, res.data))
            // Get device list of current location.
            return getDeviceListOfCurrentLocation(city, district, deviceListSuccess, dispatch)
        })
}

function getDeviceListOfCurrentLocation(city, district, success, dispatch) {
    return baseService(GET_METHOD, '/api/web/devices?city=' + city + '&district=' + district)
        .then(res => {
            console.log(res.data)
            dispatch(success(res.data))
        })
}

function getCityAndDistrict(data) {
    const finalValue = {
        city: '',
        district: ''
    }

    for (let value of data.results[0].address_components) {
        if (value.types[0] === 'administrative_area_level_2') {
            finalValue.district = value.short_name
        } else if (value.types[0] === 'administrative_area_level_1') {
            finalValue.city = value.short_name
            break
        }
    }

    return finalValue
}