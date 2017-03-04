import { combineReducers } from 'redux'

import mapReducer from './mapReducer'
import formReducer from './formReducer'

const mainReducer = combineReducers({    
    mapReducer,
    deep: formReducer
})

export default mainReducer