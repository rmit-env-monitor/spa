import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import StatusBar from './StatusBar.jsx'
import { getLatestDeviceRecord } from '../../services/measurementService'

class Device extends Component {
    constructor(props) {
        super(props)
        this.state = {
            no: 0,
            so2: 0,
            pm2: 0,
            pm10: 0,
            o3: 0,
            co: 0,
            sound: 0
        }
    }

    componentDidMount() {
        const { socket, device } = this.props

        getLatestDeviceRecord(device._id).then(res => {
            if (res.data.length > 0) this.editState(res.data[0])
        })

        socket.on(device._id, data => {
            this.editStateRealTime(data)
        })
    }

    render() {
        return (
            <Col className="device" md={this.props.md}>
                <h3>Device: {this.props.device.name}</h3>
                <Row>
                    <StatusBar name={'NO'} color={this.getAQIStatus(this.state.no)} data={this.state.no} />
                    <StatusBar name={'SO2'} color={this.getAQIStatus(this.state.so2)} data={this.state.so2} />
                    <StatusBar name={'PM2.5'} color={this.getAQIStatus(this.state.pm2)} data={this.state.pm2} />
                    <StatusBar name={'PM10'} color={this.getAQIStatus(this.state.pm10)} data={this.state.pm10} />
                    <StatusBar name={'O3'} color={this.getAQIStatus(this.state.o3)} data={this.state.o3} />
                    <StatusBar name={'CO'} color={this.getAQIStatus(this.state.co)} data={this.state.co} />
                </Row>                
            </Col>
        )
    }

    componentWillUnmount() {
        const { socket, device } = this.props
        socket.off(device._id)
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

    editState(data) {
        this.setState({
            no: data.no,
            so2: data.so2,
            pm2: data.pm2,
            pm10: data.pm10,
            o3: data.o3,
            co: data.co,
            sound: data.sound
        })
    }
    
    editStateRealTime(data) {
        this.setState({
            no: data[2],
            so2: data[3],
            pm2: data[4],
            pm10: data[5],
            o3: data[6],
            co: data[7],
            sound: data[8],
            uv: data[9]
        })
    }
}

Device.propTypes = {}

export default Device