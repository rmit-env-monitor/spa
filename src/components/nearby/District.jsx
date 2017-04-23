import React, { Component, PropTypes } from 'react'
import { Button, Modal, Panel } from 'react-bootstrap'

import * as services from '../../services/nearbyService'
import DistrictDevice from '../measurement/DistrictDevice.jsx'

class District extends Component {
    constructor(props) {
        super(props)
        this.state = { devices: [] }
    }

    componentDidMount() {
        const { city, district } = this.props
        services.getOneDevice(city, district).then(res => {
            this.setState({
                devices: res.data
            })
        })
    }

    render() {
        const { district, socket } = this.props
        return (
            <Panel defaultExpanded header={district}>
                <DistrictDevice socket={socket} md={12} devices={this.state.devices} />
            </Panel>
        )
    }
}

District.propTypes = {
    district: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    pane: PropTypes.number.isRequired,
    socket: PropTypes.any.isRequired
}

export default District