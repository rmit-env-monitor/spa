import React, { Component, PropTypes } from 'react'
import { socketConnect } from 'socket.io-react'

import Sensor from './Sensor.jsx'

class ProB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            co: 0,
            temp: 0,
            no2: 0,
            o3: 0,
            noise: 0,
            dust: 0,
            gps: '0,0'
        }
    }

    componentDidMount() {
        const { socket } = this.props
        socket.on('data', data => {
            this.setState({
                co: data.co,
                temp: data.temp,
                no2: data.no2,
                o3: data.o3,
                noise: data.noise,
                dust: data.dust,
                gps: data.gps
            })
        })
    }


    render() {
        return (
            <div className="container">
                <h2>ProB course</h2>
                <hr />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Sensor</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Sensor name={'CO'} value={this.state.co} />
                        <Sensor name={'Temperature'} value={this.state.temp} />
                        <Sensor name={'NO2'} value={this.state.no2} />
                        <Sensor name={'O3'} value={this.state.o3} />
                        <Sensor name={'Noise'} value={this.state.noise} />
                        <Sensor name={'Dust'} value={this.state.dust} />
                        <Sensor name={'GPS'} value={this.state.gps} />
                    </tbody>
                </table>
            </div>
        )
    }
}

ProB.propTypes = {}

export default socketConnect(ProB)