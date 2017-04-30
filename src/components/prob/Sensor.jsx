import React, { Component, PropTypes } from 'react'

class Sensor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            value: 0
        }
    }

    componentDidMount() {
        const { sensor } = this.props
        for (var name in sensor) {
            this.setState({
                name: name,
                value: sensor[name]
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { sensor } = this.props
        for (var name in sensor) {
            this.setState({
                name: name,
                value: sensor[name]
            })
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.name}</td>
                <td>{this.state.value}</td>
            </tr>
        )
    }
}

Sensor.propTypes = {}

export default Sensor