import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Panel } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";

import Map from "./Map.jsx";

class CurrentDistrictDetail extends Component {
  render() {
    const { aqi, temp, detailMd, lat, lng, dispatch } = this.props;

    return (
      <Col xs={detailMd} id="nearest-detail">
        <Row id="aqi-temp">
          <Col xs={6} className="aqi">
            <ReactPlaceholder
              type="round"
              ready={aqi ? true : false}
              showLoadingAnimation={true}
              style={{ width: 128, height: 128 }}
            >
              <div className="aqi-area">
                <div className="border">
                  <img
                    src="/images/pollution.png"
                    alt="Status face"
                    id="pollution"
                  />
                  <p className="value">
                    <strong>{aqi}</strong>
                  </p>
                </div>
              </div>
            </ReactPlaceholder>
          </Col>
          <Col xs={6} className="temp">
            <ReactPlaceholder
              type="round"
              ready={temp ? true : false}
              showLoadingAnimation={true}
              style={{ width: 128, height: 128 }}
            >
              <div className="temp-area">
                <div className="border">
                  <img
                    src="/images/temperature.png"
                    alt="Status face"
                    id="temp"
                  />
                  <p className="value">
                    <strong>{temp} Cel</strong>
                  </p>
                </div>
              </div>
            </ReactPlaceholder>
          </Col>
        </Row>
        <div id="nearby-map-area">
          <Map aqi={aqi} lat={lat} lng={lng} dispatch={dispatch} />
        </div>
      </Col>
    );
  }
}

CurrentDistrictDetail.propTypes = {
  aqi: PropTypes.number,
  temp: PropTypes.number,
  detailMd: PropTypes.number.isRequired,
  dispatch: PropTypes.any.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number
};

export default CurrentDistrictDetail;
