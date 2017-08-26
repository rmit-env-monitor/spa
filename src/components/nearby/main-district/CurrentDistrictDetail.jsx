import React, { Component, PropTypes } from 'react'
import { Button, Col, Row, Panel } from 'react-bootstrap'
import Map from './Map.jsx'

class CurrentDistrictDetail extends Component {
    render() {
        const { aqi, temp, detailMd, lat, lng, dispatch } = this.props

        return (
            <Col xs={detailMd} id="nearest-detail">
                <Row id="aqi-temp">
                    <Col xs={6} className="aqi">
                        <div className="aqi-area">
                            <div className="border">
                                <img src="/images/pollution.png" alt="Status face" id="pollution" />
                                {
                                    aqi ? <p className="value"><strong>{aqi}</strong></p> : <p className="value"><i className="fa fa-circle-o-notch fa-spin fa-2x"></i></p>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className="temp">
                        <div className="temp-area">
                            <div className="border">
                                <img src="/images/temperature.png" alt="Status face" id="temp" />
                                {
                                    temp ? <p className="value"><strong>{temp} Cel</strong></p> : <p className="value"><i className="fa fa-circle-o-notch fa-spin fa-2x"></i></p>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <div id="nearby-map-area">
                    <Map aqi={aqi} lat={lat} lng={lng} dispatch={dispatch} />
                </div>
            </Col>
        )
    }
}

CurrentDistrictDetail.propTypes = {
    aqi: PropTypes.number,
    temp: PropTypes.number,
    detailMd: PropTypes.number.isRequired
}

export default CurrentDistrictDetail