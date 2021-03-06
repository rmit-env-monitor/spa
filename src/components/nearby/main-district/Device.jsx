import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";

import { getAQIStatus } from "../../../utilities/getColor";

import StatusBar from "./StatusBar.jsx";

class Device extends Component {
  render() {
    const { device } = this.props;

    return (
      <div className="device-detail">
        <ReactPlaceholder
          type="text"
          rows={3}
          ready={device.record.aqiValues.no2AQI ? true : false}
          showLoadingAnimation={true}
        >
          <div>
            <StatusBar
              name={"NO"}
              color={getAQIStatus(device.record.aqiValues.no2AQI)}
              data={device.record.aqiValues.no2AQI}
            />
            <StatusBar
              name={"SO2"}
              color={getAQIStatus(device.record.aqiValues.so2AQI)}
              data={device.record.aqiValues.so2AQI}
            />
            <StatusBar
              name={"PM2.5"}
              color={getAQIStatus(device.record.aqiValues.pm25AQI)}
              data={device.record.aqiValues.pm25AQI}
            />
            <StatusBar
              name={"PM10"}
              color={getAQIStatus(device.record.aqiValues.pm10AQI)}
              data={device.record.aqiValues.pm10AQI}
            />
            <StatusBar
              name={"O3"}
              color={getAQIStatus(device.record.aqiValues.o3AQI)}
              data={device.record.aqiValues.o3AQI}
            />
            <StatusBar
              name={"CO"}
              color={getAQIStatus(device.record.aqiValues.coAQI)}
              data={device.record.aqiValues.coAQI}
            />
            <hr />
            <StatusBar name={"UV"} color={"good"} data={device.record.uv} />
            <StatusBar
              name={"Humidity"}
              color={"good"}
              data={device.record.humidity}
            />
            <StatusBar
              name={"Sound"}
              color={"good"}
              data={device.record.sound}
            />
          </div>
        </ReactPlaceholder>
      </div>
    );
  }
}

Device.propTypes = {
  device: PropTypes.object.isRequired
};

export default Device;
