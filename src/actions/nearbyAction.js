import * as services from '../services/nearbyService'
import * as types from './actionTypes'

export function getCurrentCityDistrictAndNearby(lat, lng) {
    return services.getCurrentCityDistrictAndNearby(lat, lng, getCurrentCityDistrictAndNearbySuccess)
}

export function updateShowColorIndex(isShowed) {
    return {
        type: types.UPDATE_SHOW_COLOR_INDEX,
        isShowed: isShowed
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