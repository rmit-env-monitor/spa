import * as types from '../actions/actionTypes'

export default function nearbyReducer(state = {
    city: null,
    district: null,
    devices: [],
    nearby: [],
    isShowed: false,
    loaded: false,
    message: null
}, action) {
    switch (action.type) {
        case types.GET_CURRENT_CITY_DISTRICT_AND_NEARBY_SUCCESS:
            return Object.assign({}, state, {
                city: action.city, district: action.district, nearby: action.nearby
            })

        case types.UPDATE_SHOW_COLOR_INDEX:
            return Object.assign({}, state, { isShowed: action.isShowed })

        case types.GET_DEVICES_IN_CURRENT_DISTRICT_SUCCESS:
            return Object.assign({}, state, { devices: action.devices, loaded: true })

        default:
            return state
    }
}