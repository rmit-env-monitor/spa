import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Carousel, Modal } from 'react-bootstrap'

import DistrictDetail from './DistrictDetail.jsx'
import { updateOtherDevice, removeDevice, swapDefaultDevice } from '../../../actions/nearbyAction'

class District extends Component {
    constructor(props) {
        super(props)
        this.state = { districtDetailShowed: false }
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        const { socket, device, dispatch, index } = this.props
        socket.on(device._id, value => {
            dispatch(updateOtherDevice(value, index))
        })
    }

    render() {
        const { device } = this.props
        return (
            <Col xs={3} className="other-district">
                <h4>{device.district}</h4>
                <Carousel interval={0}>
                    <Carousel.Item>
                        <div className="status-img">
                            <div className="aqi-area">
                                <div className="border">
                                    <img src="/images/pollution.png" alt="Status face" className="pollution" />
                                    <p className="value"><strong>{device.record.aqiValues.aqi}</strong></p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="status-img">
                            <div className="temp-area">
                                <div className="border">
                                    <img src="/images/temperature.png" alt="Status face" className="temp" />
                                    <p className="value"><strong>{device.record.temperature}</strong></p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="device-actions">
                    <a href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-option-horizontal"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="javascript:void(0)" onClick={() => this.removeDevice()}>Remove</a></li>
                        <li><a href="javascript:void(0)" onClick={() => this.toggleModal()}>View detail</a></li>
                        <li><a href="javascript:void(0)" onClick={() => this.makeDefaultDevice()}>Make default</a></li>
                    </ul>
                </div>

                <DistrictDetail show={this.state.districtDetailShowed} closeModal={this.closeModal} device={device} district={device.district} />
            </Col>
        )
    }

    componentWillUnmount() {
        const { socket, device } = this.props
        socket.off(device._id)
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

    removeDevice() {
        const { dispatch, index } = this.props
        dispatch(removeDevice(index))
    }

    makeDefaultDevice() {
        const { dispatch, index } = this.props
        dispatch(swapDefaultDevice(index))
    }
}

District.propTypes = {

}

export default District