import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Carousel } from 'react-bootstrap'

class District extends Component {
    render() {
        const { device, district } = this.props
        return (
            <Col xs={3} className="other-district">
                <h4>{district}</h4>
                <Carousel interval={0}>
                    <Carousel.Item>
                        <div className="status-img">
                            <div className="aqi-area">
                                <div className="border">
                                    <img src="/images/pollution.png" alt="Status face" id="pollution" />
                                    <p className="value"><strong>{device.record.aqiValues.aqi}</strong></p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="status-img">
                            <div className="temp-area">
                                <div className="border">
                                    <img src="/images/temperature.png" alt="Status face" id="temp" />
                                    <p className="value"><strong>{device.record.temperature}</strong></p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <a href="#">
                    <span className="glyphicon glyphicon-option-horizontal"></span>
                </a>
            </Col>
        )
    }
}

District.propTypes = {

}

export default District