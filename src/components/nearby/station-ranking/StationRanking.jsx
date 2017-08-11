import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'

class StationRanking extends Component {
    render() {
        const aaa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        return (
            <Col xs={3} className="station-ranking">
                <div className="title">
                    <p>STATION RANKING</p>
                </div>
                <div className="rank">
                    {
                        aaa.map((a, b) =>
                            <Row>
                                <Col xs={6}>
                                    <p className="station-name">Name</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="station-value">Value</p>
                                </Col>
                            </Row>
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