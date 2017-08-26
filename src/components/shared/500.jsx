import React, { Component } from 'react'

class Error500 extends Component {
    render() {
        return (
            <div className="container">
                <h2>Internal server error</h2>
                <h3>Ooops. We have some issues in the server. Please check back later</h3>
            </div>
        )
    }
}

export default Error500