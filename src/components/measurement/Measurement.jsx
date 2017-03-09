import React, { Component, PropTypes } from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'

import * as actions from '../../actions/measurementAction'
import Header from '../shared/Header.jsx'
import StatusBar from './StatusBar.jsx'

class Measurement extends Component {
    componentWillMount() {
        const { socket, dispatch } = this.props

        socket.on('sendAirData', (data) => {
            dispatch(actions.getAirData(data))
            dispatch(actions.getCurrentLocationDetail(data))
        })
    }

    render() {
        const { reducer, location } = this.props

        return (
            <div>
                <Header location={location.pathname} />
                <div className="container">
                    <h2>Real-time measurement</h2>
                    <h4>Current position: {reducer.address}</h4>
                    <br />
                    <Row>
                        <StatusBar color={'progress-bar progress-bar-danger'} name={'AQHI'} data={reducer.aqhi} />
                        <StatusBar color={'progress-bar progress-bar-success'} name={'NO/NO2'} data={reducer.no} />
                        <StatusBar color={'progress-bar progress-bar-info'} name={'SO2'} data={reducer.so2} />
                        <StatusBar color={'progress-bar progress-bar-warning'} name={'PM2.5/PM10'} data={reducer.pm} />
                        <StatusBar color={'progress-bar progress-bar-danger'} name={'O3'} data={reducer.o3} />
                        <StatusBar color={'progress-bar progress-bar-warning'} name={'Sound'} data={reducer.sound} />                        
                    </Row>
                </div>
            </div>
        )
    }
}

Measurement.propTypes = {}

function select(state) {
    return {
        reducer: state.measurementReducer
    }
}

export default connect(select)(socketConnect(Measurement))