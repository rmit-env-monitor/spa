import * as types from '../actions/actionTypes'

export default function nearbyReducer(state = {
    city: null,
    district: null,
    districts: [],
    nearestDevice: { record: { aqiValues: {} } },
    devices: [],
    nearby: [],
    detailedDeviceShowed: true,
    // For add new station //
    citiesList: [],
    selectedCity: null,
    districtsList: [],
    selectedDistrict: null,
    newStationsList: [],
    // For add new station //
    message: null
}, action) {
    switch (action.type) {
        case types.GET_CURRENT_CITY_DISTRICT_AND_NEARBY_SUCCESS:
            return Object.assign({}, state, {
                city: action.city, district: action.district, nearby: action.nearby
            })

        case types.UPDATE_NEARBY_DEVICE_LATEST_RECORD:
            const newDevices = state.devices
            newDevices[action.id].record = action.record
            return Object.assign({}, state, { devices: newDevices })

        case types.GET_DEVICES_IN_CURRENT_DISTRICT_SUCCESS:
            const deviceLength = action.devices.length
            if (deviceLength > 0 && deviceLength < 2) {
                return Object.assign({}, state, { nearestDevice: action.devices[0], devices: [] })
            } else if (deviceLength >= 2) {
                const newNearestDevice = action.devices[0]
                const newDevicesaction = action.devices.slice(1, deviceLength)
                return Object.assign({}, state, { nearestDevice: newNearestDevice, devices: newDevicesaction })
            }

        case types.SHOW_HIDE_DEVICE_DETAIL:
            return Object.assign({}, state, { detailedDeviceShowed: action.detailedDeviceShowed })

        case types.UPDATE_NEAREST_DEVICE_RECORD:
            const newNearestRecord = state.nearestDevice
            newNearestRecord.record = action.record
            return Object.assign({}, state, { nearestDevice: newNearestRecord })

        case types.UPDATE_OTHER_DISTRICT_RECORD:
            const newDistricts = state.districts
            newDistricts[action.index] = action.record
            return Object.assign({}, state, { districts: newDistricts })

        case types.GET_CITIES_SUCCESS:
            return Object.assign({}, state, { citiesList: action.cities })

        case types.GET_CITIES_ERROR:
            return Object.assign({}, state, { message: action.message })

        case types.SET_SELECTED_CITY:
            return Object.assign({}, state, { selectedCity: action.cityId })

        case types.GET_DISTRICT_SUCCESS:
            return Object.assign({}, state, { districtsList: action.districts })

        case types.GET_DISTRICT_ERROR:
            return Object.assign({}, state, { message: action.message })

        case types.SET_SELECTED_DISTRICT:
            return Object.assign({}, state, { selectedDistrict: action.districtId })

        case types.GET_DEVICE_LIST_SUCCESS:
            return Object.assign({}, state, { newStationsList: action.devices })

        case types.ADD_NEW_DEVICE:
            state.devices.push(action.device)
            return Object.assign({}, state, { devices: state.devices })

        case types.REMOVE_DEVICE:
            state.devices.splice(action.index, 1)
            return Object.assign({}, state, { devices: state.devices })
        default:
            return state
    }
}