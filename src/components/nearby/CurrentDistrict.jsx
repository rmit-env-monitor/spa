import React, { Component, PropTypes } from 'react'
import { Button, Col, Row, Panel } from 'react-bootstrap'

import * as services from '../../services/nearbyService'
import Device from '../measurement/Device.jsx'
import AQIPrediction from './AQIPrediction.jsx'
import CurrentDistrictDetail from './CurrentDistrictDetail.jsx'

class CurrentDistrict extends Component {
    render() {
        const { socket, reducer, nearestDevice, dispatch } = this.props
        return (
            <div>
                <Col md={4} id="summary">
                    {reducer.district ? <h3 id="district-title">{reducer.city + ' - ' + reducer.district}</h3> : <h3 id="district-title">Detecting your location...</h3>}
                    <Row>
                        <Col md={4}>
                            <img src="/images/face-with-i.png" alt="Status face" id="nearest-status" />
                        </Col>
                        <Col md={8}>
                            <p>AIR QUALITY</p>
                            {
                                nearestDevice.record.aqi ?
                                    <p id="aqi-summary"><strong>{this.getAQIStatus(nearestDevice.record.aqi).toUpperCase()}</strong></p> : <p></p>
                            }
                            {nearestDevice.record.aqi ? <p>Last Updated: 14:00</p> : <p></p>}
                        </Col>
                    </Row>
                    <AQIPrediction />
                </Col>
                <CurrentDistrictDetail aqi={nearestDevice.record.aqi} temp={nearestDevice.record.temperature} />
            </div>
        )
    }

    getAQIStatus(air) {
        if (air >= 0 && air <= 50) {
            return 'good'
        } else if (air >= 51 && air <= 100) {
            return 'moderate'
        } else if (air >= 101 && air <= 150) {
            return 'sensitive'
        } else if (air >= 151 && air <= 200) {
            return 'unhealthy'
        } else if (air >= 201 && air <= 300) {
            return 'very-unhealthy'
        } else {
            return 'hazardous'
        }
    }
}

CurrentDistrict.propTypes = {
    // devices: PropTypes.array.isRequired,
    nearestDevice: PropTypes.object.isRequired,
    socket: PropTypes.any.isRequired
}

export default CurrentDistrict