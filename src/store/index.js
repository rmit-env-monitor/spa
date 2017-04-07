import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reduxReset from 'redux-reset'

import mainReducer from '../reducers'

const logger = createLogger()

const createAppStore = compose(
	applyMiddleware(thunkMiddleware, logger),
	reduxReset()
)(createStore)

export default function configureStore() {
	return createAppStore(mainReducer)
}