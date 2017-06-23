import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'
import { Col, Row } from 'react-bootstrap'

import * as actions from '../../actions/nearbyAction'

import Header from '../shared/Header.jsx'
import CurrentDistrict from './CurrentDistrict.jsx'
import AppDownload from './AppDownload.jsx'
import Device from '../measurement/Device.jsx'

class Nearby extends Component {
    componentDidMount() {
        const { dispatch, reducer, socket } = this.props
        if (reducer.city === null)
            navigator.geolocation.getCurrentPosition(position => {
                dispatch(
                    actions.getCurrentCityDistrictNearbyCurrentDevice(position.coords.latitude, position.coords.longitude)
                )
            })
            
        socket.on(reducer.nearestDevice._id, record => {
            dispatch(actions.updateNearestDevice(record))
        })
    }

    render() {
        const { location, reducer, socket, dispatch } = this.props

        return (
            <div>
                <Header location={location.pathname} />

                <div className="container-fluid">
                    <Row>
                        <CurrentDistrict socket={socket} dispatch={dispatch} reducer={reducer} nearestDevice={reducer.nearestDevice}
                            detailedDeviceShowed={reducer.detailedDeviceShowed} summaryMd={6} detailMd={6} allMd={6} />

                        <Col xs={3} id="nearest-air-detail" className={reducer.detailedDeviceShowed ? "" : "collapse"}>
                            <Device device={reducer.nearestDevice} />
                        </Col>

                        <div id="collapse-button">
                            <a onClick={() => this.collapseExpandPane()} href="javascript:void(0)">
                                <span id="collapse-icon"
                                    className={reducer.detailedDeviceShowed ? 'glyphicon glyphicon-chevron-left' : 'glyphicon glyphicon-chevron-right'}>
                                </span>
                            </a>
                        </div>

                        <Col xs={3} id="app-download">
                            <AppDownload />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    collapseExpandPane() {
        const { reducer, dispatch } = this.props
        reducer.detailedDeviceShowed ?
            dispatch(actions.updateDeviceDetailShowed(false)) : dispatch(actions.updateDeviceDetailShowed(true))
    }
}

function select(state) {
    return { reducer: state.nearbyReducer }
}

export default connect(select)(socketConnect(Nearby))