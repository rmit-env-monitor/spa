import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row, Panel } from 'react-bootstrap'
import Map from './Map.jsx'

class CurrentDistrictDetail extends Component {
    render() {
        const { aqi, temp, detailMd } = this.props

        return (
            <Col md={detailMd}>
                <Row id="aqi-temp">
                    <Col md={6} className="aqi">
                        <div className="aqi-area">
                            <div className="border">
                                <img src="/images/pollution.png" alt="Status face" id="pollution" />
                                <p className="value"><strong>{aqi}</strong></p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="temp">
                        <div className="temp-area">
                            <div className="border">
                                <img src="/images/temperature.png" alt="Status face" id="temp" />
                                {
                                    temp ? <p className="value"><strong>{temp} Cel</strong></p> : <p></p>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <div id="nearby-map-area">
                    <Map />
                </div>
            </Col>
        )
    }
}

CurrentDistrictDetail.propTypes = {

}

export default CurrentDistrictDetail