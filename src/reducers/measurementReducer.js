import * as types from '../actions/actionTypes'

export default function measurementReducer(state = {
    cities: [],
    districts: [],
    selectedCity: null,
    selectedDistrict: null,
    error: null
}, action) {
    switch (action.type) {
        case types.GET_LOCATION_DETAIL_SUCCESS:
            return Object.assign({}, state, { address: action.address })

        case types.GET_LOCATION_DETAIL_ERROR:
            return Object.assign({}, state, { error: action.message })

        case types.GET_CITIES_SUCCESS:
            return Object.assign({}, state, { cities: action.cities })

        case types.GET_CITIES_ERROR:
            return Object.assign({}, state, { error: action.message })

        case types.GET_DISTRICT_SUCCESS:
            return Object.assign({}, state, { districts: action.districts })

        case types.GET_DISTRICT_ERROR:
            return Object.assign({}, state, { error: action.message })

        case types.SET_SELECTED_CITY:
            return Object.assign({}, state, { selectedCity: action.cityId })

        case types.SET_SELECTED_DISTRICT:
            return Object.assign({}, state, { selectedDistrict: action.districtId })

        default:
            return state
    }
}

function getAQIStatus(air) {
    if (air >= 0 && air <= 50) {
        return 'good'
    } else if (air >= 51 && air <= 100) {
        return 'moderate'
    } else if (air >= 101 && air <= 150) {
        return 'sensitive'
    } else if (air >= 151 && air <= 200) {
        return 'unhealthy'
    } else if (air >= 201 && air <= 300) {
        return 'very-unhealthy'
    } else {
        return 'hazardous'
    }
}