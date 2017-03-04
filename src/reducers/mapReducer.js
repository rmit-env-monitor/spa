import * as types from '../actions/actionTypes'

export default function mapReducer(state = {
    locations: [],
    map: null
}, action) {
    switch (action.type) {
        case types.SHOW_ALL_LOCATIONS:
            return state

        default:
            return state
    }
}