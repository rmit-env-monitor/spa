import React, { Component, PropTypes } from 'react'
import { Col, Row } from 'react-bootstrap'

import * as actions from '../../actions/nearbyAction'
import * as services from '../../services/nearbyService'

import Device from '../measurement/Device.jsx'
import AQIPrediction from './AQIPrediction.jsx'
import CurrentDistrictDetail from './CurrentDistrictDetail.jsx'

import convertUnixTimestamp from '../../utilities/unixTimestampConversion'

class CurrentDistrict extends Component {
    render() {
        const { reducer, nearestDevice, summaryMd, detailMd, allMd } = this.props
        return (
            <Col xs={allMd} id="nearest-device">
                <Col xs={summaryMd} id="summary">
                    {
                        reducer.district ? <h3 id="district-title">{reducer.city} - {reducer.district}</h3>
                            : <h3 id="district-title">Detecting your location <i className="fa fa-cog fa-spin"></i></h3>
                    }
                    <h4>{nearestDevice.name}</h4>
                    <Row id="district-stt">
                        <Col xs={4}>
                            {
                                nearestDevice.record.aqiValues.aqi ?
                                    <img src={this.getFaceColor(nearestDevice.record.aqiValues.aqi)} alt="Status face" id="nearest-status" /> : ''
                            }
                        </Col>
                        <Col xs={8}>
                            {
                                nearestDevice.record.aqiValues.aqi ?
                                    <div>
                                        <p id="aqi-summary"><strong>{this.getAQIStatus(nearestDevice.record.aqiValues.aqi).toUpperCase()}</strong></p>
                                        <p><strong>Last Updated:</strong></p>
                                        <p>{convertUnixTimestamp(nearestDevice.record.utcDateTime)}</p>
                                    </div>
                                    :
                                    <div>
                                        <p id="aqi-summary"><i className="fa fa-cog fa-spin fa-4x"></i></p>
                                    </div>
                            }
                        </Col>
                    </Row>

                    <AQIPrediction />
                </Col>

                <CurrentDistrictDetail aqi={nearestDevice.record.aqiValues.aqi} temp={nearestDevice.record.temperature} detailMd={detailMd} />
            </Col>
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
    socket: PropTypes.any.isRequired,
    dispatch: PropTypes.any.isRequired,
    reducer: PropTypes.any.isRequired,
    nearestDevice: PropTypes.object.isRequired,
    detailedDeviceShowed: PropTypes.bool.isRequired,
    summaryMd: PropTypes.number.isRequired,
    detailMd: PropTypes.number.isRequired,
    allMd: PropTypes.number.isRequired
}

export default CurrentDistrict