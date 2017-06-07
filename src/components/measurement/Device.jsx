import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import StatusBar from './StatusBar.jsx'
import { updateNDeviceLatestRecord } from '../../actions/nearbyAction'
import { updateMDeviceLatestRecord } from '../../actions/measurementAction'

class Device extends Component {
    // componentDidMount() {
    //     const { socket, device, id, dispatch, page } = this.props

    //     socket.on(device._id, data => {
    //         if (page === 'nearby') dispatch(updateNDeviceLatestRecord(id, data))
    //         else dispatch(updateMDeviceLatestRecord(id, data))
    //     })
    // }

    render() {
        const { device } = this.props

        return (
            <div className="device-detail">
                <StatusBar name={'NO'} color={this.getAQIStatus(device.record.noAQI || 0)} data={device.record.noAQI || 0} />
                <StatusBar name={'SO2'} color={this.getAQIStatus(device.record.so2AQI || 0)} data={device.record.so2AQI || 0} />
                <StatusBar name={'PM2.5'} color={this.getAQIStatus(device.record.pm25AQI || 0)} data={device.record.pm25AQI || 0} />
                <StatusBar name={'PM10'} color={this.getAQIStatus(device.record.pm10AQI || 0)} data={device.record.pm10AQI || 0} />
                <StatusBar name={'O3'} color={this.getAQIStatus(device.record.o3AQI || 0)} data={device.record.o3AQI || 0} />
                <StatusBar name={'CO'} color={this.getAQIStatus(device.record.coAQI || 0)} data={device.record.coAQI || 0} />
            </div>
        )
    }

    // componentWillUnmount() {
    //     const { socket, device } = this.props
    //     socket.off(device._id)
    // }

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