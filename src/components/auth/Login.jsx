import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Control, Form, Errors } from "react-redux-form";
import Loader from "react-loader";
import { Redirect } from "react-router-dom";
import { GoogleAPI, GoogleLogin } from "react-google-oauth";

import * as authAction from "../../actions/authAction";
import clearLocalStorage from "../../utilities/clearLocalStorage";
import options from "../../utilities/spinOptions";
import { changeSpinLoaded } from "../../actions/authAction";
import { GOOGLE_CLIENT_ID } from "../../utilities/constants";
import { SAVE_GOOGLE_USER_REQUESTED } from "../../actions/actionTypes";

import Header from "../shared/Header.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { redirectToMain: false };
  }

  componentWillMount() {
    clearLocalStorage();
    this.props.dispatch({ type: "RESET" });
  }

  render() {
    const { auth, location } = this.props;
    const required = val => val && val.length;

    if (this.state.redirectToMain) return <Redirect to="/" />;

    return (
      <div>
        <Header location={location.pathname} />
        <Form
          model="deep.login"
          onSubmit={val => this.handleLoginSubmit(val)}
          className="login-form"
        >
          <h2 className="login-form__title">LOGIN</h2>
          <Errors
            className="alert alert-danger login-form__alert_square"
            model="deep.login"
            show="touched"
          />
          <Control.text
            model=".username"
            maxLength="50"
            className="form-control login-form__textbox_square"
            placeholder="Username"
            validators={{ required }}
            validateOn="change"
          />
          <Errors
            className="text-danger login-form__alert-text"
            model=".username"
            messages={{ required: "Username is required!" }}
            show="touched"
          />
          <br />
          <Control
            type="password"
            model=".password"
            maxLength="50"
            className="form-control login-form__textbox_square"
            placeholder="Password"
            validators={{ required }}
            validateOn="change"
          />
          <Errors
            className="text-danger login-form__alert-text"
            model=".password"
            messages={{ required: "Password is required!" }}
            show="touched"
          />
          <br />
          <Button
            bsStyle="primary"
            bsSize="large"
            block
            type="submit"
            className="login-form__submit-button"
          >
            Login
          </Button>
          <hr />
          <GoogleAPI clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin onLoginSuccess={res => this.getGoogleInfo(res)} />
          </GoogleAPI>
        </Form>
        <Loader loaded={auth.loaded} options={options} className="spinner" />
      </div>
    );
  }

  changeSpin(loaded) {
    const { dispatch } = this.props;
    dispatch(changeSpinLoaded(loaded));
  }

  redirectToMain() {
    this.changeSpin(true);
    this.setState({ redirectToMain: true });
  }

  handleLoginSubmit(value) {
    const { dispatch } = this.props;
    this.changeSpin(false);
    dispatch(
      authAction.authenticate(
        value,
        l => this.changeSpin(l),
        () => this.redirectToMain()
      )
    );
  }

  getGoogleInfo(res) {
    const { dispatch, history } = this.props;

    localStorage.setItem("google_access_token", res.Zi.access_token);
    localStorage.setItem("google_id_token", res.Zi.id_token);
    localStorage.setItem("username", res.w3.ig);
    dispatch({
      type: SAVE_GOOGLE_USER_REQUESTED,
      user: {
        username: res.w3.ig,
        email: res.w3.U3
      }
    });
    history.push("/");
  }
}

function select(state) {
  return { auth: state.authReducer };
}

export default connect(select)(Login);
