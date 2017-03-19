import React, { Component, PropTypes } from 'react'
import { Row, Button, FormControl, Breadcrumb } from 'react-bootstrap'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'

import * as actions from '../../actions/measurementAction'
import Header from '../shared/Header.jsx'
import StatusBar from './StatusBar.jsx'

class Measurement extends Component {
    componentDidMount() {
        const { socket, dispatch } = this.props

        dispatch(actions.getCities())
        socket.on('sendAirData', data => {
            dispatch(actions.getAirData(data))
            dispatch(actions.getCurrentLocationDetail(data))
        })
    }

    render() {
        const { reducer, location } = this.props

        return (
            <div>
                <Header location={location.pathname} />
                <div className="container">
                    <div className="measurement-form">
                        <h2>Choose a city</h2>
                        <select className="form-control" onChange={e => this.handleCityChange(e)}>
                            <option value="">Choose city</option>
                            {
                                reducer.cities.map((value, key) =>
                                    <option key={key} value={key}>{value}</option>
                                )
                            }
                        </select>

                        <h2>Choose a district</h2>
                        <select className="form-control" onChange={e => this.handleDistrictChange(e)}>
                            <option value="">Choose district</option>
                            {
                                reducer.districts.map((value, key) =>
                                    <option key={key} value={key}>{value}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.props.socket.off('sendAirData')
    }

    handleCityChange(e) {
        const { dispatch, reducer } = this.props
        dispatch(actions.setSelectedCity(e.target.value))
        dispatch(actions.getDistrictOfCity(reducer.cities[e.target.value]))
    }

    handleDistrictChange(e) {
        const { dispatch, router } = this.props
        dispatch(actions.setSelectedDistrict(e.target.value))
        router.push('/sensors')
    }
}

Measurement.propTypes = {}

function select(state) {
    return {
        reducer: state.measurementReducer
    }
}

export default connect(select)(socketConnect(Measurement))