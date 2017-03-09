import { combineReducers } from 'redux'

import mapReducer from './mapReducer'
import authReducer from './authReducer'
import formReducer from './formReducer'
import measurementReducer from './measurementReducer'

const mainReducer = combineReducers({
    mapReducer,
    authReducer,
    measurementReducer,
    deep: formReducer
})

export default mainReducer