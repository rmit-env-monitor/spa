import React, { Component, PropTypes } from 'react'
import Loader from 'react-loader'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'
import { Button, Col, Row } from 'react-bootstrap'

import * as actions from '../../actions/nearbyAction'
import options from '../../utilities/spinOptions'

import Header from '../shared/Header.jsx'
import District from './District.jsx'
import CurrentDistrict from './CurrentDistrict.jsx'
import ColorIndexModal from '../measurement/ColorIndexModal.jsx'
import Map from './Map.jsx'

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
                    <h3 id="nearby-city">City: {reducer.city} - District: {reducer.district}</h3>
                    <div className="space"></div>
                    <Button onClick={() => this.updateColorIndexModal(true)} className={'nearby-index'}>Color Index</Button>
                    <Row>
                        <Col md={6}>
                            <CurrentDistrict socket={socket} dispatch={dispatch} devices={reducer.devices} />
                        </Col>
                        <Col md={6}>
                            <Map />
                        </Col>
                    </Row>
                    <hr />

                    <h3>Nearby districts</h3>
                    <Row>
                        {
                            reducer.nearby.map((district, key) =>
                                <Col md={4} key={key}>
                                    <District pane={key} socket={socket} city={reducer.city} district={district} />
                                </Col>
                            )
                        }
                    </Row>
                </div>

                <ColorIndexModal reducer={reducer} updateColorIndexModal={state => this.updateColorIndexModal(state)} />
                <Loader loaded={reducer.loaded} options={options} className="spinner" />
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