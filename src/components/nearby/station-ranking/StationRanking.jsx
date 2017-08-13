import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'

import Station from './Station.jsx'
import { getStationRanking } from '../../../actions/nearbyAction'

class StationRanking extends Component {
    componentDidMount() {
        const { dispatch, city, deviceId } = this.props
        dispatch(getStationRanking(city, deviceId))
    }

    render() {
        return (
            <Col xs={3} className="station-ranking">
                <div className="title">
                    <p>STATION RANKING</p>
                </div>
                <div className="rank">
                    {
                        this.props.stations.map((station, index) =>
                            <Station key={index} station={station} index={index + 1} />
                        )
                    }
                </div>
            </Col>
        )
    }
}

StationRanking.propTypes = {
}

export default StationRanking