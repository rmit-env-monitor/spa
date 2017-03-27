import React, { Component, PropTypes } from 'react'
import { Col } from 'react-bootstrap'

class StatusBar extends Component {
    render() {
        return (
            <Col md={4}>
                <p><b>{this.props.name}</b></p>
                <div className="progress">
                    <div className={'progress-bar ' + this.props.color} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <span>{this.props.data}</span>
                    </div>
                </div>
            </Col>
        )
    }
}

StatusBar.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired
}

export default StatusBar