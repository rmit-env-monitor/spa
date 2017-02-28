import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import GoogleMapsLoader from 'google-maps'

import configureStore from './store'
import { BASE_URL } from './utilities/constants'

import Home from './components/Home.jsx'

const store = configureStore()

GoogleMapsLoader.KEY = 'AIzaSyDzU42Qi6au_pg_ip8QHMuqxk9qa1iWPJQ'
GoogleMapsLoader.LIBRARIES = ['visualization']

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Home} />
        </Router>
    </Provider>,

    document.getElementById('app')
)