import * as types from '../actions/actionTypes'

export default function measurementReducer(state = {
    no: 0,
    so2: 0,
    pm: 0,
    o3: 0,
    sound: 0,
    address: '',
    aqhi: 0
}, action) {
    switch (action.type) {
        case types.GET_AIR_DATA_SUCCESS:
            return Object.assign({}, state, {
                no: action.air.no, so2: action.air.so2, aqhi: 10,
                pm: action.air.pm, o3: action.air.o3, sound: action.air.sound
            })

        case types.GET_LOCATION_DETAIL_SUCCESS:
            return Object.assign({}, state, { address: action.address })

        case types.GET_LOCATION_DETAIL_ERROR:
            return Object.assign({}, state, { address: action.message })

        default:
            return state
    }
}