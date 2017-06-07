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
                    {/*{
                        reducer.city ? <h3 id="nearby-city">City: {reducer.city} - District: {reducer.district}</h3> : <h3 id="nearby-city">Detecting your location...</h3>
                    }
                    <div className="space"></div>*/}
                    {/*<Button onClick={() => this.updateColorIndexModal(true)} className={'nearby-index'}>Color Index</Button>*/}
                    <Row>
                        <Col md={9} id="nearest-device">
                            <CurrentDistrict socket={socket} dispatch={dispatch} reducer={reducer} nearestDevice={reducer.nearestDevice} />
                        </Col>
                    </Row>
                </div>

                <ColorIndexModal reducer={reducer} updateColorIndexModal={state => this.updateColorIndexModal(state)} />
            </div>
        )
    }

    updateColorIndexModal(state) {
        this.props.dispatch(actions.updateShowColorIndex(state))
    }
}

Nearby.propTypes = {}

function select(state) {
    return {
        reducer: state.nearbyReducer
    }
}

export default connect(select)(socketConnect(Nearby))