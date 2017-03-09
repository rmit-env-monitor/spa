import axios from 'axios'

export function callGoogleAPIForLocation(lat, lng, getCurrentLocationDetailSuccess, getCurrentLocationDetailError) {
    const URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true'

    return (dispatch) => {
        return axios.get(URL)
            .then((res) => {
                dispatch(getCurrentLocationDetailSuccess(res.data.results[0].formatted_address))
            })
            .catch((err) => {
                dispatch(getCurrentLocationDetailError(err))
            })
    }
}