import * as types from '../actions/actionTypes'

export default function nearbyReducer(state = {
    city: null,
    district: null,
    districts: [],
    nearestDevice: { record: { aqiValues: {} } },
    devices: [],
    nearby: [],
    detailedDeviceShowed: true,
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
            if (deviceLength < 2) {
                return Object.assign({}, state, { nearestDevice: action.devices[0], devices: [] })
            } else {
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

        default:
            return state
    }
}