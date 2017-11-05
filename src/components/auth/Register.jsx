import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Control, Form, Errors } from 'react-redux-form'
import Loader from 'react-loader'
import { Redirect } from 'react-router-dom'

import * as authAction from '../../actions/authAction'
import options from '../../utilities/spinOptions'
import { changeSpinLoaded } from '../../actions/authAction'

import Header from '../shared/Header.jsx'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { redirectToMain: false }
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(changeSpinLoaded(true))
  }

  render() {
    const { auth, location } = this.props
    const usernameRequired = val => val && val.length
    const passwordRequired = val => val && val.length > 5

    if (this.state.redirectToMain) return <Redirect to="/" />

    return (
      <div>
        <Header location={location.pathname} />
        <Form
          model="deep.newAccount"
          onSubmit={(val) => this.handleRegister(val)}
          className="login-form"
          validators={{
            '': { passwordsMatch: (vals) => vals.retypePassword === vals.password }
          }}
        >
          <h2 className="login-form__title">REGISTER</h2>
          <Errors
            className="alert alert-danger login-form__alert_square"
            model="deep.newAccount"
            messages={{ passwordsMatch: "Retype password does not match" }}
            show="touched"
          />

          <Control.text
            model=".username"
            maxLength="50"
            className="form-control login-form__textbox_square"
            placeholder="Username"
            validators={{ usernameRequired }}
            validateOn="change"
          />
          <Errors
            className="text-danger login-form__alert-text"
            model=".username"
            messages={{ usernameRequired: "Username is required!" }}
            show="touched"
          />
          <br />

          <Control
            type="password"
            model=".password"
            maxLength="50"
            className="form-control login-form__textbox_square"
            placeholder="Password"
            validators={{ passwordRequired }}
            validateOn="change"
          />
          <Errors className="text-danger login-form__alert-text"
            model=".password"
            messages={{ passwordRequired: "Password must have more than 5 characters!" }}
            show="touched"
          />
          <br />

          <Control
            type="password"
            model=".retypePassword"
            maxLength="50"
            className="form-control login-form__textbox_square"
            placeholder="Retype password"
            validateOn="change"
          />
          <br />

          <Button bsStyle="primary" bsSize="large" block type="submit" className="login-form__submit-button">
            Create
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

  handleRegister(value) {
    const { dispatch } = this.props
    this.changeSpin(false)
    dispatch(authAction.register(value, l => this.changeSpin(l), () => this.redirectToMain()))
  }
}

function select(state) {
  return { auth: state.authReducer }
}

export default connect(select)(Register)