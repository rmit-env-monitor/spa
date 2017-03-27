import React, { Component, PropTypes } from 'react'
import { Row, Button, FormControl, Breadcrumb } from 'react-bootstrap'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'

import * as actions from '../../actions/measurementAction'
import Header from '../shared/Header.jsx'
import StatusBar from './StatusBar.jsx'
import DistrictDevice from './DistrictDevice.jsx'

class Measurement extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(actions.getCities())        
    }

    render() {
        const { reducer, location, socket } = this.props

        return (
            <div>
                <Header location={location.pathname} />
                <div className="container measurement-form">
                    <select className="form-control measurement" onChange={e => this.handleCityChange(e)}>
                        <option value="">Choose city</option>
                        {
                            reducer.cities.map((value, key) =>
                                <option key={key} value={key}>{value}</option>
                            )
                        }
                    </select>
                    <div className="space"></div>
                    <select className="form-control measurement" onChange={e => this.handleDistrictChange(e)}>
                        <option value="">Choose district</option>
                        {
                            reducer.districts.map((value, key) =>
                                <option key={key} value={key}>{value}</option>
                            )
                        }
                    </select>
                </div>
                <hr />
                <DistrictDevice socket={socket} reducer={reducer} />
            </div>
        )
    }

    handleCityChange(e) {
        const { dispatch, reducer } = this.props
        dispatch(actions.setSelectedCity(e.target.value))
        dispatch(actions.getDistrictOfCity(reducer.cities[e.target.value]))
    }

    handleDistrictChange(e) {
        const { dispatch, reducer } = this.props
        dispatch(actions.setSelectedDistrict(e.target.value))
        dispatch(actions.getDeviceList(reducer.cities[reducer.selectedCity], reducer.districts[e.target.value]))
    }
}

Measurement.propTypes = {}

function select(state) {
    return {
        reducer: state.measurementReducer
    }
}

export default connect(select)(socketConnect(Measurement))