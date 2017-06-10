import React, { Component, PropTypes } from 'react'
import { Button, Col, Row, Panel } from 'react-bootstrap'

import * as services from '../../services/nearbyService'
import Device from '../measurement/Device.jsx'
import AQIPrediction from './AQIPrediction.jsx'
import CurrentDistrictDetail from './CurrentDistrictDetail.jsx'

class CurrentDistrict extends Component {
    render() {
        const { socket, reducer, nearestDevice, dispatch, summaryMd, detailMd } = this.props
        return (
            <div>
                <Col md={summaryMd} id="summary">
                    {
                        reducer.district ? <h3 id="district-title">{reducer.city + ' - ' + reducer.district}</h3>
                            : <h3 id="district-title">Detecting your location...</h3>
                    }
                    <Row>
                        <Col md={4}>
                            {
                                nearestDevice.record.aqi ?
                                    <img src={this.getFaceColor(nearestDevice.record.aqi)} alt="Status face" id="nearest-status" />
                                    :
                                    <div></div>
                            }
                        </Col>
                        <Col md={8}>
                            {
                                nearestDevice.record.aqi ?
                                    <div>
                                        <p>AIR QUALITY</p>
                                        <p id="aqi-summary"><strong>{this.getAQIStatus(nearestDevice.record.aqi).toUpperCase()}</strong></p>
                                        <p>Last Updated: 14:00</p>
                                    </div>
                                    :
                                    <p></p>
                            }
                        </Col>
                    </Row>
                    <AQIPrediction />
                </Col>
                <CurrentDistrictDetail aqi={nearestDevice.record.aqi} temp={nearestDevice.record.temperature} detailMd={detailMd} />
                {
                    reducer.detailedDeviceShowed ? <Col md={4}><Device device={nearestDevice} /></Col> : <div></div>
                }
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

    getFaceColor(air) {
        if (air >= 0 && air <= 50) {
            return '/images/green-face.png'
        } else if (air >= 51 && air <= 100) {
            return '/images/yellow-face.png'
        } else if (air >= 101 && air <= 150) {
            return '/images/orange-face.png'
        } else if (air >= 151 && air <= 200) {
            return '/images/red-face.png'
        } else if (air >= 201 && air <= 300) {
            return '/images/purple-face.png'
        } else {
            return '/images/maroon-face.png'
        }
    }
}

CurrentDistrict.propTypes = {
    // devices: PropTypes.array.isRequired,
    nearestDevice: PropTypes.object.isRequired,
    socket: PropTypes.any.isRequired
}

export default CurrentDistrict