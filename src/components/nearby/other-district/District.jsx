import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Carousel, Modal } from 'react-bootstrap'

import DistrictDetail from './DistrictDetail.jsx'

class District extends Component {
    constructor(props) {
        super(props)
        this.state = { districtDetailShowed: false }
        this.closeModal = this.closeModal.bind(this)
    }

    render() {
        const { device, district } = this.props
        return (
            <Col xs={3} className="other-district">
                <h4>{district} - {device.name}</h4>
                <Carousel interval={0}>
                    <Carousel.Item>
                        <a href="javascript:void(0)" onClick={() => this.toggleModal()}>
                            <div className="status-img">
                                <div className="aqi-area">
                                    <div className="border">
                                        <img src="/images/pollution.png" alt="Status face" id="pollution" />
                                        <p className="value"><strong>{device.record.aqiValues.aqi}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="javascript:void(0)" onClick={() => this.toggleModal()}>
                            <div className="status-img">
                                <div className="temp-area">
                                    <div className="border">
                                        <img src="/images/temperature.png" alt="Status face" id="temp" />
                                        <p className="value"><strong>{device.record.temperature}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Carousel.Item>
                </Carousel>
                <a href="javascript:void(0)"><span className="glyphicon glyphicon-option-horizontal"></span></a>

                <DistrictDetail show={this.state.districtDetailShowed} closeModal={this.closeModal} device={device} district={district} />
            </Col>
        )
    }

    toggleModal() {
        this.setState({
            districtDetailShowed: this.state.districtDetailShowed ? false : true
        })
    }

    closeModal() {
        this.setState({
            districtDetailShowed: false
        })
    }
}

District.propTypes = {

}

export default District