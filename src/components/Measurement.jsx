import React, { Component, PropTypes } from 'react'

import Header from './shared/Header.jsx'

class Measurement extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h2>Measurement</h2>
                </div>
            </div>
        )
    }
}

Measurement.propTypes = {

}

export default Measurement