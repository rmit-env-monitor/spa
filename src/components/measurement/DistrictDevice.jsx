import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import * as actions from '../../actions/measurementAction'
import Device from './Device.jsx'

class DistrictDevice extends Component {
    render() {
        const { devices, socket, md, dispatch } = this.props
        return (
            <div className="container-fluid">
                <Row>
                    {
                        devices.map((value, key) =>
                            <Device key={key} id={key} md={md} device={value} socket={socket} dispatch={dispatch} page={'measurement'} />
                        )
                    }
                </Row>
            </div>
        )
    }
}

DistrictDevice.propTypes = {}

export default DistrictDevice