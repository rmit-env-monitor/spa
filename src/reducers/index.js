import { combineReducers } from 'redux'

import mapReducer from './mapReducer'
import authReducer from './authReducer'
import formReducer from './formReducer'
import measurementReducer from './measurementReducer'
import nearbyReducer from './nearbyReducer'

const mainReducer = combineReducers({
    mapReducer,
    authReducer,
    measurementReducer,
    nearbyReducer,
    deep: formReducer
})

export default mainReducer