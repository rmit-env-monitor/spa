import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'
import { Button, Col, Row } from 'react-bootstrap'

import * as actions from '../../actions/nearbyAction'

import Header from '../shared/Header.jsx'
import CurrentDistrict from './CurrentDistrict.jsx'
import AppDownload from './AppDownload.jsx'

class Nearby extends Component {
    componentDidMount() {
        const { dispatch, reducer } = this.props
        if (reducer.city === null)
            navigator.geolocation.getCurrentPosition(position => {
                dispatch(
                    actions.getCurrentCityDistrictNearbyCurrentDevice(position.coords.latitude, position.coords.longitude)
                )
            })
    }

    render() {
        const { location, reducer, socket, dispatch } = this.props

        return (
            <div>
                <Header location={location.pathname} />

                <div className="container-fluid">
                    <Row>
                        {
                            reducer.detailedDeviceShowed ?
                                <CurrentDistrict socket={socket} dispatch={dispatch} reducer={reducer} nearestDevice={reducer.nearestDevice}
                                    detailedDeviceShowed={reducer.detailedDeviceShowed} summaryMd={4} detailMd={4} allMd={9} />
                                :
                                <CurrentDistrict socket={socket} dispatch={dispatch} reducer={reducer} nearestDevice={reducer.nearestDevice}
                                    detailedDeviceShowed={reducer.detailedDeviceShowed} summaryMd={6} detailMd={6} allMd={6} />
                        }
                        <Col md={3} id="app-download">
                            <AppDownload />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

Nearby.propTypes = {}

function select(state) {
    return {
        reducer: state.nearbyReducer
    }
}

export default connect(select)(socketConnect(Nearby))