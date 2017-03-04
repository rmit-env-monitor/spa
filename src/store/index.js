import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import mainReducer from '../reducers'

const logger = createLogger()

const createAppStore = compose(
	applyMiddleware(thunkMiddleware, logger)
)(createStore)

export default function configureStore() {
	return createAppStore(mainReducer)
}