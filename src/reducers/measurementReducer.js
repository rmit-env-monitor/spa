import * as types from '../actions/actionTypes'

export default function measurementReducer(state = {
    cities: [],
    districts: [],
    devices: [],
    records: [],
    selectedCity: null,
    selectedDistrict: null,
    isShowed: false,
    error: null
}, action) {
    switch (action.type) {
        case types.GET_DEVICE_LIST_SUCCESS:
            return Object.assign({}, state, { devices: action.devices })

        case types.GET_DEVICE_LIST_ERROR:
            return Object.assign({}, state, { error: action.message })

        case types.GET_LATEST_DEVICE_RECORD_SUCCESS:
            var newRecords = state.records
            newRecords.push(action.record[0])
            return Object.assign({}, state, { records: newRecords })

        case types.GET_LATEST_DEVICE_RECORD_ERROR:
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

        case types.UPDATE_MEASUREMENT_DEVICE_LATEST_RECORD:
            const newDevices = state.devices
            newDevices[action.id].record = action.record
            return Object.assign({}, state, { devices: newDevices })

        case types.UPDATE_SHOW_COLOR_INDEX:
            return Object.assign({}, state, { isShowed: action.isShowed })

        default:
            return state
    }
}