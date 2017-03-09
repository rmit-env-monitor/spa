import baseService from './baseService'
import * as constants from '../utilities/constants'

export function getAllLocationRecords(getLocationRecordsSuccess, getLocationRecordsError, updateMap) {
    return (dispatch) => {
        return baseService(constants.GET_METHOD, '/api/web/locations')
            .then((res) => {
                dispatch(getLocationRecordsSuccess(res.data))
                updateMap()
            })
            .catch((err) => {
                dispatch(getLocationRecordsError(err))
            })
    }
}