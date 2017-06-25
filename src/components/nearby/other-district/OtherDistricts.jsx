import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

import District from './District.jsx'
import NewDistrictButton from './NewDistrictButton.jsx'

class OtherDistricts extends Component {
    render() {
        const { devices, district } = this.props
        return (
            <Col xs={9} id="other-districts">
                {
                    devices.map(device =>
                        <District key={device._id} device={device} district={district} />
                    )
                }
                <NewDistrictButton />
            </Col>
        )
    }
}

OtherDistricts.propTypes = {
    devices: PropTypes.array.isRequired
}

export default OtherDistricts