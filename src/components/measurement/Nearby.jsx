import React, { Component, PropTypes } from 'react'

import Header from '../shared/Header.jsx'

class Nearby extends Component {
    render() {
        const { location } = this.props

        return (
            <div>
                <Header location={location.pathname} />
                
                <div className="container">
                    <h2>Nearby</h2>
                </div>
            </div>
        )
    }
}

Nearby.propTypes = {

}

export default Nearby