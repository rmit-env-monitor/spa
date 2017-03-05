import { combineReducers } from 'redux'

import mapReducer from './mapReducer'
import authReducer from './authReducer';
import formReducer from './formReducer'

const mainReducer = combineReducers({
    mapReducer,
    authReducer,
    deep: formReducer
})

export default mainReducer