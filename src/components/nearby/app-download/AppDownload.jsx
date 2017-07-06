import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class AppDownload extends Component {
    render() {
        return (
            <div>
                <div id="app-download-title">
                    <h4>DOWNLOAD</h4>
                    <h4>APPLICATION</h4>
                </div>
                <p id="app-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna neque. Sed sed lorem eget diam semper congue. Fusce iaculis risus in nibh mattis feugiat. Aenean id commodo nulla.
                </p>
                <div>
                    <a href="#">
                        <img src="/images/google-play-badge.png" alt="Google Play" className="play-store-logo" />
                    </a>
                    <br />
                    <a href="#">
                        <img src="/images/download-on-the-app-store.png" alt="App Store" className="app-store-logo" />
                    </a>
                </div>
            </div>
        )
    }
}

export default AppDownload