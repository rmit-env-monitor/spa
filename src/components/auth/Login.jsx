import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Control, Form, Errors } from 'react-redux-form'
import Loader from 'react-loader'
import { Redirect } from 'react-router-dom'

import * as authAction from '../../actions/authAction'
import clearLocalStorage from '../../utilities/clearLocalStorage'
import options from '../../utilities/spinOptions'
import { changeSpinLoaded } from '../../actions/authAction'

import Header from '../shared/Header.jsx'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { redirectToMain: false }
    }

    componentWillMount() {
        clearLocalStorage()
        this.props.dispatch({ type: 'RESET' })
    }

    render() {
        const { auth, location } = this.props
        const required = val => val && val.length

        if (this.state.redirectToMain) return <Redirect to="/" />

        return (
            <div>
                <Header location={location.pathname} />
                <Form
                    model="deep.login"
                    onSubmit={val => this.handleLoginSubmit(val)}
                    className="login-form"
                >
                    <h2 className="form-signin-heading">LOGIN</h2>
                    <Errors className="alert alert-danger" model="deep.login" show="touched" />

                    <Control.text
                        model=".username"
                        maxLength="50"
                        className="form-control"
                        placeholder="Username"
                        validators={{ required }}
                        validateOn="change"
                    />
                    <Errors className="text-danger"
                        model=".username"
                        messages={{ required: "Username is required!" }}
                        show="touched"
                    />
                    <br />
                    <Control
                        type="password"
                        model=".password"
                        maxLength="50"
                        className="form-control"
                        placeholder="Password"
                        validators={{ required }}
                        validateOn="change"
                    />
                    <Errors
                        className="text-danger"
                        model=".password"
                        messages={{ required: "Password is required!" }}
                        show="touched"
                    />
                    <br />

                    <Button bsStyle="primary" bsSize="large" block type="submit">
                        Login
                    </Button>
                </Form>
                <Loader
                    loaded={auth.loaded}
                    options={options}
                    className="spinner"
                />
            </div>
        )
    }

    changeSpin(loaded) {
        const { dispatch } = this.props
        dispatch(changeSpinLoaded(loaded))
    }

    redirectToMain() {
        this.changeSpin(true)
        this.setState({ redirectToMain: true })
    }

    handleLoginSubmit(value) {
        const { dispatch } = this.props
        this.changeSpin(false)
        dispatch(authAction.authenticate(value, l => this.changeSpin(l), () => this.redirectToMain()))
    }
}

function select(state) {
    return { auth: state.authReducer }
}

export default connect(select)(Login)