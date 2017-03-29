import React, { Component, PropTypes } from 'react'
import { Row, Button, Col, FormControl, Modal } from 'react-bootstrap'

import StatusBar from './StatusBar.jsx'

class ColorIndexModal extends Component {
    render() {
        return (
            <Modal bsSize="small" show={this.props.reducer.isShowed} onHide={() => this.props.updateColorIndexModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Color Index</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <b>Good</b>
                        </Col>
                        <Col md={6}>
                            <div className="progress-bar good" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </Col>

                        <Col md={6}>
                            <b>Moderate</b>
                        </Col>
                        <Col md={6}>
                            <div className="progress-bar moderate" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </Col>

                        <Col md={6}>
                            <b>Sensitive</b>
                        </Col>
                        <Col md={6}>
                            <div className="progress-bar sensitive" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </Col>

                        <Col md={6}>
                            <b>Unhealthy</b>
                        </Col>
                        <Col md={6}>
                            <div className="progress-bar unhealthy" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </Col>

                        <Col md={6}>
                            <b>Very unhealthy</b>
                        </Col>
                        <Col md={6}>
                            <div className="progress-bar very-unhealthy" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </Col>

                        <Col md={6}>
                            <b>Hazardous</b>
                        </Col>
                        <Col md={6}>
                            <div className="progress-bar hazardous" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.updateColorIndexModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

ColorIndexModal.propTypes = {}

export default ColorIndexModal