import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

class StatusBar extends Component {
  render() {
    return (
      <Row className="status-bar">
        <Col xs={3}>
          <p>{this.props.name}</p>
        </Col>
        <Col xs={9}>
          <div className="progress">
            <div
              className={"progress-bar " + this.props.color}
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>{this.props.data}</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

StatusBar.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default StatusBar;
