import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row, Panel } from 'react-bootstrap'

class AQIPrediction extends Component {
    render() {
        return (
            <Row id="prediction">
                <Col md={4}>
                    <img src="/images/face.png" alt="Status face" id="nearest-status" />
                    <p className="future-day"><strong>FRI</strong></p>
                </Col>
                <Col md={4}>
                    <img src="/images/face.png" alt="Status face" id="nearest-status" />
                    <p className="future-day"><strong>SAT</strong></p>
                </Col>
                <Col md={4}>
                    <img src="/images/face.png" alt="Status face" id="nearest-status" />
                    <p className="future-day"><strong>SUN</strong></p>
                </Col>
            </Row>
        )
    }
}

AQIPrediction.propTypes = {

}

export default AQIPrediction