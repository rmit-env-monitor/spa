import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Row, Col } from 'react-bootstrap'

class NewStation extends Component {
    componentDidMount() {
        const { dispatch } = this.props

    }

    render() {
        const { show, closeModal } = this.props

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add new station</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <select className="form-control measurement">
                        <option value="">Choose district</option>
                    </select>
                </Modal.Body>

                <Modal.Footer>
                    <a href="javascript:void(0)" onClick={closeModal}>Close</a>
                </Modal.Footer>
            </Modal>
        )
    }
}

NewStation.propTypes = {

}

export default NewStation