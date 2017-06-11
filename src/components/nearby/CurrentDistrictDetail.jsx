import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row, Panel } from 'react-bootstrap'
import Map from './Map.jsx'

class CurrentDistrictDetail extends Component {
    render() {
        const { aqi, temp, detailMd } = this.props

        return (
            <Col md={detailMd} id="nearest-detail">
                <Row id="aqi-temp">
                    <Col md={6} className="aqi">
                        <div className="aqi-area">
                            <div className="border">
                                <img src="/images/pollution.png" alt="Status face" id="pollution" />
                                {
                                    aqi ? <p className="value"><strong>{aqi}</strong></p> : <p className="value"><i className="fa fa-cog fa-spin fa-2x"></i></p>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="temp">
                        <div className="temp-area">
                            <div className="border">
                                <img src="/images/temperature.png" alt="Status face" id="temp" />
                                {
                                    temp ? <p className="value"><strong>{temp} Cel</strong></p> : <p className="value"><i className="fa fa-cog fa-spin fa-2x"></i></p>
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