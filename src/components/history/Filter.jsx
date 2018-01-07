import React, { Component } from "react";
import PropTypes from "prop-types";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { connect } from "react-redux";

import { saveFromAndToDate } from "../../actions/historyAction";

class Filter extends Component {
  constructor(params) {
    super(params);
    this.state = {
      focusedInput: null
    };
  }

  render() {
    const { reducer } = this.props;

    return (
      <div className="container">
        <DateRangePicker
          onDatesChange={date => this.onDatesChange(date)}
          onFocusChange={(startDate, endDate) =>
            this.onFocusChange(startDate, endDate)
          }
          startDateId=""
          endDateId=""
          startDate={reducer.chosenFromDate}
          endDate={reducer.chosenToDate}
          startDatePlaceholderText="From"
          endDatePlaceholderText="To"
          focusedInput={this.state.focusedInput}
        />
      </div>
    );
  }

  onDatesChange(date) {
    this.props.dispatch(saveFromAndToDate(date));
  }

  onFocusChange(startDate, endDate) {
    this.setState({
      focusedInput: startDate ? startDate : endDate
    });
  }
}

Filter.propTypes = {};

function select(state) {
  return { reducer: state.historyReducer };
}

export default connect(select)(Filter);
