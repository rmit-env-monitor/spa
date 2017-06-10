import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'
import { Button, Col, Row } from 'react-bootstrap'

import * as actions from '../../actions/nearbyAction'
import options from '../../utilities/spinOptions'

import Header from '../shared/Header.jsx'
import District from './District.jsx'
import CurrentDistrict from './CurrentDistrict.jsx'
import ColorIndexModal from '../measurement/ColorIndexModal.jsx'
import DistrictRanking from './DistrictRanking.jsx'

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
                                <Col md={9} id="nearest-device">
                                    <CurrentDistrict socket={socket} dispatch={dispatch} reducer={reducer} nearestDevice={reducer.nearestDevice}
                                        detailedDeviceShowed={reducer.detailedDeviceShowed} summaryMd={4} detailMd={4} />
                                    <div id="collapse-button">
                                        <a onClick={() => this.collapseExpandPane()} href="#"><span id="collapse-icon" className="glyphicon glyphicon-chevron-left"></span></a>
                                    </div>
                                </Col>
                                :
                                <div>
                                    <Col md={6} id="nearest-device">
                                        <CurrentDistrict socket={socket} dispatch={dispatch} reducer={reducer} nearestDevice={reducer.nearestDevice}
                                            detailedDeviceShowed={reducer.detailedDeviceShowed} summaryMd={6} detailMd={6} />
                                        <div id="collapse-button">
                                            <a onClick={() => this.collapseExpandPane()} href="#"><span id="collapse-icon" className="glyphicon glyphicon-chevron-right"></span></a>
                                        </div>
                                    </Col>
                                    <Col md={3}></Col>
                                </div>
                        }
                    </Row>
                </div>
            </div>
        )
    }

    updateColorIndexModal(state) {
        this.props.dispatch(actions.updateShowColorIndex(state))
    }

    collapseExpandPane() {
        const { reducer, dispatch } = this.props
        reducer.detailedDeviceShowed ?
            dispatch(actions.updateDeviceDetailShowed(false)) : dispatch(actions.updateDeviceDetailShowed(true))
    }
}

Nearby.propTypes = {}

function select(state) {
    return {
        reducer: state.nearbyReducer
    }
}

export default connect(select)(socketConnect(Nearby))