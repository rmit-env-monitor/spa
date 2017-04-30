import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import GoogleMapsLoader from 'google-maps'
import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'

import configureStore from './store'
import { BASE_URL } from './utilities/constants'
import checkTokenAvailability from './utilities/checkTokenAvailability'

import Map from './components/Map.jsx'
import Measurement from './components/measurement/Measurement.jsx'
import Nearby from './components/nearby/Nearby.jsx'
import History from './components/History.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import ProB from './components/prob/ProB.jsx'

const store = configureStore()
const socket = io.connect(BASE_URL)

GoogleMapsLoader.KEY = 'AIzaSyDzU42Qi6au_pg_ip8QHMuqxk9qa1iWPJQ'
GoogleMapsLoader.LIBRARIES = ['visualization']

render(
    <Provider store={store}>
        <SocketProvider socket={socket}>
            <Router history={browserHistory}>
                <Route path="/" onEnter={checkTokenAvailability} component={Nearby} />
                <Route path="measurement" onEnter={checkTokenAvailability} component={Measurement} />
                <Route path="map" onEnter={checkTokenAvailability} component={Map} />
                <Route path="history" onEnter={checkTokenAvailability} component={History} />
                <Route path="prob" onEnter={checkTokenAvailability} component={ProB} />
                <Route path="login" component={Login} />
                <Route path="register" component={Register} />
            </Router>
        </SocketProvider>
    </Provider>,

    document.getElementById('app')
)