import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

class NewDistrictButton extends Component {
    render() {
        const { openModal } = this.props
        return (
            <a href="javascript:void(0)" onClick={openModal}>
                <Col xs={3} id="add-district-button">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </Col>
            </a>
        )
    }
}

NewDistrictButton.propTypes = {

}

export default NewDistrictButton