import React, { Component, PropTypes } from 'react'
import { Button, Col, Panel } from 'react-bootstrap'

import * as services from '../../services/nearbyService'
import Device from '../measurement/Device.jsx'

class CurrentDistrict extends Component {
    render() {
        const { socket, devices, dispatch } = this.props
        return (
            <div>
                <Panel collapsible defaultExpanded header={'Your location'}>
                    {
                        devices.map((value, key) =>
                            <Device key={key} id={key} md={6} device={value} socket={socket} dispatch={dispatch} page={'nearby'} />
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