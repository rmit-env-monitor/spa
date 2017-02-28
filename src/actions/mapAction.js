import * as types from './actionTypes'

export function showAllLocations(google) {
    return {
        type: types.SHOW_ALL_LOCATIONS,
        google: google
    }
}