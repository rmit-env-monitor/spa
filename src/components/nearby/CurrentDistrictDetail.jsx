import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row, Panel } from 'react-bootstrap'

class CurrentDistrictDetail extends Component {
    render() {
        const {aqi, temp} = this.props

        return (
            <Col md={4}>
                <Row id="aqi-temp">
                    <Col className="aqi-area" md={6}>
                        <img src="/images/pollution.png" alt="Status face" id="pollution" />
                        <p className="value">{aqi}</p>
                    </Col>
                    <Col className="temp-area" md={6}>
                        <img src="/images/temperature.png" alt="Status face" id="temp" />
                        <p className="value">{temp}</p>
                    </Col>
                </Row>
            </Col>
        )
    }
}

CurrentDistrictDetail.propTypes = {

}

export default CurrentDistrictDetail