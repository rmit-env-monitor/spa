import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import GoogleMapsLoader from 'google-maps'

import configureStore from './store'
import { BASE_URL } from './utilities/constants'
import checkTokenAvailability from './utilities/checkTokenAvailability'

import Home from './components/Home.jsx'
import Measurement from './components/Measurement.jsx'
import History from './components/History.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'

const store = configureStore()

GoogleMapsLoader.KEY = 'AIzaSyDzU42Qi6au_pg_ip8QHMuqxk9qa1iWPJQ'
GoogleMapsLoader.LIBRARIES = ['visualization']

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" onEnter={checkTokenAvailability} component={Home} />            
            <Route path="measurement" onEnter={checkTokenAvailability} component={Measurement} />
            <Route path="history" onEnter={checkTokenAvailability} component={History} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
        </Router>
    </Provider>,

    document.getElementById('app')
)