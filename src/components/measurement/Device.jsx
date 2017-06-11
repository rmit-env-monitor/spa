import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import StatusBar from './StatusBar.jsx'
import { updateNDeviceLatestRecord } from '../../actions/nearbyAction'
import { updateMDeviceLatestRecord } from '../../actions/measurementAction'

class Device extends Component {
    render() {
        const { device } = this.props

        return (
            <div className="device-detail">
                {
                    device.record.noAQI ?
                        <div>
                            <StatusBar name={'NO'} color={this.getAQIStatus(device.record.noAQI)} data={device.record.noAQI} />
                            <StatusBar name={'SO2'} color={this.getAQIStatus(device.record.so2AQI)} data={device.record.so2AQI} />
                            <StatusBar name={'PM2.5'} color={this.getAQIStatus(device.record.pm25AQI)} data={device.record.pm25AQI} />
                            <StatusBar name={'PM10'} color={this.getAQIStatus(device.record.pm10AQI)} data={device.record.pm10AQI} />
                            <StatusBar name={'O3'} color={this.getAQIStatus(device.record.o3AQI)} data={device.record.o3AQI} />
                            <StatusBar name={'CO'} color={this.getAQIStatus(device.record.coAQI)} data={device.record.coAQI} />
                        </div>
                        :
                        <div className="device-loading"><h1><i className="fa fa-cog fa-spin fa-2x"></i></h1></div>
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
}

Device.propTypes = {}

export default Device