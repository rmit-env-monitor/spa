import React, { Component, PropTypes } from 'react'
import { socketConnect } from 'socket.io-react'

import Sensor from './Sensor.jsx'

class ProB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sensors: []
        }
    }

    componentDidMount() {
        const { socket } = this.props
        socket.on('data', data => {
            this.setState({
                sensors: data
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
                        {
                            this.state.sensors.map((sensor, id) => (
                                <Sensor key={id} sensor={sensor} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

ProB.propTypes = {}

export default socketConnect(ProB)