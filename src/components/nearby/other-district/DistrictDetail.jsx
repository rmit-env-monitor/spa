import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Row, Col } from 'react-bootstrap'

import StatusBar from '../../measurement/StatusBar.jsx'
import { getAQIStatus } from '../../../utilities/getColor'

class DistrictDetail extends Component {
    render() {
        const { show, closeModal, device, district } = this.props

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{district} - {device.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col xs={6}>
                            <StatusBar name={'NO'} color={getAQIStatus(device.record.aqiValues.no2AQI)} data={device.record.aqiValues.no2AQI} />
                            <StatusBar name={'SO2'} color={getAQIStatus(device.record.aqiValues.so2AQI)} data={device.record.aqiValues.so2AQI} />
                            <StatusBar name={'PM2.5'} color={getAQIStatus(device.record.aqiValues.pm25AQI)} data={device.record.aqiValues.pm25AQI} />
                            <StatusBar name={'PM10'} color={getAQIStatus(device.record.aqiValues.pm10AQI)} data={device.record.aqiValues.pm10AQI} />
                            <StatusBar name={'O3'} color={getAQIStatus(device.record.aqiValues.o3AQI)} data={device.record.aqiValues.o3AQI} />
                            <StatusBar name={'CO'} color={getAQIStatus(device.record.aqiValues.coAQI)} data={device.record.aqiValues.coAQI} />
                        </Col>
                        <Col xs={6}>
                            <StatusBar name={'UV'} color={'good'} data={device.record.uv} />
                            <StatusBar name={'Humidity'} color={'good'} data={device.record.humidity} />
                            <StatusBar name={'Sound'} color={'good'} data={device.record.sound} />
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <a href="javascript:void(0)" onClick={closeModal}>Close</a>
                </Modal.Footer>
            </Modal>
        )
    }
}

DistrictDetail.propTypes = {

}

export default DistrictDetail