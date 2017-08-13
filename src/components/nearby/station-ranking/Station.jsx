import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'

import { getAQIStatusForText } from '../../../utilities/getColor'

class Station extends Component {
    render() {
        const { index, station } = this.props

        return (
            <Row>
                <Col xs={2}>
                    <p className="station-name">{index}</p>
                </Col>
                <Col xs={8}>
                    <p className="station-name">{station.name}</p>
                </Col>
                <Col xs={2}>
                    <p className={getAQIStatusForText(station.aqi) + " station-value"}>{station.aqi}</p>
                </Col>
            </Row>
        )
    }
}

Station.propTypes = {

}

export default Station