import axios from 'axios'

import baseService from './baseService'
import { GET_METHOD } from '../utilities/constants'

export function getCurrentCityDistrictAndNearby(lat, lng, success) {
    return dispatch => {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true')
            .then(res => {
                const currentCityDistrict = getCityAndDistrict(res.data)
                return getNearbyDistricts(currentCityDistrict.city, currentCityDistrict.district, dispatch, success)
            })
    }
}

export function getDeviceList(city, district) {
    return baseService(GET_METHOD, '/api/web/devices?city=' + city + '&district=' + district)
}

function getNearbyDistricts(city, district, dispatch, success) {
    return baseService(GET_METHOD, '/api/web/nearby?city=' + city + '&district=' + district)
        .then(res => {
            dispatch(success(city, district, res.data))
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