import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import * as actions from '../../actions/measurementAction'
import Device from './Device.jsx'

class DistrictDevice extends Component {
    render() {
        const { devices, socket } = this.props
        return (
            <div className="container-fluid">
                <Row>
                    {
                        devices.map(value =>
                            <Device key={value._id} device={value} socket={socket} />
                        )
                    }
                </Row>
            </div>
        )
    }
}

DistrictDevice.propTypes = {}

export default DistrictDevice