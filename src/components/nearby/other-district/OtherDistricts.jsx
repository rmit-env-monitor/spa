import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

import District from './District.jsx'
import NewDistrictButton from './NewDistrictButton.jsx'
import NewStation from './NewStation.jsx'

class OtherDistricts extends Component {
    constructor(props) {
        super(props)
        this.state = { newDistrictShowed: false }
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    render() {
        const { devices, district, dispatch, socket } = this.props
        return (
            <Col xs={9} id="other-districts">
                {
                    devices.map((device, index) =>
                        <District key={device._id} device={device} district={district} socket={socket} index={index} dispatch={dispatch} />
                    )
                }
                <NewDistrictButton openModal={this.openModal} />

                <NewStation show={this.state.newDistrictShowed} closeModal={this.closeModal} dispatch={dispatch} />
            </Col>
        )
    }

    closeModal() {
        this.setState({ newDistrictShowed: false })
    }

    openModal() {
        this.setState({ newDistrictShowed: true })
    }
}

OtherDistricts.propTypes = {
    devices: PropTypes.array.isRequired
}

export default OtherDistricts