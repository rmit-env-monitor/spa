import React, { Component, PropTypes } from 'react'

import Header from './shared/Header.jsx'

class History extends Component {
    render() {
        const { location } = this.props

        return (
            <div>
                <Header location={location.pathname} />
                <div className="container">
                    <h2>History</h2>
                </div>
            </div>
        )
    }
}

History.propTypes = {

}

export default History