import React, { Component, PropTypes } from 'react'
import { Button, Col, Panel } from 'react-bootstrap'

import * as services from '../../services/nearbyService'
import Device from '../measurement/Device.jsx'

class CurrentDistrict extends Component {
    render() {
        const { socket, devices } = this.props
        return (
            <div>
                <Panel collapsible defaultExpanded header={'Your location'}>
                    {
                        devices.map(value =>
                            <Device key={value._id} md={6} device={value} socket={socket} />
                        )
                    }
                </Panel>
            </div>
        )
    }
}

CurrentDistrict.propTypes = {
    devices: PropTypes.array.isRequired,
    socket: PropTypes.any.isRequired
}

export default CurrentDistrict