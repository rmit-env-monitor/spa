import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chart as GoogleChart } from "react-google-charts";

class Chart extends Component {
  render() {
    const { history, type } = this.props;

    return (
      <GoogleChart
        chartType="ColumnChart"
        data={history}
        options={{
          title: type,
          hAxis: { title: "Date" },
          legend: "none"
        }}
        graph_id={`${type}-chart`}
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}

Chart.propTypes = {
  history: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

export default Chart;
