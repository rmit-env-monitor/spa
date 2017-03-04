import React, { Component, PropTypes } from 'react'

import Header from './shared/Header.jsx'

class History extends Component {
    render() {
        return (
            <div>
                <Header />
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