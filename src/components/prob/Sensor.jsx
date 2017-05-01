import React, { Component, PropTypes } from 'react'

class Sensor extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.value}</td>
            </tr>
        )
    }
}

export default Sensor