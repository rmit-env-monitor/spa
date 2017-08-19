import React, { Component } from 'react'
import { Row, Col, InputGroup, FormControl, Glyphicon } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <Row>
                        <Col xs={4} className="general">
                            <h3 className="app-title">Environmental Monitor</h3>
                            <p className="link">HOME</p>
                            <p className="link">ABOUT</p>
                            <p className="link">CONTACT</p>
                        </Col>
                        <Col xs={5} className="contact">
                            <h4>Contact Us</h4>
                            <p>me@brandingname.com</p>
                            <p>
                                69 abc, def street, district 7.
                                <br />
                                HCMC
                            </p>
                            <p>(+84) 123 456 789</p>
                        </Col>
                        <Col xs={3} className="subcribe">
                            <h4>Subcribe now</h4>
                            <p className="description">
                                Sign up if you want to get
                                <br />
                                notifications
                            </p>
                            <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Addon>
                                    <Glyphicon glyph="send" />
                                </InputGroup.Addon>
                            </InputGroup>
                            <p className="copyright">Copyrights © 2017. All Rights Reserved</p>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer