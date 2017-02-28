import * as types from '../actions/actionTypes'

export default function mapReducer(state = {
    locations: [
        {
            center: { lat: 41.878, lng: -87.629 },
            population: 2714856
        },
        {
            center: { lat: 40.714, lng: -74.005 },
            population: 8405837
        },
        {
            center: { lat: 34.052, lng: -118.243 },
            population: 3857799
        },
        {
            center: { lat: 49.25, lng: -123.1 },
            population: 603502
        }
    ]
}, action) {
    switch (action.type) {
        case types.SHOW_ALL_LOCATIONS:
            return state

        default:
            return state
    }
}