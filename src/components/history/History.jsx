import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../shared/Header.jsx";
import Filter from "./Filter.jsx";
import Chart from "./Chart.jsx";
import Footer from "../shared/Footer.jsx";

class History extends Component {
  render() {
    const { reducer } = this.props;

    return (
      <React.Fragment>
        <Header location={location.pathname} />
        <div className="c-history">
          <Filter />
        </div>
        <div className="container-fluid">
          {reducer.aqiHistory.length > 0 ? (
            <div>
              <Chart history={reducer.aqiHistory[0]} type="AQI" />
              <Chart history={reducer.aqiHistory[1]} type="PM 2.5" />
              <Chart history={reducer.aqiHistory[2]} type="PM 10" />
            </div>
          ) : null}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

function select(state) {
  return { reducer: state.historyReducer };
}

export default connect(select)(History);
