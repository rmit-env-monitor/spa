import * as types from '../actions/actionTypes'

export default function authReducer(state = {
    loaded: false
}, action) {
    switch (action.type) {
        case types.UPDATE_SPIN_STATE:
            state.loaded = action.loaded
            return state

        default:
            return state
    }
}