import * as types from '../actions/actionTypes'

export default function mapReducer(state = {
    locations: [],
    error: null,
    map: null
}, action) {
    switch (action.type) {
        case types.GET_LOCATION_RECORDS_SUCCESS:
            return Object.assign({}, state, { locations: action.records })

        case types.GET_LOCATION_RECORDS_SUCCESS:
            return Object.assign({}, state, { error: action.message })

        case types.STORE_MAP_DATA:
            return Object.assign({}, state, { map: action.map })

        default:
            return state
    }
}