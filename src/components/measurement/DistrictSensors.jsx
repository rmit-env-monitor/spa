import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'
import { Link } from 'react-router'
import { Row } from 'react-bootstrap'

import Header from '../shared/Header.jsx'

class DistrictSensors extends Component {
    render() {
        const { reducer } = this.props
        return (
            <div>
                <Header location={location.pathname} />
                <div className="container">
                    <br />
                    <Link to={'/'} className="btn btn-primary"><span className="glyphicon glyphicon-backward"></span> Back to home</Link>
                    <h2>City: {reducer.cities[reducer.selectedCity]} - District: {reducer.districts[reducer.selectedDistrict]}</h2>
                    <Row>
                    </Row>
                </div>
            </div>
        )
    }
}

DistrictSensors.propTypes = {}

function select(state) {
    return {
        reducer: state.measurementReducer
    }
}

export default connect(select)(socketConnect(DistrictSensors))