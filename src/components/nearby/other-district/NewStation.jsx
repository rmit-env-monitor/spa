import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Row, Col, Table } from 'react-bootstrap'

import { getCities } from '../../../actions/nearbyAction'
import * as actions from '../../../actions/nearbyAction'

class NewStation extends Component {
    componentDidMount() {
        this.props.dispatch(getCities())
    }

    render() {
        const { show, closeModal, citiesList, districtsList, newStationsList } = this.props

        return (
            <Modal show={show} bsSize="large">
                <Modal.Header>
                    <Modal.Title>Add new station</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col xs={6}>
                            <select className="form-control measurement" onChange={e => this.loadDistricts(e)}>
                                <option value="">Choose city</option>
                                {
                                    citiesList.map((value, key) =>
                                        <option key={key} value={key}>{value}</option>
                                    )
                                }
                            </select>
                        </Col>
                        <Col xs={6}>
                            <select className="form-control measurement" onChange={e => this.loadDistrictDevices(e)}>
                                <option value="">Choose district</option>
                                {
                                    districtsList.map((value, key) =>
                                        <option key={key} value={key}>{value}</option>
                                    )
                                }
                            </select>
                        </Col>
                    </Row>
                    <Row id="new-station-list">
                        <Col xs={12}>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        newStationsList.map((station, key) =>
                                            <tr key={key}>
                                                <td>{station.name}</td>
                                                <td>122 Nam Kỳ Khởi Nghĩa, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam</td>
                                                <td>
                                                    <Button bsStyle="primary" onClick={() => this.addNewDevice(key)}>Select</Button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <a href="javascript:void(0)" onClick={closeModal}>Close</a>
                </Modal.Footer>
            </Modal>
        )
    }

    loadDistricts(e) {
        const { dispatch, citiesList } = this.props
        dispatch(actions.setSelectedCity(e.target.value))
        dispatch(actions.getDistrictOfCity(citiesList[e.target.value]))
    }

    loadDistrictDevices(e) {
        const { dispatch, citiesList, districtsList, selectedCity } = this.props
        dispatch(actions.setSelectedDistrict(e.target.value))
        dispatch(actions.getDistrictDeviceList(citiesList[selectedCity], districtsList[e.target.value]))
    }

    addNewDevice(index) {
        const { dispatch, newStationsList, closeModal } = this.props
        dispatch(actions.addNewDevice(newStationsList[index]))
        closeModal()
    }
}

NewStation.propTypes = {

}

export default NewStation