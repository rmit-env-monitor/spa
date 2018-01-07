import React, { Component } from "react";

import Header from "../shared/Header.jsx";
import Filter from "./Filter.jsx";

class History extends Component {
  render() {
    return (
      <React.Fragment>
        <Header location={location.pathname} />
        <Filter />
      </React.Fragment>
    );
  }
}

export default History;
