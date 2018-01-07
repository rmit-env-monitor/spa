import React, { Component } from "react";
import PropTypes from "prop-types";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";

import {
  saveFromAndToDate,
  getCitiesList,
  getDistrictsList,
  saveSelectedCity,
  saveSelectedDistrict
} from "../../actions/historyAction";

class Filter extends Component {
  constructor(params) {
    super(params);
    this.state = {
      focusedInput: null
    };
  }

  componentDidMount() {
    this.props.dispatch(getCitiesList());
  }

  render() {
    const { reducer } = this.props;

    return (
      <div className="container c-query-bar">
        <div className="c-query-bar__item">
          <select
            name="city"
            id="city"
            className="form-control"
            onChange={e => this.onCitySelect(e.target.value)}
          >
            <option value="">Choose city</option>
            {reducer.cities.map(v => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="c-query-bar__item">
          <select
            name="district"
            id="district"
            className="form-control"
            onChange={e => this.onDistrictSelect(e.target.value)}
          >
            <option value="">Choose district</option>
            {reducer.districts.map(v => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="c-query-bar__item">
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

  onCitySelect(city) {
    const { dispatch } = this.props;
    dispatch(saveSelectedCity(city));
    dispatch(getDistrictsList(city));
  }

  onDistrictSelect(district) {
    this.props.dispatch(saveSelectedDistrict(district));
  }
}

Filter.propTypes = {};

function select(state) {
  return { reducer: state.historyReducer };
}

export default connect(select)(Filter);
